import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000'
}); 

export const cadastrarUsuario = async (url: string, dados: Object, setDados) => {
    const response = await api.post('/usuarios', usuarioData);
    return response.data;
}