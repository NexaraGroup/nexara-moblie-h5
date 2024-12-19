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

export type DataType = number | string | boolean | object | any[];

export type DataTypeWrap<T> = {
  code: string;
  data?: T;
  msg?: string;
};

/** AddBankRequest */
export interface AddBankRequest {
  /** 银行卡账号 */
  bankAccount?: string;
  /** 银行名称 */
  bankName?: string;
  /** 银行其它扩展信息，用k-v的JSON形式 */
  extInfo?: string;
  /**
   * userId
   * @format int64
   */
  queryUserId?: number;
  /**
   * userId
   * @format int64
   */
  userId?: number;
  /** userName */
  userName?: string;
}

/** BasePageResponse */
export interface BasePageResponse {
  content?: BasePageObject;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseRequest */
export interface BaseRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * third api use
   * @example 1
   */
  thirdType?: string;
  /**
   * third api use
   * @example 1
   */
  thirdUserId?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** BaseUserRequest */
export interface BaseUserRequest {
  /**
   * userId
   * @format int64
   */
  queryUserId?: number;
  /**
   * userId
   * @format int64
   */
  userId?: number;
  /** userName */
  userName?: string;
}

/** DepositRequest */
export interface DepositRequest {
  /** 币种：USD，HKD */
  currency?: string;
  /** 账户（出） */
  fromAccount?: string;
  /**
   * userId
   * @format int64
   */
  queryUserId?: number;
  /** 请求金额 */
  requestAmount?: string;
  requestId?: string;
  /** 账户（入） */
  toAccount?: string;
  /**
   * userId
   * @format int64
   */
  userId?: number;
  /** userName */
  userName?: string;
}

/** FiatTransactionInfoResponse */
export interface FiatTransactionInfoResponse {
  /** 实际金额 */
  amount?: string;
  /** 审批时间 */
  approvalTime?: string;
  /** 审批人 */
  approver?: string;
  /** 创建时间 */
  createDate?: string;
  /** 币种：USD，HKD */
  currency?: string;
  /** 手续费 */
  fee?: string;
  /** 账户（出） */
  fromAccount?: string;
  /** 银行账户（出） */
  fromBank?: QueryBankResponse;
  /**
   * 自增交易号
   * @format int64
   */
  id?: number;
  /** 支付时间 */
  payTime?: string;
  /** 费率 */
  rate?: string;
  /** 备注 */
  remark?: string;
  /** 请求金额 */
  requestAmount?: string;
  requestId?: string;
  /** 银行流水号 */
  serialNumber?: string;
  /** 账户（入） */
  toAccount?: string;
  /** 银行账户（入） */
  toBank?: QueryBankResponse;
  /**
   * 订单状态：2-待审核，3-成功，4-失败，8-取消
   * @format int32
   */
  txStatus?: number;
  /**
   * 交易类型：1-充值，2-提现
   * @format int32
   */
  txType?: number;
  /** 修改时间 */
  updateDate?: string;
  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
  /** 用户名称 */
  userName?: string;
}

/** GenerateUserDepositAddressRequest */
export interface GenerateUserDepositAddressRequest {
  /** @format int64 */
  blockchainId?: number;
  /** @format int64 */
  userId?: number;
}

/** GetInvestmentParameterRequest */
export interface GetInvestmentParameterRequest {
  /** @format int64 */
  investmentId?: number;
}

/** GetTokenPolicyRequest */
export interface GetTokenPolicyRequest {
  /** @format int64 */
  tokenId?: number;
  typeList?: number[];
  /** @format int64 */
  userId?: number;
}

/** GetTransactionRequest */
export interface GetTransactionRequest {
  /**
   * 交易ID
   * @format int64
   */
  txId?: number;
}

/** GetUserInfoRequest */
export interface GetUserInfoRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * third api use
   * @example 1
   */
  thirdType?: string;
  /**
   * third api use
   * @example 1
   */
  thirdUserId?: string;
  /**
   * query userId
   * @format int64
   * @example 2
   */
  userId?: number;
}

/** GoogleAuthDto */
export interface GoogleAuthDto {
  encryptGaKey?: string;
  gaUrl?: string;
}

/** ListWalletInfoRequest */
export interface ListWalletInfoRequest {
  /** @format int64 */
  userId?: number;
  /** @format int32 */
  walletStatus?: number;
}

/** ModifyLanguageRequest */
export interface ModifyLanguageRequest {
  /**
   * language
   * @format int32
   */
  language?: number;
  /** @format int64 */
  userId?: number;
}

/** QueryAccountResponse */
export interface QueryAccountResponse {
  /** 账户余额 */
  balance?: string;
  /** 币种：USD，HKD */
  currency?: string;
  /**
   * 账户ID
   * @format int64
   */
  id?: number;
  /** 锁定金额 */
  lockedAmount?: string;
  /**
   * 状态:0-无效，1-有效
   * @format int32
   */
  status?: number;
}

