import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000'
}); 

export const cadastrarUsuario = async (usuarioData: { nome: string; usuario: string; senha: string; foto?: string }) => {