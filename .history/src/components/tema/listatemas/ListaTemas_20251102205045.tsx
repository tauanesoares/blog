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
            <SyncLoader
                color="#312e81"
                size={32}
            />
        )}
        <div className="flex justfy-center w-full my-4">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cold-2
                    lg:grid-cols-3 gap-8">
                    <CardTema/>
                </div>
            </div>
        </div>

    </>
  )
}

export default ListaTemas;