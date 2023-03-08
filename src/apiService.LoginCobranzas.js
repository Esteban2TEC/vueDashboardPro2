/* eslint-disable */
import axios from 'axios'

export const serviceLoginCobranzas = axios.create({
  //httpsAgent: new https.Agent({ keepAlive: true }),
  //baseURL: 'https://192.168.3.230:30:30',
  baseURL: 'https://192.168.3.230:30',
  timeout: 30000
});

export const serviceAuthLoginEntitie = axios.create({
  //baseURL: 'https://192.168.3.230:30/entitie/auth/login',
  baseURL: 'https://192.168.3.230:30',
  timeout: 30000
});

export const serviceAuthLoginClient = axios.create({
  //baseURL: 'https://192.168.3.230:30/client/auth/login',
  baseURL: 'https://192.168.3.230:30',
  timeout: 30000
});

export const serviceAuthLoginUser = axios.create({
  //baseURL: 'https://192.168.3.230:30/user/auth/login',
  baseURL: 'https://192.168.3.230:30',
  timeout: 30000
});