/** QueryBalanceRequest */
export interface QueryBalanceRequest {
  /** @format int64 */
  tokenId?: number;
  tokenNo?: string;
  /** @format int64 */
  userId?: number;
}

/** QueryBankResponse */
export interface QueryBankResponse {
  /** 银行卡账号 */
  bankAccount?: string;
  /** 银行名称 */
  bankName?: string;
  /** 银行其它扩展信息，用k-v的JSON形式 */
  extInfo?: string;
  /**
   * 状态：0-无效，1-有效
   * @format int32
   */
  status?: number;
  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
}

/** QueryByMailRequest */
export interface QueryByMailRequest {
  /**
   * 产品ID
   * @format int64
   * @example 1
   */
  investmentId?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * pageNum
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * pageSize
   * @format int32
   * @example 1
   */
  pageSize?: number;
  /**
   * third api use
   * @example 1
   */
  thirdType?: string;
  /**
   * third api use
   * @example 1
   */
  thirdUserId?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryCurrencyResponse */
export interface QueryCurrencyResponse {
  /** 币种：USD，HKD */
  currency?: string;
  /** 币种全称 */
  currencyName?: string;
  /**
   * 状态：1有效，0无效
   * @format int32
   */
  status?: number;
}

/** QueryFiatTransactionRequest */
export interface QueryFiatTransactionRequest {
  /** 币种：USD，HKD */
  currency?: string;
  /** 结束时间 */
  endTime?: string;
  /**
   * 分页页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * userId
   * @format int64
   */
  queryUserId?: number;
  requestId?: string;
  /** 开始时间 */
  startTime?: string;
  /** 订单状态：2-待审核，3-成功，8-取消 */
  statusList?: number[];
  /** 交易类型：1-充值，2-提现 */
  txTypeList?: number[];
  /**
   * userId
   * @format int64
   */
  userId?: number;
  userIdList?: number[];
  /** userName */
  userName?: string;
}

/** QueryInvestmentBalanceRequest */
export interface QueryInvestmentBalanceRequest {
  /** @format int64 */
  investmentId?: number;
  /** @format int64 */
  userId?: number;
}

/** QueryParameterRequest */
export interface QueryParameterRequest {
  /** 系统参数范围，目前可传USD，HKD */
  parameterType?: string;
}

/** QueryParameterResponse */
export interface QueryParameterResponse {
  /**
   * 自增主键
   * @format int64
   */
  id?: number;
  /** 系统参数key */
  parameterKey?: string;
  /** 系统参数类型,目前为币种：USD，HKD */
  parameterType?: string;
  /** 系统参数值 */
  parameterValue?: string;
}

/** QueryTransactionRequest */
export interface QueryTransactionRequest {
  /** @format date-time */
  billEndTime?: string;
  /** @format date-time */
  billStartTime?: string;
  endTime?: string;
  /** @format int64 */
  investmentId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  queryUserId?: number;
  requestId?: string;
  startTime?: string;
  statusList?: number[];
  tokenList?: number[];
  txHash?: string;
  txIdList?: number[];
  txTypeList?: number[];
  /** @format int64 */
  userId?: number;
  /** @format int64 */
  walletId?: number;
}

/** QueryUserListInvestmentBalanceRequest */
export interface QueryUserListInvestmentBalanceRequest {
  userIds?: number[];
}

/** QueryUserRateRequest */
export interface QueryUserRateRequest {
  channel?: string;
  /** @format int64 */
  productId?: number;
  /** @format int64 */
  userId?: number;
}

/** QueryYieldRequest */
export interface QueryYieldRequest {
  endTime?: string;
  /** @format int64 */
  investmentId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  queryUserId?: number;
  startTime?: string;
  /** @format int64 */
  userId?: number;
}

/** RedeemByGaRequest */
export interface RedeemByGaRequest {
  amount?: number;
  gaCode?: string;
  /** @format int64 */
  investmentId?: number;
  remark?: string;
  requestId?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** RegisterRequest */
export interface RegisterRequest {
  /**
   * 企业法人
   * @example "Asj"
   */
  businessNature?: string;
  /**
   * 省市
   * @example "Asj"
   */
  country?: string;
  /**
   * 用户邮箱
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * 用户验证码
   * @example "Asj"
   */
  faCode?: string;
  /**
   * 行业领域
   * @example "Asj"
   */
  intentionOfService?: string;
  /**
   * 用户邀请码
   * @example "Asj"
   */
  invitationCode?: string;
  /**
   * 语言偏好
   * @format int32
   * @example "Asj"
   */
  language?: number;
  /**
   * 手机号
   * @example 12233
   */
  mobile?: string;
  /**
   * 用户名称
   * @example "Asj"
   */
  name?: string;
  /**
   * userType
   * @format int32
   * @example "userType:1=个人，2=机构"
   */
  userType?: number;
}

/** SendFaCodeByInvitationRequest */
export interface SendFaCodeByInvitationRequest {
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * invitationCode
   * @example "Asj"
   */
  invitationCode?: string;
}

/** SendFaCodeByLoginRequest */
export interface SendFaCodeByLoginRequest {
  /**
   * gaCode
   * @example "Asj"
   */
  gaCode?: string;
  /**
   * userId
   * @format int64
   * @example 123
   */
  userId?: number;
}

/** SetPasswordRequest */
export interface SetPasswordRequest {
  password?: string;
  /** @format int64 */
  userId?: number;
}

/** SubscribeRequest */
export interface SubscribeRequest {
  amount?: number;
  /** @format int64 */
  investmentId?: number;
  remark?: string;
  requestId?: string;
  /** @format int64 */
  userId?: number;
}

/** UserRejestRequest */
export interface UserRejestRequest {
  /**
   * investmentId
   * @format int64
   * @example 1
   */
  investmentId?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * third api use
   * @example 1
   */
  thirdType?: string;
  /**
   * third api use
   * @example 1
   */
  thirdUserId?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** VerifyAddressRequest */
export interface VerifyAddressRequest {
  address?: string;
  /** @format int64 */
  blockChainId?: number;
  /** @format int64 */
  userId?: number;
}

/** WithdrawFiatRequest */
export interface WithdrawFiatRequest {
  /** 币种：USD，HKD */
  currency?: string;
  /** 账户（出） */
  fromAccount?: string;
  /**
   * gaCode
   * @example 256879
   */
  gaCode?: string;
  /**
   * userId
   * @format int64
   */
  queryUserId?: number;
  /** 请求金额 */
  requestAmount?: string;
  requestId?: string;
  /** 账户（入） */
  toAccount?: string;
  /**
   * userId
   * @format int64
   */
  userId?: number;
  /** userName */
  userName?: string;
}

/** WithdrawRequest */
export interface WithdrawRequest {
  /**
   * amount
   * @example 12.2553
   */
  amount?: number;
  /**
   * requestId
   * @format int64
   * @example 256879
   */
  blockchainId?: number;
  /**
   * gaCode
   * @example 256879
   */
  gaCode?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /** remark */
  remark?: string;
  /**
   * requestId
   * @example 256879
   */
  requestId?: string;
  /**
   * third api use
   * @example 1
   */
  thirdType?: string;
  /**
   * third api use
   * @example 1
   */
  thirdUserId?: string;
  /**
   * toAddress
   * @example "0xca5F62F55813650339360c58A99DeE930554bBd2"
   */
  toAddress?: string;
  /**
   * tokenId
   * @format int64
   * @example 1
   */
  tokenId?: number;
  /**
   * NFT id
   * @example 0
   */
  tokenNo?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** BasePageResponse«FiatTransactionInfoResponse» */
export interface BasePageResponseFiatTransactionInfoResponse {
  content?: BasePageFiatTransactionInfoResponse;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BasePage«FiatTransactionInfoResponse» */
export interface BasePageFiatTransactionInfoResponse {
  /** 数据列表 */
  list?: FiatTransactionInfoResponse[];
  /**
   * 页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总页数
   * @format int32
   */
  pages?: number;
  /**
   * 当前页的数量
   * @format int32
   */
  size?: number;
  /**
   * 总数
   * @format int32
   */
  total?: number;
}

/** BasePage«object» */
export interface BasePageObject {
  /** 数据列表 */
  list?: object[];
  /**
   * 页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总页数
   * @format int32
   */
  pages?: number;
  /**
   * 当前页的数量
   * @format int32
   */
  size?: number;
  /**
   * 总数
   * @format int32
   */
  total?: number;
}

/** 公共请求回复 */
export interface _ {
  content?: object;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** 公共请求回复«FiatTransactionInfoResponse» */
export interface FiatTransactionInfoResponse {
  content?: FiatTransactionInfoResponse;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** 公共请求回复«GoogleAuthDto» */
export interface GoogleAuthDto {
  content?: GoogleAuthDto;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** 公共请求回复«List«QueryAccountResponse»» */
export interface ListQueryAccountResponse {
  content?: QueryAccountResponse[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** 公共请求回复«List«QueryCurrencyResponse»» */
export interface ListQueryCurrencyResponse {
  content?: QueryCurrencyResponse[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** 公共请求回复«List«QueryParameterResponse»» */
export interface ListQueryParameterResponse {
  content?: QueryParameterResponse[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

export interface GetTermConditionsUsingPostParams {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * termConditionsKey
   * @example "aaa"
   */
  termConditionsKey?: string;
  /**
   * third api use
   * @example "1"
   */
  thirdType?: string;
  /**
   * third api use
   * @example "1"
   */
  thirdUserId?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}
