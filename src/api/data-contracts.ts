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
  /** 币种 */
  currency?: string;
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

/** AddressVo */
export interface AddressVo {
  /** address */
  address?: string;
  /**
   * blockchainId
   * @format int64
   */
  blockchainId?: number;
  /** blockchainName */
  blockchainName?: string;
  /**
   * chainId
   * @format int64
   */
  chainId?: number;
  /**
   * 1=bitcoin链,2=eth链,3=bsc链
   * @format int32
   */
  chainType?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 链名称 */
  name?: string;
  /**
   * 1=MAIN_NET，2=TEST_NET
   * @format int32
   */
  networkType?: number;
  /**
   * 0=废弃,1=有效，2=冻结
   * @format int32
   */
  status?: number;
  /** 交易所名称 */
  tradingName?: string;
  /**
   * 1=deposit，2=hot，3=cold，4=warm,5=gas
   * @format int32
   */
  type?: number;
  /**
   * walletId
   * @format int64
   */
  walletId?: number;
}

/** BalanceVo */
export interface BalanceVo {
  /** balance */
  balance?: string;
  /** icon */
  icon?: string;
  /** lockedAmount */
  lockedAmount?: string;
  /** price */
  price?: string;
  /** token balance - freeze_amount */
  realBalance?: string;
  /** remark */
  remark?: string;
  /**
   * tokenId
   * @format int64
   */
  tokenId?: number;
  /** tokenName */
  tokenName?: string;
  /** tradingName */
  tradingName?: string;
  /**
   * userId
   * @format int64
   */
  userId?: number;
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

/** BaseResponse */
export interface BaseResponse {
  content?: object;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
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

/** BlockchainVo */
export interface BlockchainVo {
  /**
   * chainId
   * @format int64
   */
  chainId?: number;
  /**
   * chainType
   * @format int32
   */
  chainType?: number;
  /**
   * confirmations
   * @format int32
   */
  confirmations?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** name */
  name?: string;
  /**
   * networkType
   * @format int32
   */
  networkType?: number;
  /** tradingName */
  tradingName?: string;
  /** txTime */
  txTime?: string;
}

/** ChildBalanceVo */
export interface ChildBalanceVo {
  /**
   * accountStatus
   * @format int32
   */
  accountStatus?: number;
  /** 邮箱 */
  email?: string;
  /**
   * 签约状态
   * @format int32
   */
  fmsStatus?: number;
  /** USDC=balance*price */
  fmsUsdc?: string;
  /** invitationTime */
  invitationTime?: string;
  /** kycTime */
  kycTime?: string;
  /** 手机 */
  mobile?: string;
  /** name */
  name?: string;
  /** 签约时间 */
  signedTime?: string;
  /**
   * userId
   * @format int64
   */
  userId?: number;
}

/** CommissionVo */
export interface CommissionVo {
  /** amount */
  amount?: string;
  /** holdValue */
  holdValue?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * investmentId
   * @format int64
   */
  investmentId?: number;
  /** logDate结算时间 */
  logDate?: string;
  /**
   * maturityTime到期时间
   * @format int64
   */
  maturityTime?: number;
  /** token单价 */
  price?: number;
  /** rate */
  rate?: string;
  /** sourceAmount */
  sourceAmount?: string;
  /**
   * status：1=未兑付，2=已兑付，3=转账中，4=已转账
   * @format int32
   */
  status?: number;
  /**
   * toUserId
   * @format int64
   */
  toUserId?: number;
  /**
   * tokenId
   * @format int64
   */
  tokenId?: number;
  /** tokenName */
  tokenName?: string;
  /**
   * txId
   * @format int64
   */
  txId?: number;
  /**
   * userId
   * @format int64
   */
  userId?: number;
}

/** ContractVo */
export interface ContractVo {
  /** 合约地址 */
  address?: string;
  /** 合约代码 */
  code?: string;
  /**
   * 合约ID
   * @format int64
   */
  contractId?: number;
  /** name合约名称 */
  name?: string;
  /**
   * 所有者ID
   * @format int64
   */
  owner?: number;
  /** 备注 */
  remark?: string;
  /** 合约BIP规范集 */
  standard?: string[];
  /** 版本 */
  version?: string;
}

/** CustodyBalanceVo */
export interface CustodyBalanceVo {
  /** balance */
  balance?: string;
  /**
   * blockchainId
   * @format int64
   */
  blockchainId?: number;
  /** blockchainName */
  blockchainName?: string;
  /** icon url */
  icon?: string;
  /** lockedAmount */
  lockedAmount?: string;
  /** price */
  price?: number;
  /** token balance - freeze_amount */
  realBalance?: string;
  /** remark */
  remark?: string;
  /**
   * tokenId
   * @format int64
   */
  tokenId?: number;
  /** tokenname */
  tokenName?: string;
  /** token交易名称 */
  tradingName?: string;
  /**
   * userId
   * @format int64
   */
  userId?: number;
}

/** CustodyTransactionVo */
export interface CustodyTransactionVo {
  /** 交易金额 */
  amount?: string;
  /**
   * blockChainId
   * @format int64
   * @example 1
   */
  blockChainId?: number;
  /**
   * blockChainName
   * @example 1
   */
  blockChainName?: string;
  /** 异常信息 */
  errorMsg?: string;
  /** 交易费用 */
  fee?: string;
  /** 转出账户名称 */
  fromAddress?: string;
  fromName?: string;
  /** @format int64 */
  fromUserId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * requestId
   * @format int64
   */
  requestId?: number;
  /** riskScore */
  riskScore?: string;
  /** riskTime */
  riskTime?: string;
  /**
   * 1=Processing,2=Pending,3=Success,4=Failed,5=Flagged,6=WaitSend,7=Exception,8=Cancel
   * @format int32
   */
  status?: number;
  /** 转入账户/用户企业名称 */
  toAddress?: string;
  toName?: string;
  /** @format int64 */
  toUserId?: number;
  /**
   * 链币种ID
   * @format int64
   */
  tokenId?: number;
  /** tokenName */
  tokenName?: string;
  /** 交易完成时间ms */
  txBillTime?: string;
  /** 交易HASH */
  txHash?: string;
  /** 交易创建时间戳ms */
  txTime?: string;
  /**
   * 1=deposit,2=withdraw,3=TransferOut,4=SubscribeRequest,5=RedeemRequest,6=Approve,7=gasFee,8=gasTransfer,9=Subscribe,10=Redeem,11=TransferIn
   * @format int32
   */
  txType?: number;
  /** 交易更新时间戳ms */
  updateTime?: string;
  /**
   * 归属用户ID
   * @format int64
   */
  userId?: number;
  /**
   * walletTxId
   * @format int64
   */
  walletTxId?: number;
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
  /**
   * blockchainId
   * @format int64
   */
  blockchainId?: number;
  /** @format int64 */
  userId?: number;
}

/** GetInvestmentParameterRequest */
export interface GetInvestmentParameterRequest {
  /**
   * investmentId
   * @format int64
   */
  investmentId?: number;
}

/** GetTokenPolicyRequest */
export interface GetTokenPolicyRequest {
  /**
   * tokenId
   * @format int64
   */
  tokenId?: number;
  /** typeList */
  typeList?: number[];
  /** @format int64 */
  userId?: number;
}

/** GetTransactionRequest */
export interface GetTransactionRequest {
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
   * 交易ID
   * @format int64
   */
  txId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
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
  /** 加密GAkey */
  encryptGaKey?: string;
  /** Google Auth url */
  gaUrl?: string;
}

/** HasGaVo */
export interface HasGaVo {
  /** hasGa */
  hasGa?: boolean;
}

/** InvestmentVo */
export interface InvestmentVo {
  /** extInfo */
  extInfo?: Record<string, string>;
  /**
   * fundId
   * @format int64
   */
  fundId?: number;
  /** name */
  name?: string;
  /** remark */
  remark?: string;
  /**
   * 0=禁用,1=启用
   * @format int32
   */
  status?: number;
}

/** ListWalletInfoRequest */
export interface ListWalletInfoRequest {
  /** @format int64 */
  userId?: number;
  /**
   * walletStatus:1=有效,2=冻结
   * @format int32
   */
  walletStatus?: number;
}

/** LoginByFaCodeRequest */
export interface LoginByFaCodeRequest {
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * faCode
   * @example "Asj"
   */
  faCode?: string;
}

/** LoginByFaGaRequest */
export interface LoginByFaGaRequest {
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * faCode
   * @example "Asj"
   */
  faCode?: string;
  /**
   * faCode
   * @example "Asj"
   */
  gaCode?: string;
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
  /**
   * tokenId
   * @format int64
   */
  tokenId?: number;
  /** tokenNo */
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

/** QueryChildBalanceRequest */
export interface QueryChildBalanceRequest {
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

/** QueryChildBalanceResponse */
export interface QueryChildBalanceResponse {
  /** 数据列表 */
  list?: ChildBalanceVo[];
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
  /**
   * investmentId
   * @format int64
   */
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
  /**
   * billEndTime
   * @format date-time
   */
  billEndTime?: string;
  /**
   * billStartTime
   * @format date-time
   */
  billStartTime?: string;
  /** endTime */
  endTime?: string;
  /**
   * investmentId
   * @format int64
   */
  investmentId?: number;
  /**
   * pageNum
   * @format int32
   */
  pageNum?: number;
  /**
   * pageSize
   * @format int32
   */
  pageSize?: number;
  /**
   * queryUserId
   * @format int64
   */
  queryUserId?: number;
  /** requestId */
  requestId?: string;
  /** startTime */
  startTime?: string;
  /** statusList:null=all,1=Processing,2=Pending,3=Success,4=Failed,5=Flagged,6=WaitSend,7=Exception,8=Cancel */
  statusList?: number[];
  /** tokenList */
  tokenList?: number[];
  /** txHash */
  txHash?: string;
  /** txIdList */
  txIdList?: number[];
  /** txTypeList:null = all,1=Deposit,2=WithDraw,3=TransferOut,4=SubscribeRequest,5=RedeemRequest,6=Approve,7=GasDeposit,8=GasTransfer,9=Subscribe,10=Redeem,11=TransferIn,31=SpeedUp */
  txTypeList?: number[];
  /** @format int64 */
  userId?: number;
  /**
   * walletId
   * @format int64
   */
  walletId?: number;
}

/** QueryUserListInvestmentBalanceRequest */
export interface QueryUserListInvestmentBalanceRequest {
  /** userIds */
  userIds?: number[];
}

/** QueryUserRateRequest */
export interface QueryUserRateRequest {
  /** channel */
  channel?: string;
  /**
   * productId
   * @format int64
   */
  productId?: number;
  /** @format int64 */
  userId?: number;
}

/** QueryYieldRequest */
export interface QueryYieldRequest {
  /** endTime */
  endTime?: string;
  /**
   * investmentId
   * @format int64
   */
  investmentId?: number;
  /**
   * pageNum
   * @format int32
   */
  pageNum?: number;
  /**
   * pageSize
   * @format int32
   */
  pageSize?: number;
  /**
   * queryUserId
   * @format int64
   */
  queryUserId?: number;
  /** startTime */
  startTime?: string;
  /** @format int64 */
  userId?: number;
}

/** RecentTransactionResponse */
export interface RecentTransactionResponse {
  /** amount */
  amount?: string;
  /** currency */
  currency?: string;
  /** fee */
  fee?: string;
  /**
   * status:1=Processing,2=Pending,3=Success,4=Failed,5=Flagged,6=WaitSend,7=Exception,8=Cancel
   * @format int32
   */
  status?: number;
  /** txTime */
  txTime?: string;
  /**
   * txType:1=Deposit,2=WithDraw,3=TransferOut,4=SubscribeRequest,5=RedeemRequest,6=Approve,7=GasDeposit,8=GasTransfer,9=Subscribe,10=Redeem,11=TransferIn,31=SpeedUp
   * @format int32
   */
  txType?: number;
}

/** RedeemByGaRequest */
export interface RedeemByGaRequest {
  /** amount */
  amount?: number;
  /** gaCode */
  gaCode?: string;
  /**
   * investmentId
   * @format int64
   */
  investmentId?: number;
  /** remark */
  remark?: string;
  /** requestId */
  requestId?: string;
  /** @format int64 */
  userId?: number;
}

/** RegisterInvestmentRequest */
export interface RegisterInvestmentRequest {
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
   * approve to userId
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

/** ResetPasswordRequest */
export interface ResetPasswordRequest {
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * faCode
   * @example "Asj"
   */
  faCode?: string;
  /**
   * password
   * @example "jkhnsiabdsb"
   */
  password?: string;
}

/** SaveGACodeRequest */
export interface SaveGACodeRequest {
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

/** SendFaByEmailRequest */
export interface SendFaByEmailRequest {
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
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
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * password
   * @example "Asj"
   */
  password?: string;
}

/** SetPasswordRequest */
export interface SetPasswordRequest {
  /** password */
  password?: string;
  /** @format int64 */
  userId?: number;
}

/** SubscribeRequest */
export interface SubscribeRequest {
  /** amount */
  amount?: number;
  /**
   * investmentId
   * @format int64
   */
  investmentId?: number;
  /** remark */
  remark?: string;
  /** requestId */
  requestId?: string;
  /** @format int64 */
  userId?: number;
}

/** TokenPolicyVo */
export interface TokenPolicyVo {
  /** amount */
  amount?: string;
  /**
   * policyType:10=最小提现金额，11=最大提现金额
   * @format int32
   */
  policyType?: number;
  /** remark */
  remark?: string;
  /**
   * tokenId
   * @format int64
   */
  tokenId?: number;
}

/** TokenVo */
export interface TokenVo {
  /**
   * blockChainId
   * @format int64
   */
  blockChainId?: number;
  /** blockChainName */
  blockChainName?: string;
  /**
   * ETH兼容链chainid
   * @format int64
   */
  chainId?: number;
  /**
   * 1=bitcoin，2=ethereum，3=bsc，4=polygon，5=Solana，6=AVAX_C，7=TRON，8=Litecoin，9=Dogecoin，10=Polkadot，11=XRP，12=TON
   * @format int32
   */
  chainType?: number;
  /**
   * 确认数
   * @format int32
   */
  confirmations?: number;
  /** 合约地址 */
  contract?: string;
  /** contractVo */
  contractVo?: ContractVo;
  /**
   * 小数位(必填)
   * @format int32
   */
  decimals?: number;
  /** extInfo */
  extInfo?: Record<string, string>;
  /** icon */
  icon?: string;
  /** ETHCoin */
  name?: string;
  /**
   * 1=MAIN_NET，2=TEST_NET
   * @format int32
   */
  networkType?: number;
  /** remark */
  remark?: string;
  /**
   * 0=禁用,1=启用
   * @format int32
   */
  status?: number;
  /**
   * tokenId
   * @format int64
   */
  tokenId?: number;
  /** ETH */
  tradingName?: string;
  /** 链交易预估时间 */
  txTime?: string;
  /**
   * type 1=原生币，2=合约币
   * @format int32
   */
  type?: number;
}

/** TransactionVo */
export interface TransactionVo {
  /** 交易金额 */
  amount?: string;
  /**
   * blockChainId
   * @format int64
   * @example 1
   */
  blockChainId?: number;
  /**
   * blockChainName
   * @example 1
   */
  blockChainName?: string;
  /** 异常信息 */
  errorMsg?: string;
  /** 交易费用 */
  fee?: string;
  /** 转出账户名称 */
  fromAddress?: string;
  /** fromName */
  fromName?: string;
  /**
   * fromUserId
   * @format int64
   */
  fromUserId?: number;
  /**
   * 交易ID
   * @format int64
   */
  id?: number;
  /**
   * 投资产品ID
   * @format int64
   */
  investmentId?: number;
  /** 投资产品名称 */
  investmentName?: string;
  /**
   * 请求id
   * @format int64
   */
  requestId?: number;
  /** riskScore */
  riskScore?: string;
  /** riskTime */
  riskTime?: string;
  /**
   * 交易状态:1=Pending、2=WaitSend、3=UnConfirm、4=Success、5=Failed,6=Processing,7=Sent,8=Exception,9=WaitSign,10=SpeedUpSuccess,11=ExecutionFail
   * @format int32
   */
  status?: number;
  /** 转入账户/用户企业名称 */
  toAddress?: string;
  /** toName */
  toName?: string;
  /**
   * toUserId
   * @format int64
   */
  toUserId?: number;
  /**
   * 链币种ID
   * @format int64
   */
  tokenId?: number;
  /** tokenName */
  tokenName?: string;
  /** 交易完成时间ms */
  txBillTime?: string;
  /** 交易HASH */
  txHash?: string;
  /** 交易创建时间戳ms */
  txTime?: string;
  /**
   * 交易类型:1=充值,2=提现,3=授权,4=mint,7=gas充值,8=gas转账,31=交易重发加速
   * @format int32
   */
  txType?: number;
  /** 交易更新时间戳ms */
  updateTime?: string;
  /**
   * 归属用户ID
   * @format int64
   */
  userId?: number;
  /**
   * walletTxId
   * @format int64
   */
  walletTxId?: number;
}

/** UserAcquisitionInfoResponse */
export interface UserAcquisitionInfoResponse {
  /** invitationCode */
  invitationCode?: string;
  /** rate */
  rate?: number;
  /** totalYield */
  totalYield?: number;
  /**
   * userId
   * @format int64
   */
  userId?: number;
}

/** UserVo */
export interface UserVo {
  /** email */
  email?: string;
  /** extInfoList */
  extInfoList?: object;
  /**
   * gmtCreated
   * @format date-time
   */
  gmtCreated?: string;
  /** hasGaKey */
  hasGaKey?: boolean;
  /** icon */
  icon?: string;
  /** jwtToken */
  jwtToken?: string;
  /** mobile */
  mobile?: string;
  /** name */
  name?: string;
  /**
   * status
   * @format int32
   */
  status?: number;
  /**
   * userId
   * @format int64
   */
  userId?: number;
  /** userIdentity */
  userIdentity?: string;
  /** userName */
  userName?: string;
  /**
   * userType
   * @format int32
   */
  userType?: number;
}

/** VerifyAddressRequest */
export interface VerifyAddressRequest {
  /** address */
  address?: string;
  /**
   * blockChainId
   * @format int64
   */
  blockChainId?: number;
  /** @format int64 */
  userId?: number;
}

/** VerifyGaFaRequest */
export interface VerifyGaFaRequest {
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * faCode
   * @example "Asj"
   */
  faCode?: string;
  /**
   * faCode
   * @example "Asj"
   */
  gaCode?: string;
}

/** WalletVo */
export interface WalletVo {
  /** addressList */
  addressList?: AddressVo[];
  /**
   * wallet  id
   * @format int64
   */
  id?: number;
  /** wallet name */
  name?: string;
  /**
   * 状态(1=有效,0=废弃)
   * @format int32
   */
  status?: number;
  /**
   * 钱包类型 1=Deposit,2=Hot,3=Cold,4=Warm,5=Gas,6=Net
   * @format int32
   */
  type?: number;
  /**
   * 钱包创建时间
   * @format date-time
   */
  walletCreateTime?: string;
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

/** YieldsVo */
export interface YieldsVo {
  /** currency */
  currency?: string;
  /** earnings */
  earnings?: number;
  /** holdBalance */
  holdBalance?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * investmentId
   * @format int64
   */
  investmentId?: number;
  /** logDate */
  logDate?: string;
  /** maturityTime */
  maturityTime?: string;
  /**
   * status：1=未兑付，2=已兑付，3=转账中，4=已转账
   * @format int32
   */
  status?: number;
  /**
   * txId
   * @format int64
   */
  txId?: number;
  /**
   * userId
   * @format int64
   */
  userId?: number;
}

/** BasePageResponse«CommissionVo» */
export interface BasePageResponseCommissionVo {
  content?: BasePageCommissionVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BasePageResponse«CustodyTransactionVo» */
export interface BasePageResponseCustodyTransactionVo {
  content?: BasePageCustodyTransactionVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
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

/** BasePageResponse«TransactionVo» */
export interface BasePageResponseTransactionVo {
  content?: BasePageTransactionVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BasePageResponse«YieldsVo» */
export interface BasePageResponseYieldsVo {
  content?: BasePageYieldsVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BasePage«CommissionVo» */
export interface BasePageCommissionVo {
  /** 数据列表 */
  list?: CommissionVo[];
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

/** BasePage«CustodyTransactionVo» */
export interface BasePageCustodyTransactionVo {
  /** 数据列表 */
  list?: CustodyTransactionVo[];
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

/** BasePage«TransactionVo» */
export interface BasePageTransactionVo {
  /** 数据列表 */
  list?: TransactionVo[];
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

/** BasePage«YieldsVo» */
export interface BasePageYieldsVo {
  /** 数据列表 */
  list?: YieldsVo[];
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

/** BaseResponse«AddressVo» */
export interface BaseResponseAddressVo {
  content?: AddressVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«CustodyTransactionVo» */
export interface BaseResponseCustodyTransactionVo {
  content?: CustodyTransactionVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«FiatTransactionInfoResponse» */
export interface BaseResponseFiatTransactionInfoResponse {
  content?: FiatTransactionInfoResponse;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«GoogleAuthDto» */
export interface BaseResponseGoogleAuthDto {
  content?: GoogleAuthDto;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«HasGaVo» */
export interface BaseResponseHasGaVo {
  content?: HasGaVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«BalanceVo»» */
export interface BaseResponseListBalanceVo {
  content?: BalanceVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«BlockchainVo»» */
export interface BaseResponseListBlockchainVo {
  content?: BlockchainVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«CustodyBalanceVo»» */
export interface BaseResponseListCustodyBalanceVo {
  content?: CustodyBalanceVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«InvestmentVo»» */
export interface BaseResponseListInvestmentVo {
  content?: InvestmentVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«QueryAccountResponse»» */
export interface BaseResponseListQueryAccountResponse {
  content?: QueryAccountResponse[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«QueryCurrencyResponse»» */
export interface BaseResponseListQueryCurrencyResponse {
  content?: QueryCurrencyResponse[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«QueryParameterResponse»» */
export interface BaseResponseListQueryParameterResponse {
  content?: QueryParameterResponse[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«RecentTransactionResponse»» */
export interface BaseResponseListRecentTransactionResponse {
  content?: RecentTransactionResponse[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«TokenPolicyVo»» */
export interface BaseResponseListTokenPolicyVo {
  content?: TokenPolicyVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«TokenVo»» */
export interface BaseResponseListTokenVo {
  content?: TokenVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«WalletVo»» */
export interface BaseResponseListWalletVo {
  content?: WalletVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«Map«string,string»» */
export interface BaseResponseMapStringString {
  content?: Record<string, string>;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«QueryChildBalanceResponse» */
export interface BaseResponseQueryChildBalanceResponse {
  content?: QueryChildBalanceResponse;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«TransactionVo» */
export interface BaseResponseTransactionVo {
  content?: TransactionVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«UserAcquisitionInfoResponse» */
export interface BaseResponseUserAcquisitionInfoResponse {
  content?: UserAcquisitionInfoResponse;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«UserVo» */
export interface BaseResponseUserVo {
  content?: UserVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«boolean» */
export interface BaseResponseBoolean {
  content?: boolean;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«long» */
export interface BaseResponseLong {
  /** @format int64 */
  content?: number;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«string» */
export interface BaseResponseString {
  content?: string;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** Map«string,string» */
export type MapStringString = Record<string, string>;

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
