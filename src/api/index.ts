// import Cookies from 'js-cookie';

import { Custody as CustodyClass } from './Custody';

import { Fiat as FiatClass } from './Fiat';

import { Handle as HandleClass } from './Handle';

import { Health as HealthClass } from './Health';

import { Investment as InvestmentClass } from './Investment';

import { Login as LoginClass } from './Login';

import { Market as MarketClass } from './Market';

import { User as UserClass } from './User';

import { VpnHealth as VpnHealthClass } from './VpnHealth';

// import { md5 } from 'js-md5';
import { HttpClient } from './http-client';

const axiosOptions = {
  baseURL: process.env.BASE_URL,
  withCredentials: true,
  ignoreGlobalResponseErrorCodes: ['ErrNeedLogin'],
};

export const Custody = new CustodyClass(axiosOptions);

export const Fiat = new FiatClass(axiosOptions);

export const Handle = new HandleClass(axiosOptions);

export const Health = new HealthClass(axiosOptions);

export const Investment = new InvestmentClass(axiosOptions);

export const Login = new LoginClass(axiosOptions);

export const Market = new MarketClass(axiosOptions);

export const User = new UserClass(axiosOptions);

export const VpnHealth = new VpnHealthClass(axiosOptions);

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
