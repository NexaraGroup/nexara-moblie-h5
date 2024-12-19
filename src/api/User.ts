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
  AddWhiteAddressRequest,
  BasePageRequest,
  BasePageResponseFileVo,
  BasePageResponseUserAddressApplyVo,
  BasePageResponseUserAddressVo,
  BaseRequest,
  BaseResponse,
  BaseResponseBoolean,
  BaseResponseGoogleAuthDto,
  BaseResponseListBalanceVo,
  BaseResponseListStakeBalanceVo,
  BaseResponseQueryUnStakingBalanceVo,
  BaseResponseUserAddressVo,
  BaseResponseUserVo,
  DelWhiteAddressRequest,
  EditWhiteAddressRequest,
  GenerateMonthReport,
  GetDepositAddressRequest,
  GetGaKeyRequest,
  GetImagRequest,
  GetSignKeyRequest,
  QueryBalanceRequest,
  QueryByMailRequest,
  QueryUserInfoRequest,
  QueryUserLastSubmitTimeRequest,
  QueryUserWhiteAddressListRequest,
  QueryWhiteAddressApplyRequest,
  SetPasswordRequest,
  SubmitQuestionnaireRequest,
  UserEditRequest,
  VerifyGACodeRequest,
  VerifyResetingRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description add one white list address
   *
   * @tags user-controller
   * @name AddWhiteAddressUsingPost
   * @summary addWhiteAddress
   * @request POST:/user/addWhiteAddress
   */
  addWhiteAddressUsingPost = <T,>(request: AddWhiteAddressRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/user/addWhiteAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description delete one white list address
   *
   * @tags user-controller
   * @name DelWhiteAddressUsingPost
   * @summary delWhiteAddress
   * @request POST:/user/delWhiteAddress
   */
  delWhiteAddressUsingPost = <T,>(request: DelWhiteAddressRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/user/delWhiteAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description downloadReport
   *
   * @tags user-controller
   * @name DownloadReportUsingPost2
   * @summary downloadReport
   * @request POST:/user/downloadReport
   */
  downloadReportUsingPost2 = <T,>(request: GetImagRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/user/downloadReport`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description edit account info
   *
   * @tags user-controller
   * @name EditUsingPost
   * @summary edit
   * @request POST:/user/edit
   */
  editUsingPost = <T,>(request: UserEditRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/user/edit`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description edit white list address
   *
   * @tags user-controller
   * @name EdtWhiteAddressUsingPost
   * @summary edtWhiteAddress
   * @request POST:/user/edtWhiteAddress
   */
  edtWhiteAddressUsingPost = <T,>(request: EditWhiteAddressRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/user/edtWhiteAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description generateMonthReport
   *
   * @tags user-controller
   * @name GenerateMonthReportUsingPost1
   * @summary generateMonthReport
   * @request POST:/user/generateMonthReport
   */
  generateMonthReportUsingPost1 = <T,>(request: GenerateMonthReport, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/user/generateMonthReport`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description getDepositAddress
   *
   * @tags user-controller
   * @name GetDepositAddressUsingPost
   * @summary getDepositAddress
   * @request POST:/user/getDepositAddress
   */
  getDepositAddressUsingPost = <T,>(
    request: GetDepositAddressRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponseUserAddressVo, void>({
      path: `/user/getDepositAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description getGASecretKey
   *
   * @tags user-controller
   * @name GetGaSecretKeyUsingPost
   * @summary getGASecretKey
   * @request POST:/user/getGASecretKey
   */
  getGaSecretKeyUsingPost = <T,>(request: GetGaKeyRequest, params: RequestParams = {}) =>
    this.request<BaseResponseGoogleAuthDto, void>({
      path: `/user/getGASecretKey`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description get Sign Key
   *
   * @tags user-controller
   * @name GetSignKeyUsingPost
   * @summary getSignKey
   * @request POST:/user/getSignKey
   */
  getSignKeyUsingPost = <T,>(request: GetSignKeyRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/user/getSignKey`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description listReport
   *
   * @tags user-controller
   * @name ListReportUsingPost2
   * @summary listReport
   * @request POST:/user/listReport
   */
  listReportUsingPost2 = <T,>(request: BasePageRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseFileVo, void>({
      path: `/user/listReport`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user all banalce
   *
   * @tags user-controller
   * @name QueryAllBalanceUsingPost1
   * @summary queryAllBalance
   * @request POST:/user/queryAllBalance
   */
  queryAllBalanceUsingPost1 = <T,>(request: BaseRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListBalanceVo, void>({
      path: `/user/queryAllBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user banalce
   *
   * @tags user-controller
   * @name QueryBalanceUsingPost1
   * @summary queryBalance
   * @request POST:/user/queryBalance
   */
  queryBalanceUsingPost1 = <T,>(request: QueryBalanceRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListBalanceVo, void>({
      path: `/user/queryBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user info by mail
   *
   * @tags user-controller
   * @name QueryByMailUsingPost
   * @summary queryByMail
   * @request POST:/user/queryByMail
   */
  queryByMailUsingPost = <T,>(request: QueryByMailRequest, params: RequestParams = {}) =>
    this.request<BaseResponseUserVo, void>({
      path: `/user/queryByMail`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user banalce
   *
   * @tags user-controller
   * @name QueryFiatBalanceUsingPost1
   * @summary queryFiatBalance
   * @request POST:/user/queryFiatBalance
   */
  queryFiatBalanceUsingPost1 = <T,>(request: QueryBalanceRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListBalanceVo, void>({
      path: `/user/queryFiatBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description queryInfo
   *
   * @tags user-controller
   * @name QueryInfoUsingPost
   * @summary queryInfo
   * @request POST:/user/queryInfo
   */
  queryInfoUsingPost = <T,>(request: QueryUserInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponseUserVo, void>({
      path: `/user/queryInfo`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user NFT
   *
   * @tags user-controller
   * @name QueryNftUsingPost1
   * @summary queryNft
   * @request POST:/user/queryNft
   */
  queryNftUsingPost1 = <T,>(request: QueryBalanceRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListBalanceVo, void>({
      path: `/user/queryNft`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user banalce
   *
   * @tags user-controller
   * @name QueryStakingBalanceUsingPost
   * @summary queryStakingBalance
   * @request POST:/user/queryStakingBalance
   */
  queryStakingBalanceUsingPost = <T,>(request: QueryBalanceRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListStakeBalanceVo, void>({
      path: `/user/queryStakingBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user banalce
   *
   * @tags user-controller
   * @name QueryUnStakingBalanceUsingPost
   * @summary queryUnStakingBalance
   * @request POST:/user/queryUnStakingBalance
   */
  queryUnStakingBalanceUsingPost = <T,>(request: QueryBalanceRequest, params: RequestParams = {}) =>
    this.request<BaseResponseQueryUnStakingBalanceVo, void>({
      path: `/user/queryUnStakingBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Query user questionnaire last submit time
   *
   * @tags user-controller
   * @name QueryUserLastSubmitTimeUsingPost
   * @summary queryUserLastSubmitTime
   * @request POST:/user/queryUserLastSubmitTime
   */
  queryUserLastSubmitTimeUsingPost = <T,>(
    request: QueryUserLastSubmitTimeRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/user/queryUserLastSubmitTime`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user whiteList address
   *
   * @tags user-controller
   * @name QueryWhiteAddressApplyListUsingPost1
   * @summary queryWhiteAddressApplyList
   * @request POST:/user/queryWhiteAddressApplyList
   */
  queryWhiteAddressApplyListUsingPost1 = <T,>(
    request: QueryWhiteAddressApplyRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponseUserAddressApplyVo, void>({
      path: `/user/queryWhiteAddressApplyList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user whiteList address
   *
   * @tags user-controller
   * @name QueryWhiteAddressListUsingPost
   * @summary queryWhiteAddressList
   * @request POST:/user/queryWhiteAddressList
   */
  queryWhiteAddressListUsingPost = <T,>(
    request: QueryUserWhiteAddressListRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponseUserAddressVo, void>({
      path: `/user/queryWhiteAddressList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description set new password by old password
   *
   * @tags user-controller
   * @name SetPasswordUsingPost
   * @summary setPassword
   * @request POST:/user/setPassword
   */
  setPasswordUsingPost = <T,>(request: SetPasswordRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/user/setPassword`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Users submit questionnaires
   *
   * @tags user-controller
   * @name SubmitQuestionnaireUsingPost
   * @summary submitQuestionnaire
   * @request POST:/user/submitQuestionnaire
   */
  submitQuestionnaireUsingPost = <T,>(
    request: SubmitQuestionnaireRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/user/submitQuestionnaire`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description verify and save GA
   *
   * @tags user-controller
   * @name VerifyGaCodeUsingPost
   * @summary verifyGACode
   * @request POST:/user/verifyGACode
   */
  verifyGaCodeUsingPost = <T,>(request: VerifyGACodeRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/user/verifyGACode`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description verifyReseting
   *
   * @tags user-controller
   * @name VerifyResetingUsingPost
   * @summary verifyReseting
   * @request POST:/user/verifyReseting
   */
  verifyResetingUsingPost = <T,>(request: VerifyResetingRequest, params: RequestParams = {}) =>
    this.request<BaseResponseBoolean, void>({
      path: `/user/verifyReseting`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
