import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000'
}); 

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(response.data);
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(response.data);
}