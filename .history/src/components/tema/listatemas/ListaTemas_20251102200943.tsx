/* eslint-disable @typescript-eslint/no-explicit-any */

import CardTema from "../cardtema/CardTema";

function ListaTemas() {

  return (
    <>
        <div className="flex justfy-center w-full my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4">
                <CardTema tema={{id: 1, descricao: 'Tema 1'}} />
                <CardTema tema={{id: 2, descricao: 'Tema 2'}} />
                <CardTema tema={{id: 3, descricao: 'Tema 3'}} />
            </div>
        </div>

    </>
  )
}

export default ListaTemas;