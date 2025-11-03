/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import CardTema from "../cardtema/CardTema";
import type Tema from "../../../models/Tema";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { SyncLoader } from "react-spinners";

function ListaTemas() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [temas, setTemas] = useState<Tema[]>([])
  
    const navigate = useNavigate()

  // desestruturação de objeto
  const {usuario, handleLogout} = useContext(AuthContext)
  const token = usuario.token

  useEffect(() => {
    // voltar o usuario pra tela de login
    if (token === '') {
      alert('Voce precisa estar logado!')
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    buscarTemas()
  }, [temas.length])


  async function buscarTemas() {
    try {
      setIsLoading(true)
      // buscando pelos temas com autorização
      await buscar('/temas', setTemas, {
        headers: {
          Authorization: token
        }
      })
    } catch (error: any) {
      if(error.toString().includes('401')) {
        alert('Sessão expirada')
        handleLogout()
      }
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>
        
        {isLoading && (
            <div className='flex justify-center my-8'><SyncLoader size={32} color='#131515' /></div>
        )}
            <div className="container flex flex-col">
                {(!isLoading && temas.length === 0) && (
                <span className="text-3xl text-center my-8">
                    Nenhum Tema foi encontrado!
                </span>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2
                    lg:grid-cols-3 gap-8">
                    {
                    temas.map((tema) => (
                        <CardTema key={tema.id} tema={tema}/>
                    ))
                    }
                </div>
            </div>
        </div>

    </>
  )
}

export default ListaTemas;