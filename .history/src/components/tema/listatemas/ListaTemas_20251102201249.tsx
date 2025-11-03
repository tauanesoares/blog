/* eslint-disable @typescript-eslint/no-explicit-any */

import CardTema from "../cardtema/CardTema";

function ListaTemas() {

  return (
    <>
        <div className="flex justfy-center w-full my-4">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cold-2
                    lg:grid-cols-3 gap-8">
                    <CardTema type={"aaa"}/>
                </div>
            </div>
        </div>

    </>
  )
}

export default ListaTemas;