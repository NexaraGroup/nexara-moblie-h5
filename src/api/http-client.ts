/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { I18N_COOKIE_NAME, TOKEN_KEY } from '@/config/base';
import { Language } from '@/global.enum';
import { log } from '@/utils/log';
import { Toast } from 'antd-mobile';
import type {
  Axios,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';
import store from 'store2';
import en_US_commonLocaleJSON from '../../locales/en-US/common.json';
import zh_CN_commonLocaleJSON from '../../locales/zh-CN/common.json';
import zh_HK_commonLocaleJSON from '../../locales/zh-HK/common.json';

const defaultErrorMap = {
  'en-US': en_US_commonLocaleJSON.errorMsg.common,
  'zh-HK': zh_HK_commonLocaleJSON.errorMsg.common,
  'zh-CN': zh_CN_commonLocaleJSON.errorMsg.common,
};
const locale: keyof typeof Language = (Cookies.get(I18N_COOKIE_NAME) ?? 'en-US') as typeof locale;
const defaultError = defaultErrorMap[locale];
const isFalse = (bol: any): boolean => {
  return Object.prototype.toString.call(bol) === '[object Boolean]' && !bol;
};

const LogError = (response: AxiosResponse<any>) => {
  log.red.bgWhite.bold.log(
    '-'.repeat(8).concat(response.config.url!).concat(' START').concat('-'.repeat(8)),
  )();
  log.red.bgWhite.bold.log('Api Request:')();
  console.log(response.config.data);
  if (response.data) {
    log.red.bgWhite.bold.log('Api Response:')();
    console.log(response.data);
  }
  log.red.bgWhite.bold.log(
    '-'.repeat(8).concat(response.config.url!).concat(' END').concat('-'.repeat(8)),
  )();
};

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestConfig extends AxiosRequestConfig {
  /**
   * 是否显示默认的错误消息。
   * 如果设置为true，当请求发生错误时，将显示默认的错误消息。
   * 如果未设置或设置为false，将不显示默认的错误消息。
   */
  showDefaultErrorMessage?: boolean;
  /**
   * 是否显示默认的响应消息。
   * 如果设置为true，当请求成功时，将显示默认的响应消息。
   * 如果未设置或设置为false，将不显示默认的响应消息。
   */
  showDefaultResponseMessage?: boolean;
  /**
   * 忽略的响应错误代码列表。
   * 如果设置了此属性，那么在此列表中的响应错误代码将被忽略，不会触发错误处理。
   * 如果未设置此属性，所有的响应错误代码都会触发错误处理。
   */
  ignoreResponseErrorCodes?: string[];
}

export interface FullResponse extends Omit<AxiosResponse, 'config'> {
  config: FullRequestConfig;
}

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'>,
    Pick<
      FullRequestConfig,
      'showDefaultErrorMessage' | 'showDefaultResponseMessage' | 'ignoreResponseErrorCodes'
    > {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
  autoSetHeaderToken?: boolean;
  ignoreGlobalResponseErrorCodes?: string[];
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || process.env.API_HOST,
    });

    this.instance.interceptors.request.use(function (config) {
      const token = store.get(TOKEN_KEY);

      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    this.instance.interceptors.response.use(
      function (response) {
        const { data = {}, config } = response as FullResponse;
        if (!isFalse(config.showDefaultResponseMessage)) {
          if (
            data.respCode !== 0 &&
            !config.ignoreResponseErrorCodes?.includes(data.respCode) &&
            !axiosConfig.ignoreGlobalResponseErrorCodes?.includes(data.respCode)
          ) {
            if (Object.keys(en_US_commonLocaleJSON.errorMsg).includes(String(data.respCode))) {
              const json =
                locale === 'en-US'
                  ? en_US_commonLocaleJSON
                  : locale === 'zh-HK'
                    ? zh_HK_commonLocaleJSON
                    : zh_CN_commonLocaleJSON;
              Toast.show({
                content: json.errorMsg[data.respCode as keyof typeof json.errorMsg],
              });
            } else {
              Toast.show({
                content: defaultError,
              });
            }
            LogError(response);
          }
        }
        return response;
      },
      function (error) {
        LogError(error);
        if (error?.response && error.response.status === 401) {
          location.replace('//' + location.host + '/login');
          return;
        }
        if (!isFalse(error.config.showDefaultErrorMessage)) {
          Toast.show({
            content: defaultError,
          });
        }
        return Promise.reject(error);
      },
    );
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public get: Axios['get'] = (url, options) => {
    return this.instance
      .request({
        method: 'GET',
        url,
        ...options,
      })
      .then((response) => response.data);
  };

  public post: Axios['post'] = (url, data, config) => {
    return this.instance
      .request({
        method: 'POST',
        url,
        data,
        ...config,
      })
      .then((response) => response.data);
  };

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type ? { 'Content-Type': type } : { 'Content-Type': ContentType.Json }),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => Promise.reject(error));
  };
}
