// import Cookies from 'js-cookie';

import { Backend as BackendClass } from './Backend';

import { Health as HealthClass } from './Health';

import { Login as LoginClass } from './Login';

import { System as SystemClass } from './System';

import { Token as TokenClass } from './Token';

import { Transaction as TransactionClass } from './Transaction';

import { User as UserClass } from './User';

// import { md5 } from 'js-md5';
import { HttpClient } from './http-client';

const axiosOptions = {
  baseURL: process.env.BASE_URL,
  withCredentials: true,
  ignoreGlobalResponseErrorCodes: ['ErrNeedLogin'],
};

export const Backend = new BackendClass(axiosOptions);

export const Health = new HealthClass(axiosOptions);

export const Login = new LoginClass(axiosOptions);

export const System = new SystemClass(axiosOptions);

export const Token = new TokenClass(axiosOptions);

export const Transaction = new TransactionClass(axiosOptions);

export const User = new UserClass(axiosOptions);

export const Http = new HttpClient({});

/** <!-- Http.instance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers['clienttype'] = 'web';
    config.headers['accept-language'] = 'zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7';
    config.headers['bnc-location'] = Cookies.get('BNC-Location');
    config.headers['bnc-uuid'] = Cookies.get('bnc-uuid');
    config.headers['csrftoken'] = md5(Cookies.get('cr00') || '');
    config.headers['fvideo-id'] = Cookies.get('BNC_FV_KEY');
    config.headers['lang'] = 'zh-CN';
    config.headers.Accept = '*';
  }
  if (config.method?.toLocaleUpperCase() === 'POST') {
    config.withCredentials = true;
  }
  return config;
}); --> */
