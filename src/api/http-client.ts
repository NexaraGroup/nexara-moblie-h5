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

import { notification } from '@/components/AtomSendBack';
import errors from '@/const/errors';
import { TOKEN_KEY } from '@/constants';
import { log } from '@/utils/log';
import { isFalse, isStringObjectOrArray } from '@/utils/tool';
import type {
  Axios,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';
import { isArray } from 'radash';

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
  /**
   * 如果接口返回403，是否自动跳到登录页面
   */
  isLoginVerificationRequired?: boolean;
}

export interface FullResponse extends Omit<AxiosResponse, 'config'> {
  config: FullRequestConfig;
}

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
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
  /**
   * 如果接口返回403，是否自动跳到登录页面
   */
  isLoginVerificationRequired?: boolean;
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

const defaultError = 'Please retry after waiting';

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
      baseURL: axiosConfig.baseURL || '//10.1.9.123:7983',
    });

    this.instance.interceptors.request.use(function (config) {
      const token = localStorage.getItem(TOKEN_KEY);

      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    this.instance.interceptors.response.use(
      function (response) {
        const { data = {}, config } = response as FullResponse;
        if (!isFalse(config.showDefaultResponseMessage)) {
          // 新增逻辑，如果 999，直接这里打断，重定向，不需要抛给业务处理了
          // if (data.respCode === 999) {
          //   location.replace('//' + location.host + '/login');
          //   return;
          // }
          if (
            data.respCode !== 0 &&
            !config.ignoreResponseErrorCodes?.includes(data.respCode) &&
            !axiosConfig.ignoreGlobalResponseErrorCodes?.includes(data.respCode)
          ) {
            LogError(response);
            // 简单处理下，后面项目好好定制一下
            if (!(response?.data instanceof Blob)) {
              // 因为这里服务端，没有约定 code
              notification.error({
                message:
                  errors[data.respCode as keyof typeof errors] || data.respMsg || defaultError,
              });
            }
          }
        }
        return response;
      },
      function (error) {
        LogError(error);
        const { response } = error;
        if (response && response.data && response.data?.code === 'ErrIPBlocked') {
          console.log('todo logout');
          return;
        }
        if (error?.code === 'NETWORK_ERROR') {
          notification.error({
            message: error.message || 'Error: Network Error',
          });
        }
        if (
          !isFalse(error.config.isLoginVerificationRequired) &&
          !error.config.url.includes('/auth/info') &&
          error?.response &&
          // error.response.data &&
          // error.response.data.respCode === 'ErrNeedLogin'
          error.response.status === 401
        ) {
          if (error.request.responseURL.includes('/health/checkToken')) {
            return Promise.reject('401x');
          }
          sessionStorage.setItem('needLoginMessage', '1');
          location.replace('//' + location.host + '/login');
          return;
        }
        if (!isFalse(error.config.showDefaultErrorMessage)) {
          if (error.response) {
            const { data } = error.response || {};
            const { code, msg, message } = data || {};
            if (typeof message === 'string') {
              notification.error({
                message,
              });
              // if (message.includes('Token error or expire')) {
              //   location.replace('//' + location.host + '/login');
              //   return;
              // }
            } else if (isStringObjectOrArray(msg)) {
              const parsedMsg = JSON.parse(msg);
              if (isArray(parsedMsg)) {
                const [firstMsg] = parsedMsg;
                if (firstMsg) {
                  notification.error({
                    message: `${firstMsg.field ? `${firstMsg.field} ` : ''}${firstMsg.msg}`,
                  });
                }
              } else {
                notification.error({
                  message: parsedMsg.msg || errors['ErrInternal'],
                });
              }
            } else {
              if (error?.response.status === 500) {
                notification.error({
                  message: 'An unexpected error occurred. Please try again later.',
                });
                return;
              }
              notification.error({
                message:
                  errors[code as keyof typeof errors] ||
                  error.message ||
                  defaultError ||
                  `Error: ${code}`,
              });
            }
          } else {
            notification.error({
              message: error.message || defaultError || `Error: ${error.code}`,
            });
          }
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
        if (response.headers['content-disposition']) {
          return {
            header: response.headers,
            data: response.data,
          };
        }
        return response.data;
      })
      .catch((error) => Promise.reject(error));
  };
}
