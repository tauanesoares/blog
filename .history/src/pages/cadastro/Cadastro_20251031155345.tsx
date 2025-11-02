import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
import type Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';


function Cadastro() {
// colocando na constante uma função do ReactRouterDom que faz a navegação do usuário para algum lugar, sem precisar clicar em algum link
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // criação do estado que ira armazenar o valor do campo "confirmar senha"
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  // criação do estado que irá gerenciar os dados que o usuário vai digitar no formulário
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  // efeito automático que irá direcionar o usuário para a tela de login quando o ID for diferente de zero, ou seja, quando conseguir cadastrar no backend e ele devolver um json com ID preenchido pro front, esse UseEffect fica olhando modificações no estado do Usuario para conseguir direcionar a navegação
  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  // criação da função que navega realmente a pessoa para a tela de login
  function retornar() {
    navigate('/login');
  }

  // função responsavel por "entender" quando um campo do formulário é modificado, e preencher isso no estado do Usuario em tempo real
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      // ...usuario => mantem o que já tinha no estado
      ...usuario,
      // pega o campo que está sendo usado, e preenche com o valor digitado na tela
      [e.target.name]: e.target.value,
    });
  }

  // função que vai entender quando o usuário preenche o campo de atualizar senha
  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  // função que realmente envia o cadastro para o backend
  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    // prevenir que o envio do formulário gere uma atualização de página
    e.preventDefault();

    // if para validar as informações básicas da senha, se alguma dessas validações for falsa, nem envia para o backend.. já da direto o alerta, e apaga os campos de senha e confirmar senha
    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      // mudar o estado do loader, pra fazer o botão ficar com o loading aparecendo
      setIsLoading(true);

      // tenta enviar a requisição para o backend
      try {
        await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuario);
        // se cadastrar, da um alerta de cadastro com sucesso
        alert('Cadastrou o usuário... paz');
      } catch (error) {
        alert('Erro ao cadastar o usuario');
        console.log(error);
      }
    } else {
      alert('Dados errados, confere isso ai.');
      setUsuario({ ...usuario, senha: '' });
      setConfirmarSenha('');
    }

    setIsLoading(false);
  }
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold">
        <div
          className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat 
                    w-full min-h-screen bg-cover bg-center"
        ></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' 
              onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome completo"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button 
                type='reset'
                className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2'
             >
                Cancelar
            </button>
            <button 
                type='submit'
                className='rounded text-white bg-indigo-400 
                           hover:bg-indigo-900 w-1/2 py-2
                           flex justify-center' 
                >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro