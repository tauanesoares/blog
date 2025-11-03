/* eslint-disable @typescript-eslint/no-explicit-any */

import CardTema from "../cardtema/CardTema";

function ListaTemas() {

  return (
    <>
        <div className="flex justfy-center w-full my-4">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cold-2
                    lg:grid-cols-3 gap-8">
                    <CardTema tema={{id: 1, descricao: 'Tema 1'} as any}/>
                </div>
            </div>
        </div>

    </>
  )
}

export default ListaTemas;