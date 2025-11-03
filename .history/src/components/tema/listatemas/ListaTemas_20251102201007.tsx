/* eslint-disable @typescript-eslint/no-explicit-any */

import CardTema from "../cardtema/CardTema";

function ListaTemas() {

  return (
    <>
        <div className="flex justfy-center w-full my-4">
            <div className="container flex flex-col">
                <CardTema tema={{id: 1, descricao: 'Tema 1'}} />
                <CardTema tema={{id: 2, descricao: 'Tema 2'}} />
                <CardTema tema={{id: 3, descricao: 'Tema 3'}} />
            </div>
        </div>

    </>
  )
}

export default ListaTemas;