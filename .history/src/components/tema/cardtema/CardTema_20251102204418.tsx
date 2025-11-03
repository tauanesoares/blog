import { Link } from "react-router-dom";
import type Tema from "../../../models/Tema";



function CardTema() {
  
  return (
    <div className="border-2 rounded-xl overflow-auto">
      <div className="bg-stone-900 text-white text-xl font-bold px-4 py-2">
        Tema
      </div>
      <div className="bg-slate-200 px-4 py-6 text-lg font-semibold">Descricao</div>
      <div className="flex">
        <Link to='' className="flex-1 px-4 py-2 font-bold text-white bg-indigo-400 hover:bg-stone-800 text-center">
          Editar
        </Link>
        <Link to='' className="flex-1 px-4 py-2 font-bold text-white bg-red-400 hover:bg-red-800 text-center">
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardTema;