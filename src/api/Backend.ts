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
  AddContractRequest,
  AddEmailExample,
  AddRecordRequest,
  AddTokenRequest,
  ApproveAddressRequest,
  ApproveFiatRequest,
  ApproveKyaRequest,
  ApproveTransactionRequest,
  ApproveUnStakingRequest,
  ApproveUserRequest,
  ApproveWhiteAddressApplyRequest,
  BackendQueryWhiteAddressApplyRequest,
  BasePageResponse,
  BasePageResponseFiatTransactionInfoResponse,
  BasePageResponseFileVo,
  BasePageResponseLogActionMapVo,
  BasePageResponseQueryUserListResponse,
  BasePageResponseTokenPolicyVo,
  BasePageResponseTransactionVo,
  BasePageResponseUserAddressApplyVo,
  BasePageResponseUserAddressVo,
  BasePageResponseUserBalanceVo,
  BaseRequest,
  BaseResponse,
  BaseResponseContractVo,
  BaseResponseFiatTransactionInfoResponse,
  BaseResponseFileVo,
  BaseResponseInt,
  BaseResponseListAssetBalanceResponse,
  BaseResponseListBalanceVo,
  BaseResponseListCollectRuleVo,
  BaseResponseListContractVo,
  BaseResponseListEnumVo,
  BaseResponseListLogActionMapVo,
  BaseResponseListNodeInfoVo,
  BaseResponseListSignRequestVo,
  BaseResponseListStakeBalanceVo,
  BaseResponseListTokenVo,
  BaseResponseListTransactionStatisticsVo,
  BaseResponseListUserAddressVo,
  BaseResponseMapStringListChainAccountVo,
  BaseResponseTokenPolicyVo,
  BaseResponseTokenVo,
  BaseResponseUserInfoResponse,
  BaseResponseUserVo,
  BaseUserRequest,
  BusinessApproveRequest,
  CancelReScanBlockRequest,
  CloseTransactionRequest,
  CollectTokenRequest,
  CreatClaimRequest,
  CreateCollectRuleRequest,
  CreatUserRequest,
  CreatWalletRequest,
  DeleteEmailTemplateRequest,
  EditInviteCodeStatusRequest,
  EditRateRequest,
  EditRoleRequest,
  EditTokenExtInfoRequest,
  FiatWithdrawRequest,
  GenerateGasAddressRequest,
  GenerateInvestmentAddressRequest,
  GenerateMonthReport,
  GenerateUserDepositAddressRequest,
  GetChainGasFeeRequest,
  GetContractByIdRequest,
  GetFileRequest,
  GetInvestmentParameterRequest,
  GetTokenByIdRequest,
  GetTokenListRequset,
  GetTokenPolicyListRequest,
  GetTransactionRequest,
  GetUserInfoRequest,
  GetWalletInfoRequest,
  ListReportRequest,
  LockUserRequest,
  PoolTransferRequest,
  QueryAddressRequest,
  QueryAddressUsingPost1Payload,
  QueryAllBalanceRequset,
  QueryApproveRecord,
  QueryBalanceRequest,
  QueryByMailRequest,
  QueryChainBalanceRequest,
  QueryChainTokenListRequest,
  QueryChainTransactionByBackendRequest,
  QueryContractListRequest,
  QueryEnumRequest,
  QueryFiatTransactionRequest,
  QueryFundRequest,
  QueryInvestmentYield,
  QueryInviterRequest,
  QueryNodeInfoRequest,
  QueryOrderListRequest,
  QueryRecordRequest,
  QueryRuleRequest,
  QueryTransactionByBackendRequest,
  QueryTransactionExceptionRequest,
  QueryTransactionRequest,
  QueryUserInfoProductRequest,
  QueryUserListRequest,
  QueryUserLogActionRequest,
  QueryUserRegisterRequest,
  QueryWaitCollectRequest,
  QueryWalletRequest,
  QueryWalletTransactionRequest,
  QueryYieldRequest,
  ReSendTransactionRequest,
  ResetUserGaRequest,
  ResyncBlockRequset,
  RetryTransactionRequest,
  SaveRuleRequest,
  SetContractRequest,
  SetTokenByIdRequest,
  SetTokenPolicyRequest,
  SpeedUpTransactionRequest,
  SumGasTransactionRequest,
  SumUserBalanceRequest,
  TokenBoundUserRequest,
  TransactionStatisticsRequest,
  TransferForWalletRequest,
  TransferGasFeeRequest,
  UpdateEmailTemplateRequest,
  UploadAttachmentUsingPostParams,
  UploadAttachmentUsingPostPayload,
  UploadUsingPostParams,
  UploadUsingPostPayload,
  UserTransferGasFeeRequset,
  VerifyAddressRequest,
  WalletGenerateAddressRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Backend<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description admin用户详情第一个tab页面-查询子用户列表
   *
   * @tags New
   * @name QueryChildBalanceUsingPost
   * @summary 查询子用户列表
   * @request POST:/backend/acquisition/queryChildBalance
   */
  queryChildBalanceUsingPost = <T,>(request: QueryByMailRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/acquisition/queryChildBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询地址
   *
   * @tags backend-controller
   * @name QueryAddressUsingPost
   * @summary queryAddress
   * @request POST:/backend/address/query
   */
  queryAddressUsingPost = <T,>(request: QueryAddressRequest, params: RequestParams = {}) =>
    this.request<BaseResponseMapStringListChainAccountVo, void>({
      path: `/backend/address/query`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user balance
   *
   * @tags backend-controller
   * @name QueryFiatBalanceUsingPost
   * @summary queryFiatBalance
   * @request POST:/backend/asset/queryFiatBalance
   */
  queryFiatBalanceUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListBalanceVo, void>({
      path: `/backend/asset/queryFiatBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query user nft
   *
   * @tags backend-controller
   * @name QueryNftUsingPost
   * @summary queryNft
   * @request POST:/backend/asset/queryNft
   */
  queryNftUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListBalanceVo, void>({
      path: `/backend/asset/queryNft`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 数字币充值提现页面：审批交易
   *
   * @tags New
   * @name ApproveTransactionUsingPost
   * @summary 审批交易
   * @request POST:/backend/assets/custody/transaction/approve
   */
  approveTransactionUsingPost = <T,>(
    request: ApproveTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/custody/transaction/approve`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第二个tab页面(Crypto):History 数字币充值提现页面：查询交易信息
   *
   * @tags New
   * @name QueryTransactionUsingPost
   * @summary 查询交易信息
   * @request POST:/backend/assets/custody/transaction/query
   */
  queryTransactionUsingPost = <T,>(
    request: QueryTransactionByBackendRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponse, void>({
      path: `/backend/assets/custody/transaction/query`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询交易信息导出
   *
   * @tags New
   * @name QueryTransactionExportUsingPost
   * @summary 查询交易信息导出
   * @request POST:/backend/assets/custody/transaction/query/export
   */
  queryTransactionExportUsingPost = <T,>(
    request: QueryTransactionByBackendRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/backend/assets/custody/transaction/query/export`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询法币账户
   *
   * @tags New
   * @name QueryAccountUsingPost
   * @summary 查询法币账户
   * @request POST:/backend/assets/fiat/account/queryAccount
   */
  queryAccountUsingPost = <T,>(request: BaseUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/fiat/account/queryAccount`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 后台添加交易记录
   *
   * @tags New
   * @name AddRecordUsingPost
   * @summary 后台添加交易记录
   * @request POST:/backend/assets/fiat/addRecord
   */
  addRecordUsingPost = <T,>(request: AddRecordRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/fiat/addRecord`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 审批法币交易
   *
   * @tags New
   * @name ApproveUsingPost
   * @summary 审批法币交易
   * @request POST:/backend/assets/fiat/approve
   */
  approveUsingPost = <T,>(request: ApproveFiatRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/fiat/approve`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询法币银行卡
   *
   * @tags New
   * @name QueryBankUsingPost
   * @summary 查询法币银行卡
   * @request POST:/backend/assets/fiat/bank/queryBank
   */
  queryBankUsingPost = <T,>(request: BaseUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/fiat/bank/queryBank`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询法币汇率
   *
   * @tags New
   * @name GetRateUsingPost
   * @summary 查询法币汇率
   * @request POST:/backend/assets/fiat/getRate
   */
  getRateUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/fiat/getRate`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询法币交易详情
   *
   * @tags New
   * @name GetTransactionUsingPost
   * @summary 查询法币交易详情
   * @request POST:/backend/assets/fiat/getTransaction
   */
  getTransactionUsingPost = <T,>(request: GetTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponseFiatTransactionInfoResponse, void>({
      path: `/backend/assets/fiat/getTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询法币交易列表
   *
   * @tags New
   * @name QueryTransactionUsingPost1
   * @summary 查询法币交易列表
   * @request POST:/backend/assets/fiat/queryTransaction
   */
  queryTransactionUsingPost1 = <T,>(
    request: QueryFiatTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponseFiatTransactionInfoResponse, void>({
      path: `/backend/assets/fiat/queryTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询法币交易列表导出
   *
   * @tags New
   * @name QueryTransactionExportUsingPost1
   * @summary 查询法币交易列表导出
   * @request POST:/backend/assets/fiat/queryTransaction/export
   */
  queryTransactionExportUsingPost1 = <T,>(
    request: QueryFiatTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/backend/assets/fiat/queryTransaction/export`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Fund导出
   *
   * @tags New
   * @name QueryFundExportUsingPost
   * @summary Fund导出
   * @request POST:/backend/assets/fund/export
   */
  queryFundExportUsingPost = <T,>(request: QueryFundRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/backend/assets/fund/export`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 地址管理页面使用
   *
   * @tags New
   * @name GenerateAddressUsingPost
   * @summary 获取钱包ID
   * @request POST:/backend/assets/investment/generateAddress
   */
  generateAddressUsingPost = <T,>(
    request: GenerateInvestmentAddressRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/investment/generateAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name GetInvestmentParameterUsingPost
   * @summary GetInvestmentParameterRequest
   * @request POST:/backend/assets/investment/getInvestmentParameter
   */
  getInvestmentParameterUsingPost = <T,>(
    request: GetInvestmentParameterRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/investment/getInvestmentParameter`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询基金列表
   *
   * @tags New
   * @name QueryInvestmentListUsingPost
   * @summary 查询基金列表
   * @request POST:/backend/assets/investment/queryInvestmentList
   */
  queryInvestmentListUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/investment/queryInvestmentList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第四个tab页面(Fund):用户理财交易(Transaction history) Fund管理第三个tab页(Transaction):
   *
   * @tags New
   * @name QueryInvestmentTransactionUsingPost
   * @summary 用户理财交易(Transaction history)
   * @request POST:/backend/assets/investment/transaction/queryTransaction
   */
  queryInvestmentTransactionUsingPost = <T,>(
    request: QueryTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponse, void>({
      path: `/backend/assets/investment/transaction/queryTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Fund管理第一个tab页(Client):用户理财账户
   *
   * @tags New
   * @name QueryUserListInvestmentBalanceUsingPost
   * @summary 用户理财账户(Transaction history)
   * @request POST:/backend/assets/investment/user/queryUserListInvestmentBalance
   */
  queryUserListInvestmentBalanceUsingPost = <T,>(
    request: QueryUserRegisterRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/investment/user/queryUserListInvestmentBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第四个tab页面(Fund):用户收益明细(Yield detail) Fund管理第四个tab页(Yield detail):
   *
   * @tags New
   * @name QueryInvestmentYieldUsingPost
   * @summary 用户收益明细(Yield detail)
   * @request POST:/backend/assets/investment/yield/queryYield
   */
  queryInvestmentYieldUsingPost = <T,>(request: QueryYieldRequest, params: RequestParams = {}) =>
    this.request<BasePageResponse, void>({
      path: `/backend/assets/investment/yield/queryYield`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Fund管理第二个tab页(Inviter):邀请人信息列表
   *
   * @tags New
   * @name QueryInviterListUsingPost
   * @summary 用户理财账户(Transaction history)
   * @request POST:/backend/assets/market/user/queryInviterList
   */
  queryInviterListUsingPost = <T,>(request: QueryInviterRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/market/user/queryInviterList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询审核记录
   *
   * @tags New
   * @name QueryApproveRecordUsingPost
   * @summary 查询审核记录
   * @request POST:/backend/assets/transaction/queryApproveRecord
   */
  queryApproveRecordUsingPost = <T,>(request: QueryApproveRecord, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/transaction/queryApproveRecord`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第四个tab页面(Fund):用户收益明细(Yield detail) Fund管理第四个tab页(Yield detail):
   *
   * @tags New
   * @name QueryInvestmentYieldV2UsingPost
   * @summary 用户收益明细(Yield detail)
   * @request POST:/backend/assets/v2/investment/yield/queryYield
   */
  queryInvestmentYieldV2UsingPost = <T,>(
    request: QueryInvestmentYield,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponse, void>({
      path: `/backend/assets/v2/investment/yield/queryYield`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 地址管理页面使用
   *
   * @tags New
   * @name QueryChainBalanceUsingPost
   * @summary 获取Assets
   * @request POST:/backend/assets/wallet/queryChainBalance
   */
  queryChainBalanceUsingPost = <T,>(
    request: QueryChainBalanceRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/assets/wallet/queryChainBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 地址管理页面使用
   *
   * @tags New
   * @name QueryWalletTransactionUsingPost
   * @summary 获取历史交易
   * @request POST:/backend/assets/wallet/transaction/queryWalletTransaction
   */
  queryWalletTransactionUsingPost = <T,>(
    request: QueryWalletTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponse, void>({
      path: `/backend/assets/wallet/transaction/queryWalletTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 归集用户资产
   *
   * @tags backend-controller
   * @name CollectTokenUsingPost
   * @summary collectToken
   * @request POST:/backend/collect/collectToken
   */
  collectTokenUsingPost = <T,>(request: CollectTokenRequest, params: RequestParams = {}) =>
    this.request<BaseResponseInt, void>({
      path: `/backend/collect/collectToken`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询归集规则
   *
   * @tags backend-controller
   * @name QueryRuleUsingPost
   * @summary queryRule
   * @request POST:/backend/collect/queryRule
   */
  queryRuleUsingPost = <T,>(request: QueryRuleRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListCollectRuleVo, void>({
      path: `/backend/collect/queryRule`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询待归集交易
   *
   * @tags backend-controller
   * @name QueryWaitCollectUsingPost
   * @summary queryWaitCollect
   * @request POST:/backend/collect/queryWaitCollect
   */
  queryWaitCollectUsingPost = <T,>(request: QueryWaitCollectRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseUserAddressVo, void>({
      path: `/backend/collect/queryWaitCollect`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 保存归集规则
   *
   * @tags backend-controller
   * @name SaveRuleUsingPost
   * @summary saveRule
   * @request POST:/backend/collect/saveRule
   */
  saveRuleUsingPost = <T,>(request: SaveRuleRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/collect/saveRule`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 转账gasfee到内部资金池地址
   *
   * @tags backend-controller
   * @name TransferGasFeeUsingPost
   * @summary transferGasFee
   * @request POST:/backend/collect/transferGasFee
   */
  transferGasFeeUsingPost = <T,>(request: TransferGasFeeRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/collect/transferGasFee`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建一个归集规则
   *
   * @tags backend-controller
   * @name CreateCollectRuleUsingPost
   * @summary createCollectRule
   * @request POST:/backend/collectRule/create
   */
  createCollectRuleUsingPost = <T,>(
    request: CreateCollectRuleRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/collectRule/create`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第二个tab页面(Cyrpto):用户资产列表
   *
   * @tags New
   * @name QueryBalanceUsingPost
   * @summary 用户资产列表
   * @request POST:/backend/custody/asset/queryBalance
   */
  queryBalanceUsingPost = <T,>(request: QueryBalanceRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListBalanceVo, void>({
      path: `/backend/custody/asset/queryBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description addExample
   *
   * @tags handle-email-message-controller
   * @name AddExampleUsingPost
   * @summary addExample
   * @request POST:/backend/email/addExample
   */
  addExampleUsingPost = <T,>(request: AddEmailExample, params: RequestParams = {}) =>
    this.request<object, void>({
      path: `/backend/email/addExample`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除模板
   *
   * @tags handle-email-message-controller
   * @name DeleteTemplateUsingPost
   * @summary deleteTemplate
   * @request POST:/backend/email/deleteTemplate
   */
  deleteTemplateUsingPost = <T,>(request: DeleteEmailTemplateRequest, params: RequestParams = {}) =>
    this.request<object, void>({
      path: `/backend/email/deleteTemplate`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description queryExample
   *
   * @tags handle-email-message-controller
   * @name QueryExamplesUsingPost
   * @summary queryExample
   * @request POST:/backend/email/queryExample
   */
  queryExamplesUsingPost = <T,>(request: object, params: RequestParams = {}) =>
    this.request<object, void>({
      path: `/backend/email/queryExample`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询模板
   *
   * @tags handle-email-message-controller
   * @name QueryTemplatesUsingPost
   * @summary queryTemplate
   * @request POST:/backend/email/queryTemplate
   */
  queryTemplatesUsingPost = <T,>(request: object, params: RequestParams = {}) =>
    this.request<object, void>({
      path: `/backend/email/queryTemplate`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description sendEmail
   *
   * @tags handle-email-message-controller
   * @name SendEmailUsingPost
   * @summary sendEmail
   * @request POST:/backend/email/sendEmail
   */
  sendEmailUsingPost = <T,>(request: object, params: RequestParams = {}) =>
    this.request<object, void>({
      path: `/backend/email/sendEmail`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description sendEmails
   *
   * @tags handle-email-message-controller
   * @name SendEmailsUsingPost
   * @summary sendEmails
   * @request POST:/backend/email/sendEmails
   */
  sendEmailsUsingPost = <T,>(request: object, params: RequestParams = {}) =>
    this.request<object, void>({
      path: `/backend/email/sendEmails`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description sendHtmlEmail
   *
   * @tags handle-email-message-controller
   * @name SendHtmlEmailUsingPost
   * @summary sendHtmlEmail
   * @request POST:/backend/email/sendHtmlEmail
   */
  sendHtmlEmailUsingPost = <T,>(request: object, params: RequestParams = {}) =>
    this.request<object, void>({
      path: `/backend/email/sendHtmlEmail`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 修改模板
   *
   * @tags handle-email-message-controller
   * @name UpdateTemplateUsingPost
   * @summary updateTemplate
   * @request POST:/backend/email/updateTemplate
   */
  updateTemplateUsingPost = <T,>(request: UpdateEmailTemplateRequest, params: RequestParams = {}) =>
    this.request<object, void>({
      path: `/backend/email/updateTemplate`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description upload
   *
   * @tags handle-email-message-controller
   * @name UploadUsingPost
   * @summary upload
   * @request POST:/backend/email/upload
   */
  uploadUsingPost = <T,>(
    query: UploadUsingPostParams,
    data: UploadUsingPostPayload,
    params: RequestParams = {},
  ) =>
    this.request<object, void>({
      path: `/backend/email/upload`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description uploadAttachment
   *
   * @tags handle-email-message-controller
   * @name UploadAttachmentUsingPost
   * @summary uploadAttachment
   * @request POST:/backend/email/uploadAttachment
   */
  uploadAttachmentUsingPost = <T,>(
    query: UploadAttachmentUsingPostParams,
    data: UploadAttachmentUsingPostPayload,
    params: RequestParams = {},
  ) =>
    this.request<object, void>({
      path: `/backend/email/uploadAttachment`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description admin用户详情第四个tab页面(Fund):用户理财账户(Holding)
   *
   * @tags New
   * @name QueryUserHoldingUsingPost
   * @summary 用户理财账户(Holding)
   * @request POST:/backend/investment/user/queryHolding
   */
  queryUserHoldingUsingPost = <T,>(request: QueryYieldRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/investment/user/queryHolding`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 审批Staking Request交易信息
   *
   * @tags backend-controller
   * @name ApproveAddressUsingPost
   * @summary approveStakingRequest
   * @request POST:/backend/staking/approveAddress
   */
  approveAddressUsingPost = <T,>(request: ApproveAddressRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/staking/approveAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 审批Staking Request交易信息
   *
   * @tags backend-controller
   * @name ApproveStakingRequestUsingPost
   * @summary approveStakingRequest
   * @request POST:/backend/staking/approveRequest
   */
  approveStakingRequestUsingPost = <T,>(
    request: ApproveTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/staking/approveRequest`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 审批UnStaking Request交易
   *
   * @tags backend-controller
   * @name ApproveUnStakingRequestUsingPost
   * @summary approveUnStakingRequest
   * @request POST:/backend/staking/approveUnRequest
   */
  approveUnStakingRequestUsingPost = <T,>(
    request: ApproveUnStakingRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/staking/approveUnRequest`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description creatStakingClaim
   *
   * @tags backend-controller
   * @name CreatClaimUsingPost
   * @summary creatStakingClaim
   * @request POST:/backend/staking/creatClaim
   */
  creatClaimUsingPost = <T,>(request: CreatClaimRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/staking/creatClaim`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description sumStakeBalance
   *
   * @tags backend-controller
   * @name SumBalanceUsingPost
   * @summary sumStakeBalance
   * @request POST:/backend/staking/sumStakeBalance
   */
  sumBalanceUsingPost = <T,>(request: BaseRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListStakeBalanceVo, void>({
      path: `/backend/staking/sumStakeBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description sumStakeBalance
   *
   * @tags backend-controller
   * @name SumUserBalanceUsingPost
   * @summary sumStakeBalance
   * @request POST:/backend/staking/sumUserStakeBalance
   */
  sumUserBalanceUsingPost = <T,>(request: SumUserBalanceRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListStakeBalanceVo, void>({
      path: `/backend/staking/sumUserStakeBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第一个tab页面：删除文件
   *
   * @tags New
   * @name DeleteReportUsingPost
   * @summary 删除文件
   * @request POST:/backend/system/deleteFile
   */
  deleteReportUsingPost = <T,>(request: GetFileRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/system/deleteFile`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第一个tab页面：下载文件
   *
   * @tags New
   * @name DownloadReportUsingPost
   * @summary 下载文件
   * @request POST:/backend/system/downloadFile
   */
  downloadReportUsingPost = <T,>(request: GetFileRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/backend/system/downloadFile`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第五个tab页面(Statement)：查询用户上传的文件列表
   *
   * @tags New
   * @name ListReportUsingPost
   * @summary 查询用户上传的文件列表
   * @request POST:/backend/system/listFile
   */
  listReportUsingPost = <T,>(request: ListReportRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseFileVo, void>({
      path: `/backend/system/listFile`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query Enum
   *
   * @tags backend-controller
   * @name QueryEnumUsingPost
   * @summary  query Enum
   * @request POST:/backend/system/queryEnum
   */
  queryEnumUsingPost = <T,>(request: QueryEnumRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListEnumVo, void>({
      path: `/backend/system/queryEnum`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query node
   *
   * @tags backend-controller
   * @name QueryNodeInfoUsingPost
   * @summary  query node
   * @request POST:/backend/system/queryNodeInfo
   */
  queryNodeInfoUsingPost = <T,>(request: QueryNodeInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListNodeInfoVo, void>({
      path: `/backend/system/queryNodeInfo`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第一个tab页面：文件上传
   *
   * @tags New
   * @name FileUploadUsingPost
   * @summary 文件上传
   * @request POST:/backend/system/uploadFile
   */
  fileUploadUsingPost = <T,>(data: any, params: RequestParams = {}) =>
    this.request<BaseResponseFileVo, void>({
      path: `/backend/system/uploadFile`,
      method: 'POST',
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description add token
   *
   * @tags backend-controller
   * @name AddUsingPost
   * @summary add token
   * @request POST:/backend/token/add
   */
  addUsingPost = <T,>(request: AddTokenRequest, params: RequestParams = {}) =>
    this.request<BaseResponseTokenVo, void>({
      path: `/backend/token/add`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description add Contract
   *
   * @tags backend-controller
   * @name AddContractUsingPost
   * @summary  add Contract
   * @request POST:/backend/token/addContract
   */
  addContractUsingPost = <T,>(request: AddContractRequest, params: RequestParams = {}) =>
    this.request<BaseResponseContractVo, void>({
      path: `/backend/token/addContract`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description add Token Policy
   *
   * @tags backend-controller
   * @name AddTokenPolicyUsingPost
   * @summary addTokenPolicy
   * @request POST:/backend/token/addTokenPolicy
   */
  addTokenPolicyUsingPost = <T,>(request: SetTokenPolicyRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/token/addTokenPolicy`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Token绑定用户
   *
   * @tags backend-controller
   * @name BoundUserUsingPost
   * @summary TokenBoundUser
   * @request POST:/backend/token/boundUser
   */
  boundUserUsingPost = <T,>(request: TokenBoundUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/token/boundUser`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description delete Contract By Id
   *
   * @tags backend-controller
   * @name DelContractByIdUsingPost
   * @summary delContractById
   * @request POST:/backend/token/delContractById
   */
  delContractByIdUsingPost = <T,>(request: GetContractByIdRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/token/delContractById`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description delete Token Policy By Id
   *
   * @tags backend-controller
   * @name DelTokenPolicyByIdUsingPost
   * @summary delTokenPolicyById
   * @request POST:/backend/token/delTokenPolicyById
   */
  delTokenPolicyByIdUsingPost = <T,>(request: GetTokenByIdRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/token/delTokenPolicyById`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description editTokenExtInfo
   *
   * @tags backend-controller
   * @name EditTokenExtInfoUsingPost
   * @summary editTokenExtInfo
   * @request POST:/backend/token/editTokenExtInfo
   */
  editTokenExtInfoUsingPost = <T,>(requset: EditTokenExtInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/token/editTokenExtInfo`,
      method: 'POST',
      body: requset,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description get Contract By Id
   *
   * @tags backend-controller
   * @name GetContractByIdUsingPost
   * @summary getContractById
   * @request POST:/backend/token/getContractById
   */
  getContractByIdUsingPost = <T,>(request: GetContractByIdRequest, params: RequestParams = {}) =>
    this.request<BaseResponseContractVo, void>({
      path: `/backend/token/getContractById`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description list all token
   *
   * @tags backend-controller
   * @name GetTokenListUsingPost
   * @summary getTokenList
   * @request POST:/backend/token/getList
   */
  getTokenListUsingPost = <T,>(requset: GetTokenListRequset, params: RequestParams = {}) =>
    this.request<BaseResponseListTokenVo, void>({
      path: `/backend/token/getList`,
      method: 'POST',
      body: requset,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description get Token By Id
   *
   * @tags backend-controller
   * @name GetTokenByIdUsingPost
   * @summary getTokenById
   * @request POST:/backend/token/getTokenById
   */
  getTokenByIdUsingPost = <T,>(requset: GetTokenByIdRequest, params: RequestParams = {}) =>
    this.request<BaseResponseTokenVo, void>({
      path: `/backend/token/getTokenById`,
      method: 'POST',
      body: requset,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description get Token Policy By Id
   *
   * @tags backend-controller
   * @name GetTokenPolicyByIdUsingPost
   * @summary getTokenPolicyById
   * @request POST:/backend/token/getTokenPolicyById
   */
  getTokenPolicyByIdUsingPost = <T,>(request: GetTokenByIdRequest, params: RequestParams = {}) =>
    this.request<BaseResponseTokenPolicyVo, void>({
      path: `/backend/token/getTokenPolicyById`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description get TokenPolicy List
   *
   * @tags backend-controller
   * @name GetTokenPolicyListUsingPost
   * @summary getTokenPolicyList
   * @request POST:/backend/token/getTokenPolicyList
   */
  getTokenPolicyListUsingPost = <T,>(
    request: GetTokenPolicyListRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponseTokenPolicyVo, void>({
      path: `/backend/token/getTokenPolicyList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query Contract
   *
   * @tags backend-controller
   * @name QueryContractUsingPost
   * @summary  query Contract
   * @request POST:/backend/token/queryContract
   */
  queryContractUsingPost = <T,>(request: QueryContractListRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListContractVo, void>({
      path: `/backend/token/queryContract`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询FundSto绑定的用户List
   *
   * @tags backend-controller
   * @name QueryFundStoUserListUsingPost
   * @summary queryFundStoUserList
   * @request POST:/backend/token/queryFundStoUserList
   */
  queryFundStoUserListUsingPost = <T,>(
    request: TokenBoundUserRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponseListUserAddressVo, void>({
      path: `/backend/token/queryFundStoUserList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description set Contract
   *
   * @tags backend-controller
   * @name SetContractUsingPost
   * @summary setContract
   * @request POST:/backend/token/setContract
   */
  setContractUsingPost = <T,>(request: SetContractRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/token/setContract`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description set TokenById
   *
   * @tags backend-controller
   * @name SetTokenByIdUsingPost
   * @summary setTokenById
   * @request POST:/backend/token/setTokenById
   */
  setTokenByIdUsingPost = <T,>(request: SetTokenByIdRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/token/setTokenById`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description set Token Policy
   *
   * @tags backend-controller
   * @name SetTokenPolicyUsingPost
   * @summary setTokenPolicy
   * @request POST:/backend/token/setTokenPolicy
   */
  setTokenPolicyUsingPost = <T,>(request: SetTokenPolicyRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/token/setTokenPolicy`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Token解绑用户
   *
   * @tags backend-controller
   * @name UnBoundUserUsingPost
   * @summary TokenUnBoundUser
   * @request POST:/backend/token/unBoundUser
   */
  unBoundUserUsingPost = <T,>(request: TokenBoundUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/token/unBoundUser`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 交易关闭
   *
   * @tags backend-controller
   * @name FailTransactionUsingPost
   * @summary FailTransaction
   * @request POST:/backend/transaction/fail
   */
  failTransactionUsingPost = <T,>(request: RetryTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/transaction/fail`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 法币充值
   *
   * @tags backend-controller
   * @name FiatDepositUsingPost
   * @summary fiatDeposit
   * @request POST:/backend/transaction/fiatDeposit
   */
  fiatDepositUsingPost = <T,>(request: FiatWithdrawRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/transaction/fiatDeposit`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 法币提现
   *
   * @tags backend-controller
   * @name FiatWithdrawUsingPost
   * @summary fiatWithdraw
   * @request POST:/backend/transaction/fiatWithdraw
   */
  fiatWithdrawUsingPost = <T,>(request: FiatWithdrawRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/transaction/fiatWithdraw`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 导出csv交易信息
   *
   * @tags backend-controller
   * @name OutputUsingPost
   * @summary output
   * @request POST:/backend/transaction/output
   */
  outputUsingPost = <T,>(request: QueryTransactionByBackendRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/backend/transaction/output`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 资金池内互转
   *
   * @tags backend-controller
   * @name PoolTransferUsingPost
   * @summary poolTransferRequest
   * @request POST:/backend/transaction/poolTransfer
   */
  poolTransferUsingPost = <T,>(request: PoolTransferRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/transaction/poolTransfer`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询链交易信息
   *
   * @tags backend-controller
   * @name QueryChainTransactionUsingPost
   * @summary queryChainTransaction
   * @request POST:/backend/transaction/queryChainTransaction
   */
  queryChainTransactionUsingPost = <T,>(
    request: QueryChainTransactionByBackendRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponseTransactionVo, void>({
      path: `/backend/transaction/queryChainTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询异常的交易信息
   *
   * @tags backend-controller
   * @name QueryExceptionUsingPost
   * @summary queryException
   * @request POST:/backend/transaction/queryException
   */
  queryExceptionUsingPost = <T,>(
    request: QueryTransactionExceptionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponseTransactionVo, void>({
      path: `/backend/transaction/queryException`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description query sign recoder
   *
   * @tags backend-controller
   * @name QuerySignRecoderUsingPost
   * @summary querySignRecoder
   * @request POST:/backend/transaction/querySignRecoder
   */
  querySignRecoderUsingPost = <T,>(requset: BaseRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListSignRequestVo, void>({
      path: `/backend/transaction/querySignRecoder`,
      method: 'POST',
      body: requset,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 交易重新签名
   *
   * @tags backend-controller
   * @name ReSignTransactionUsingPost
   * @summary reSignTransaction
   * @request POST:/backend/transaction/reSign
   */
  reSignTransactionUsingPost = <T,>(request: RetryTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/transaction/reSign`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description rescan transaction in block
   *
   * @tags backend-controller
   * @name ResyncBlockUsingPost
   * @summary resync block
   * @request POST:/backend/transaction/resyncBlock
   */
  resyncBlockUsingPost = <T,>(requset: ResyncBlockRequset, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/transaction/resyncBlock`,
      method: 'POST',
      body: requset,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 重试交易
   *
   * @tags backend-controller
   * @name RetryTransactionUsingPost
   * @summary retryTransaction
   * @request POST:/backend/transaction/retry
   */
  retryTransactionUsingPost = <T,>(request: RetryTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/transaction/retry`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 加速交易
   *
   * @tags backend-controller
   * @name SpeedUpTransactionUsingPost
   * @summary speedUpTransaction
   * @request POST:/backend/transaction/speedUp
   */
  speedUpTransactionUsingPost = <T,>(
    request: SpeedUpTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/transaction/speedUp`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据综合条件筛选出交易信息
   *
   * @tags backend-controller
   * @name StatisticsUsingPost
   * @summary statistics
   * @request POST:/backend/transaction/statistics
   */
  statisticsUsingPost = <T,>(request: TransactionStatisticsRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListTransactionStatisticsVo, void>({
      path: `/backend/transaction/statistics`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 统计交易信息
   *
   * @tags backend-controller
   * @name SumTransactionBalanceUsingPost
   * @summary sumTransactionBalance
   * @request POST:/backend/transaction/sumBalance
   */
  sumTransactionBalanceUsingPost = <T,>(
    request: QueryTransactionByBackendRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/transaction/sumBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询归集的燃料费
   *
   * @tags backend-controller
   * @name SumGasTransactionUsingPost
   * @summary sumGasTransaction
   * @request POST:/backend/transaction/sumGasTransaction
   */
  sumGasTransactionUsingPost = <T,>(
    request: SumGasTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/transaction/sumGasTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Approve user account
   *
   * @tags backend-controller
   * @name ApproveUserUsingPost
   * @summary approveUser
   * @request POST:/backend/user/approve
   */
  approveUserUsingPost = <T,>(request: ApproveUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponseUserVo, void>({
      path: `/backend/user/approve`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 审批白名单地址申请
   *
   * @tags backend-controller
   * @name ApproveWhiteAddressApplyUsingPost
   * @summary approveWhiteAddressApply
   * @request POST:/backend/user/approveWhiteAddressApply
   */
  approveWhiteAddressApplyUsingPost = <T,>(
    request: ApproveWhiteAddressApplyRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/approveWhiteAddressApply`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户列表页面：创建用户账户并开户
   *
   * @tags New
   * @name CreateUserUsingPost
   * @summary 创建用户账户并开户
   * @request POST:/backend/user/create
   */
  createUserUsingPost = <T,>(data: any, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/create`,
      method: 'POST',
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description 下载订单信息模板，记录存在数据库
   *
   * @tags New
   * @name DownloadBuyOrderUsingPost
   * @summary 下载订单信息模板
   * @request POST:/backend/user/downloadOrder
   */
  downloadBuyOrderUsingPost = <T,>(request: QueryOrderListRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/backend/user/downloadOrder`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 下载用户信息模板，记录存在数据库
   *
   * @tags New
   * @name DownloadUsersListUsingPost
   * @summary 下载用户信息模板
   * @request POST:/backend/user/downloadUserInfo
   */
  downloadUsersListUsingPost = <T,>(
    request: QueryUserInfoProductRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/backend/user/downloadUserInfo`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户列表页面：给做完KYC的C端预申请用户开户
   *
   * @tags New
   * @name EditUserUsingPost
   * @summary 给做完KYC的C端预申请用户开户
   * @request POST:/backend/user/edit
   */
  editUserUsingPost = <T,>(request: CreatUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/edit`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第一个tab页面：编辑邀请码状态（设计上此状态此字段不存在通过当前邀请码是否存在体现）
   *
   * @tags New
   * @name EditInviteCodeStatusUsingPost
   * @summary 编辑邀请码状态
   * @request POST:/backend/user/editInviteCodeStatus
   */
  editInviteCodeStatusUsingPost = <T,>(
    request: EditInviteCodeStatusRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/editInviteCodeStatus`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第一个tab页面：保存用户费率
   *
   * @tags New
   * @name EditUserRateUsingPost
   * @summary 保存用户费率
   * @request POST:/backend/user/editRate
   */
  editUserRateUsingPost = <T,>(request: EditRateRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/editRate`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 编辑用户权限
   *
   * @tags backend-controller
   * @name EditRoleUsingPost
   * @summary editRole
   * @request POST:/backend/user/editRole
   */
  editRoleUsingPost = <T,>(request: EditRoleRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/editRole`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 生成custody钱包地址
   *
   * @tags New
   * @name GenerateDepositAddressUsingPost
   * @summary 生成custody钱包地址
   * @request POST:/backend/user/generateDepositAddress
   */
  generateDepositAddressUsingPost = <T,>(
    request: GenerateUserDepositAddressRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/generateDepositAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description generateMonthReport
   *
   * @tags backend-controller
   * @name GenerateMonthReportUsingPost
   * @summary generateMonthReport
   * @request POST:/backend/user/generateMonthReport
   */
  generateMonthReportUsingPost = <T,>(request: GenerateMonthReport, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/backend/user/generateMonthReport`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第一个tab页面：查询用户详情
   *
   * @tags New
   * @name GetUserInfoUsingPost
   * @summary 查询用户详情
   * @request POST:/backend/user/getInfo
   */
  getUserInfoUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponseUserInfoResponse, void>({
      path: `/backend/user/getInfo`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第一个tab页面：锁定用户账户
   *
   * @tags New
   * @name LockUsingPost
   * @summary 锁定用户账户
   * @request POST:/backend/user/lock
   */
  lockUsingPost = <T,>(request: LockUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/lock`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户账户余额
   *
   * @tags backend-controller
   * @name QueryAllBalanceUsingPost
   * @summary queryAllBalance
   * @request POST:/backend/user/queryAllBalance
   */
  queryAllBalanceUsingPost = <T,>(request: QueryAllBalanceRequset, params: RequestParams = {}) =>
    this.request<BasePageResponseUserBalanceVo, void>({
      path: `/backend/user/queryAllBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 下载用户信息模板，记录存在数据库
   *
   * @tags New
   * @name QueryAllDownloadRecordUsingPost
   * @summary 下载记录模板
   * @request POST:/backend/user/queryAllDownloadRecord
   */
  queryAllDownloadRecordUsingPost = <T,>(request: QueryRecordRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/backend/user/queryAllDownloadRecord`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户列表页面：查询用户列表
   *
   * @tags New
   * @name QueryUserListUsingPost
   * @summary 查询用户列表
   * @request POST:/backend/user/queryList
   */
  queryUserListUsingPost = <T,>(request: QueryUserListRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseQueryUserListResponse, void>({
      path: `/backend/user/queryList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户列表页面：查询用户列表
   *
   * @tags New
   * @name QueryUserListExportUsingPost
   * @summary 查询用户列表导出
   * @request POST:/backend/user/queryList/export
   */
  queryUserListExportUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/backend/user/queryList/export`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户行为枚举表
   *
   * @tags backend-controller
   * @name QueryLogActionMapListUsingPost
   * @summary queryLogActionMapList
   * @request POST:/backend/user/queryLogActionMapList
   */
  queryLogActionMapListUsingPost = <T,>(request: BaseRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListLogActionMapVo, void>({
      path: `/backend/user/queryLogActionMapList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户绑定的FundStoList
   *
   * @tags backend-controller
   * @name QueryUserFundStoListUsingPost
   * @summary queryUserFundStoList
   * @request POST:/backend/user/queryUserFundStoList
   */
  queryUserFundStoListUsingPost = <T,>(
    request: TokenBoundUserRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponseListTokenVo, void>({
      path: `/backend/user/queryUserFundStoList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户行为
   *
   * @tags backend-controller
   * @name QueryUserLogActionUsingPost
   * @summary queryUserLogAction
   * @request POST:/backend/user/queryUserLogAction
   */
  queryUserLogActionUsingPost = <T,>(
    request: QueryUserLogActionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponseLogActionMapVo, void>({
      path: `/backend/user/queryUserLogAction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询白名单申请列表
   *
   * @tags backend-controller
   * @name QueryWhiteAddressApplyListUsingPost
   * @summary queryWhiteAddressApplyList
   * @request POST:/backend/user/queryWhiteAddressApplyList
   */
  queryWhiteAddressApplyListUsingPost = <T,>(
    request: BackendQueryWhiteAddressApplyRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponseUserAddressApplyVo, void>({
      path: `/backend/user/queryWhiteAddressApplyList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第一个tab页面：重置用户ga
   *
   * @tags New
   * @name ResetGaUsingPost
   * @summary 重置用户ga
   * @request POST:/backend/user/resetGa
   */
  resetGaUsingPost = <T,>(request: ResetUserGaRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/resetGa`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description transferGasFee to user
   *
   * @tags backend-controller
   * @name UserTransferGasFeeUsingPost
   * @summary transferGasFee to user
   * @request POST:/backend/user/transferGasFee
   */
  userTransferGasFeeUsingPost = <T,>(
    request: UserTransferGasFeeRequset,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/transferGasFee`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description admin用户详情第一个tab页面：解锁用户账户
   *
   * @tags New
   * @name UnLockUsingPost
   * @summary 解锁用户账户
   * @request POST:/backend/user/unLock
   */
  unLockUsingPost = <T,>(request: LockUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/unLock`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 审批KYA
   *
   * @tags backend-controller
   * @name UpdateKyaUsingPost
   * @summary updateKya
   * @request POST:/backend/user/updateKya
   */
  updateKyaUsingPost = <T,>(request: ApproveKyaRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/user/updateKya`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description (NEW)admin用户详情第二个tab页面(Cyrpto):用户资产列表
   *
   * @tags New
   * @name QueryAssetBalanceUsingPost
   * @summary 用户资产列表
   * @request POST:/backend/v2/asset/queryBalance
   */
  queryAssetBalanceUsingPost = <T,>(request: QueryBalanceRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListAssetBalanceResponse, void>({
      path: `/backend/v2/asset/queryBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name CreatBusinessWalletUsingPost
   * @summary creatBusinessWallet
   * @request POST:/backend/wallet/business/creat
   */
  creatBusinessWalletUsingPost = <T,>(request: CreatWalletRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/business/creat`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name EditWalletUsingPost
   * @summary editWallet
   * @request POST:/backend/wallet/business/edit
   */
  editWalletUsingPost = <T,>(request: CreatWalletRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/business/edit`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name GetChainGasFeeUsingPost
   * @summary getChainGasFee
   * @request POST:/backend/wallet/token/getChainGasFee
   */
  getChainGasFeeUsingPost = <T,>(request: GetChainGasFeeRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/token/getChainGasFee`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name GetReScanBlockStatusUsingPost
   * @summary getReScanBlockStatus
   * @request POST:/backend/wallet/token/getReScanBlockStatus
   */
  getReScanBlockStatusUsingPost = <T,>(
    request: CancelReScanBlockRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/token/getReScanBlockStatus`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name GetTokenUsingPost
   * @summary getToken
   * @request POST:/backend/wallet/token/getToken
   */
  getTokenUsingPost = <T,>(request: QueryChainTokenListRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/token/getToken`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name QueryBlockchainListUsingPost
   * @summary queryBlockchainList
   * @request POST:/backend/wallet/token/queryBlockchainList
   */
  queryBlockchainListUsingPost = <T,>(
    request: QueryChainTokenListRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/token/queryBlockchainList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name QueryTokenListUsingPost
   * @summary queryTokenList
   * @request POST:/backend/wallet/token/queryTokenList
   */
  queryTokenListUsingPost = <T,>(request: QueryChainTokenListRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/token/queryTokenList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name VerifyAddressUsingPost
   * @summary verifyAddress
   * @request POST:/backend/wallet/token/verifyAddress
   */
  verifyAddressUsingPost = <T,>(request: VerifyAddressRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/token/verifyAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name BusinessApproveUsingPost
   * @summary 钱包转账审批
   * @request POST:/backend/wallet/transaction/businessApprove
   */
  businessApproveUsingPost = <T,>(request: BusinessApproveRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/transaction/businessApprove`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name CloseUsingPost
   * @summary close
   * @request POST:/backend/wallet/transaction/close
   */
  closeUsingPost = <T,>(request: CloseTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/transaction/close`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name GetTransactionUsingPost1
   * @summary getTransaction
   * @request POST:/backend/wallet/transaction/getTransaction
   */
  getTransactionUsingPost1 = <T,>(request: GetTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/transaction/getTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name QueryWalletTransactionUsingPost1
   * @summary queryWalletTransaction
   * @request POST:/backend/wallet/transaction/queryWalletTransaction
   */
  queryWalletTransactionUsingPost1 = <T,>(
    request: QueryWalletTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponse, void>({
      path: `/backend/wallet/transaction/queryWalletTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name QueryWalletTransactionExportUsingPost
   * @summary queryWalletTransactionExport
   * @request POST:/backend/wallet/transaction/queryWalletTransaction/export
   */
  queryWalletTransactionExportUsingPost = <T,>(
    request: QueryWalletTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/backend/wallet/transaction/queryWalletTransaction/export`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name ReSendUsingPost
   * @summary reSend
   * @request POST:/backend/wallet/transaction/reSend
   */
  reSendUsingPost = <T,>(request: ReSendTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/transaction/reSend`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name ReSignUsingPost
   * @summary reSign
   * @request POST:/backend/wallet/transaction/reSign
   */
  reSignUsingPost = <T,>(request: SpeedUpTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/transaction/reSign`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name WalletGenerateAddressUsingPost
   * @summary walletGenerateAddress
   * @request POST:/backend/wallet/wallet/generateAddress
   */
  walletGenerateAddressUsingPost = <T,>(
    request: WalletGenerateAddressRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/wallet/generateAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name GenerateGasAddressUsingPost
   * @summary generateGasAddress
   * @request POST:/backend/wallet/wallet/generateGasAddress
   */
  generateGasAddressUsingPost = <T,>(
    request: GenerateGasAddressRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/wallet/generateGasAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name GetInfoUsingPost
   * @summary getInfo
   * @request POST:/backend/wallet/wallet/getInfo
   */
  getInfoUsingPost = <T,>(request: GetWalletInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/wallet/getInfo`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name QueryAddressUsingPost1
   * @summary queryAddress
   * @request POST:/backend/wallet/wallet/queryAddress
   */
  queryAddressUsingPost1 = <T,>(
    request: QueryAddressUsingPost1Payload,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/wallet/queryAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name QueryBusinessBalanceUsingPost
   * @summary queryBusinessBalance
   * @request POST:/backend/wallet/wallet/queryBusinessBalance
   */
  queryBusinessBalanceUsingPost = <T,>(
    request: QueryChainBalanceRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/wallet/queryBusinessBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name QueryChainBalanceUsingPost1
   * @summary queryChainBalance
   * @request POST:/backend/wallet/wallet/queryChainBalance
   */
  queryChainBalanceUsingPost1 = <T,>(
    request: QueryChainBalanceRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/wallet/queryChainBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name QueryWalletUsingPost
   * @summary queryWallet
   * @request POST:/backend/wallet/wallet/queryWallet
   */
  queryWalletUsingPost = <T,>(request: QueryWalletRequest, params: RequestParams = {}) =>
    this.request<BasePageResponse, void>({
      path: `/backend/wallet/wallet/queryWallet`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags New
   * @name WalletTransferUsingPost
   * @summary 钱包转账：gas费，提现
   * @request POST:/backend/wallet/wallet/transfer
   */
  walletTransferUsingPost = <T,>(request: TransferForWalletRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/backend/wallet/wallet/transfer`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
