/* eslint-disable @typescript-eslint/no-explicit-any */

import 



  return (
    <>
    <h2 className='text-center font-bold text-3xl'>Lista de temas</h2>
    {isLoading && (
      <div className='flex justify-center my-8'><SyncLoader size={32} color='#131515' /></div>
    )}

    {(!isLoading && temas.length === 0) && (
      <span className='text-3xl text-center my-8'>Nenhum tema encontrado!</span>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 container mx-auto">
      {temas.map(tema => (
        <CardTema tema={tema} />
      ))}
    </div>
    </>
  );
}

export default ListaTemas;