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

import {
  BasePageResponse,
  BasePageResponseFileVo,
  BaseResponse,
  BaseResponseFileVo,
  ContactusRequest,
  GetFileRequest,
  GetImagRequest,
  ListReportRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class System<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description contactus
   *
   * @tags system-controller
   * @name ContactusUsingPost
   * @summary contactus
   * @request POST:/system/contactus
   */
  contactusUsingPost = <T,>(request: ContactusRequest, params: RequestParams = {}) =>
    this.request<BasePageResponse, void>({
      path: `/system/contactus`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description deleteReport
   *
   * @tags system-controller
   * @name DeleteReportUsingPost1
   * @summary deleteReport
   * @request POST:/system/deleteReport
   */
  deleteReportUsingPost1 = <T,>(request: GetFileRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/system/deleteReport`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description downloadReport
   *
   * @tags system-controller
   * @name DownloadReportUsingPost1
   * @summary downloadReport
   * @request POST:/system/downloadReport
   */
  downloadReportUsingPost1 = <T,>(request: GetImagRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/system/downloadReport`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description get Img
   *
   * @tags system-controller
   * @name GetImgUsingPost
   * @summary getImg
   * @request POST:/system/img
   */
  getImgUsingPost = <T,>(request: GetImagRequest, params: RequestParams = {}) =>
    this.request<BaseResponseFileVo, void>({
      path: `/system/img`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description listReport
   *
   * @tags system-controller
   * @name ListReportUsingPost1
   * @summary listReport
   * @request POST:/system/listReport
   */
  listReportUsingPost1 = <T,>(request: ListReportRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseFileVo, void>({
      path: `/system/listReport`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 文件上传
   *
   * @tags system-controller
   * @name FileUploadUsingPost1
   * @summary 文件上传
   * @request POST:/system/upload
   */
  fileUploadUsingPost1 = <T,>(data: any, params: RequestParams = {}) =>
    this.request<BaseResponseFileVo, void>({
      path: `/system/upload`,
      method: 'POST',
      body: data,
      type: ContentType.FormData,
      ...params,
    });
}
