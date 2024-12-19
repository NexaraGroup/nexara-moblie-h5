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

/** AddContractRequest */
export interface AddContractRequest {
  /**
   * 合约地址
   * @example "0x2rerw2"
   */
  address?: string;
  /**
   * 合约代码
   * @example "solidity"
   */
  code?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * name合约名称
   * @example "usdt"
   */
  name?: string;
  /**
   * 所有者ID
   * @format int64
   * @example 1
   */
  owner?: number;
  /**
   * 备注
   * @example "usdt合约"
   */
  remark?: string;
  /** 合约BIP规范集 */
  standard?: string[];
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
  /**
   * 版本
   * @example 1
   */
  version?: string;
}

/** AddEmailExample */
export interface AddEmailExample {
  age?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  name?: string;
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

/** AddRecordRequest */
export interface AddRecordRequest {
  /** 审批人 */
  approver?: string;
  /** 币种：USD，HKD */
  currency?: string;
  /**
   * 2Facode
   * @example "023456"
   */
  facode?: string;
  /** 账户（出） */
  fromAccount?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /** 请求金额 */
  requestAmount?: string;
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
  /** 账户（入） */
  toAccount?: string;
  /**
   * 交易类型：1-充值，2-提现
   * @format int32
   */
  txType?: number;
  /**
   * userId
   * @format int64
   */
  userId?: number;
  /** userName */
  userName?: string;
}

/** AddTokenRequest */
export interface AddTokenRequest {
  /**
   * eth链id(必填)type, contract_id, chain_type, network_type, chain_id为联合索引确定一个token
   * @format int32
   * @example 1
   */
  chainId?: number;
  /**
   * (必填)1=bitcoin链,2=eth链,3=BSC链,4=polygon,5=Solana,6=AVAX_C,7=TRON,8=Litecoin,9=Dogecoin,10=Polkadot,11=XRP
   * @format int32
   * @example 1
   */
  chainType?: number;
  /**
   * 合约Id
   * @format int64
   * @example 1
   */
  contractId?: number;
  /**
   * 小数位(必填)
   * @format int32
   * @example 9
   */
  decimals?: number;
  /**
   * 非同质代币扩展数据（需json格式字符串）
   * @example {"Issuer":"XX Tokens Limited","Total Supply(Outstanding)":"10,000","Investor Qualification":"Professional Investor"}
   */
  extInfo?: string;
  /**
   * icon
   * @example "http://xxx"
   */
  icon?: string;
  /**
   * 关联的关联的服务对象名称
   * @example "MATIC"
   */
  linkService?: string;
  /**
   * 关联的tokenId，stake与UnStake才会使用的到
   * @format int32
   * @example 50
   */
  linkTokenId?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 获取价格渠道
   * @format int32
   * @example 9
   */
  marketChannel?: number;
  /**
   * 币种名称(必填)
   * @example "eth"
   */
  name?: string;
  /**
   * 1=MAIN_NET，2=TEST_NET(必填)
   * @format int32
   * @example 1
   */
  networkType?: number;
  /**
   * 单价
   * @example 9
   */
  price?: string;
  /**
   * 备注
   * @example "备注"
   */
  remark?: string;
  /**
   * 排序（默认99）
   * @format int32
   * @example 1
   */
  sequence?: number;
  /**
   * 1=有效，0=无效（默认为1，建议添加时为0确认无误后再修改为有效）
   * @format int32
   * @example 1
   */
  status?: number;
  /**
   * 1=STO，2=Stake，3=UnStake，4=标准资产（默认为4）
   * @format int32
   * @example 4
   */
  stoType?: number;
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
   * 交易名称(必填)
   * @example "eth"
   */
  tradingName?: string;
  /**
   * 1=原生币，2=erc20,3=erc721,4=erc1155(必填)
   * @format int32
   * @example 1
   */
  type?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** AddWhiteAddressRequest */
export interface AddWhiteAddressRequest {
  /**
   * address
   * @example "0xwedwjdfjjskdfsd"
   */
  address?: string;
  /**
   * gaCode
   * @example 256879
   */
  gaCode?: string;
  /**
   * remark
   * @example "wallet1"
   */
  remark?: string;
  /**
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
}

/** ApproveAddressRequest */
export interface ApproveAddressRequest {
  /**
   * faCode
   * @example 256879
   */
  faCode?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /** remark */
  remark?: string;
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
   * approve staking token
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** ApproveFiatRequest */
export interface ApproveFiatRequest {
  /** 金额 */
  amount?: string;
  /** 审批人 */
  approver?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /** 支付时间 */
  payTime?: string;
  /** 备注 */
  remark?: string;
  /** 银行流水号 */
  serialNumber?: string;
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
   * 交易号
   * @format int64
   */
  txId?: number;
  /**
   * 订单状态：2-待审核，3-成功，4-失败，8-取消
   * @format int32
   */
  txStatus?: number;
  /**
   * userId
   * @format int64
   */
  userId?: number;
  /** userName */
  userName?: string;
}

/** ApproveKyaRequest */
export interface ApproveKyaRequest {
  /**
   * 1=Approved,2=Declined
   * @format int32
   * @example 1
   */
  action?: number;
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
   * TransactionId id
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** ApproveTransactionRequest */
export interface ApproveTransactionRequest {
  /**
   * 1=pass,2=reject,3=flag
   * @format int32
   * @example 1
   */
  action?: number;
  /**
   * faCode
   * @example 256879
   */
  faCode?: string;
  /**
   * gaCode
   * @example 256879
   */
  gaCode?: string;
  /**
   * 0=不操作,1=锁定账户，默认0
   * @format int32
   * @example 0
   */
  lockUser?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /** maxFee(option) */
  maxFee?: number;
  /** maxPriorityFee(option) */
  maxPriorityFee?: number;
  /** remark */
  remark?: string;
  /** sign data(option) */
  signData?: string;
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
   * TransactionId id
   * @format int64
   * @example 1
   */
  txId?: number;
  /**
   * user id
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** ApproveUnStakingRequest */
export interface ApproveUnStakingRequest {
  /**
   * 1=pass,2=reject,3=flag
   * @format int32
   * @example 1
   */
  action?: number;
  /**
   * faCode
   * @example 256879
   */
  faCode?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /** maxFee(option) */
  maxFee?: number;
  /** maxPriorityFee(option) */
  maxPriorityFee?: number;
  /** remark */
  remark?: string;
  /** sign data(option) */
  signData?: string;
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
   * TransactionId id list
   * @example [1,2]
   */
  txIds?: number[];
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** ApproveUserRequest */
export interface ApproveUserRequest {
  /** @format int32 */
  approveStatus?: number;
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

/** ApproveWhiteAddressApplyRequest */
export interface ApproveWhiteAddressApplyRequest {
  /**
   * imgUrl
   * @example "http://"
   */
  imgUrl?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * Approve remark
   * @example "http://"
   */
  remark?: string;
  /**
   * Approve status
   * @format int32
   * @example 1
   */
  status?: number;
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
  /**
   * userWhiteAddressApplyId
   * @format int64
   * @example 1
   */
  userWhiteAddressApplyId?: number;
}

/** AssetBalanceResponse */
export interface AssetBalanceResponse {
  balance?: string;
  /** @format int64 */
  blockchainId?: number;
  blockchainName?: string;
  custodyAddress?: string;
  icon?: string;
  lockedAmount?: string;
  price?: number;
  realBalance?: string;
  remark?: string;
  /** @format int64 */
  tokenId?: number;
  tokenName?: string;
  tradingName?: string;
  /** @format int64 */
  userId?: number;
}

/** BackendQueryWhiteAddressApplyRequest */
export interface BackendQueryWhiteAddressApplyRequest {
  /**
   * token address
   * @example "0xwerwerwer"
   */
  address?: string;
  /**
   * user email
   * @example "xx@xyc.com"
   */
  email?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * user name
   * @example "lyy"
   */
  name?: string;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
   */
  pageSize?: number;
  /**
   * Approve status
   * @format int32
   * @example 1
   */
  status?: number;
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
   * token Id
   * @example [1,2]
   */
  tokenIdList?: number[];
  /**
   * type
   * @format int32
   * @example 1
   */
  type?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** BalanceVo */
export interface BalanceVo {
  /**
   * address
   * @example "0x012134131331"
   */
  address?: string;
  /**
   * balance
   * @example 1
   */
  balance?: string;
  /**
   * eth chainid
   * @format int32
   * @example 1
   */
  chainId?: number;
  /**
   * 1=bitcoin链,2=eth链
   * @format int32
   * @example 2
   */
  chainType?: number;
  /**
   * claimAmount
   * @example 1
   */
  claimAmount?: string;
  /**
   * contract address
   * @example 1
   */
  contract?: string;
  /** token extInfo */
  extInfo?: Record<string, string>;
  /**
   * freeze_amount
   * @example 0
   */
  freeze_amount?: string;
  /**
   * grantAmount
   * @example 1
   */
  grantAmount?: string;
  /** icon url */
  icon?: string;
  /**
   * 币种名称
   * @example "ETHCoin等"
   */
  name?: string;
  /**
   * 1=MAIN_NET，2=TEST_NET
   * @format int32
   * @example 1
   */
  networkType?: number;
  /** currency price  */
  price?: string;
  /**
   * token balance - freeze_amount
   * @example 1
   */
  realBalance?: string;
  /**
   * remark
   * @example 1
   */
  remark?: string;
  /**
   * 0=否，1=sto
   * @format int32
   * @example 1
   */
  stoType?: number;
  /**
   * thirdType
   * @example 1
   */
  thirdType?: string;
  /**
   * thirdUserId
   * @example 1
   */
  thirdUserId?: string;
  /**
   * tokenid
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /** nft info */
  tokenNftVo?: TokenNftVo;
  /**
   * nft的编号
   * @example 1
   */
  tokenNo?: string;
  /**
   * tradingName
   * @example "ETH"
   */
  tradingName?: string;
  /**
   * type 1=原生币，2=合约币
   * @format int32
   * @example 1
   */
  type?: number;
  /**
   * unclaimAmount
   * @example 1
   */
  unclaimAmount?: string;
  /**
   * updateTime
   * @format int64
   * @example 1626057167000
   */
  updateTime?: number;
  /** USD单价 */
  usdPrice?: string;
  usdValue?: string;
}

/** BasePageRequest */
export interface BasePageRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
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
   */
  userId?: number;
  /** userName */
  userName?: string;
}

/** BaseUserVo */
export interface BaseUserVo {
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * icon url
   * @example "头像(url)"
   */
  icon?: string;
  /**
   * name
   * @example "amoro yang"
   */
  name?: string;
  /**
   * status
   * @format int32
   * @example 1
   */
  status?: number;
  /**
   * userName
   * @example "默认为邮箱"
   */
  userName?: string;
  /**
   * userType
   * @format int32
   * @example "用户类型 1=Individual，2=Corporate"
   */
  userType?: number;
}

/** BusinessApproveRequest */
export interface BusinessApproveRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * remark
   * @example 256879
   */
  remark?: string;
  /**
   * status
   * @format int32
   * @example 20
   */
  status?: number;
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
   * txId
   * @format int64
   * @example 1
   */
  txId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** CancelReScanBlockRequest */
export interface CancelReScanBlockRequest {
  /**
   * tokenId)
   * @format int64
   * @example 1
   */
  tokenId?: number;
}

/** ChainAccountVo */
export interface ChainAccountVo {
  address?: string;
  balance?: string;
  freezeAmount?: string;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  lastUpdateTime?: number;
  remark?: string;
  /**
   * status 1=Active
   * @format int32
   * @example 1
   */
  status?: number;
  /** @format int32 */
  tokenId?: number;
  tokenNo?: string;
  /**
   * 1=充值，2=提现，3=小额归集地址，4=大额归集地址，5=gasfee地址
   * @format int32
   * @example 3
   */
  type?: number;
}

/** ChainGasFeeVo */
export interface ChainGasFeeVo {
  /**
   * eth链id
   * @format int32
   * @example 21
   */
  chainId?: number;
  /**
   * 链类型(1=bitcoin链,2=eth链)
   * @format int32
   * @example 1
   */
  chainType?: number;
  /**
   * 标准费用
   * @example "0.00001eth"
   */
  gasFee?: string;
  /**
   * 常用费用单位
   * @example "100gwei"
   */
  gasFeeMiddleUnit?: string;
  /**
   * icon
   * @example "http://"
   */
  icon?: string;
  /**
   * 币种名称
   * @example "ETHCoin"
   */
  name?: string;
  /**
   * 链网络类型(1=MAIN_NET，2=TEST_NET)
   * @format int32
   * @example 1
   */
  networkType?: number;
  /**
   * tokenid
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * 交易名称
   * @example "BTC"
   */
  tradingName?: string;
  /**
   * 预估交易时间
   * @format int32
   * @example 30
   */
  txTime?: number;
  /**
   * token类型( 1=原生币，2=合约币)
   * @format int32
   * @example 1
   */
  type?: number;
}

/** ChainTokenResponse */
export interface ChainTokenResponse {
  /**
   * tokenVoList
   * @example "tokenVoList"
   */
  tokenVoList?: TokenVo[];
  /**
   * tradingName
   * @example "ETH"
   */
  tradingName?: string;
}

/** CloseTransactionRequest */
export interface CloseTransactionRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  remark?: string;
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
  /** @format int64 */
  txId?: number;
  /** @format int64 */
  userId?: number;
}

/** CollectRuleVo */
export interface CollectRuleVo {
  /**
   * eth chainid
   * @format int32
   * @example 1
   */
  chainId?: number;
  /**
   * 1=bitcoin链,2=eth链
   * @format int32
   * @example 2
   */
  chainType?: number;
  /**
   * 结束归集时间hh-mm
   * @example "23:59"
   */
  endTime?: string;
  /**
   * gas费单位
   * @example "ETH"
   */
  gasTradingName?: string;
  /** icon url */
  icon?: string;
  /**
   * 归集最大gas费
   * @example 0.01
   */
  maxGasLimit?: string;
  /**
   * 最小归集金额
   * @example 0.1
   */
  minAmount?: string;
  /**
   * 币种名称
   * @example "ETHCoin等"
   */
  name?: string;
  /**
   * 1=MAIN_NET，2=TEST_NET
   * @format int32
   * @example 1
   */
  networkType?: number;
  /**
   * 开始归集时间hh-mm
   * @example "00:00"
   */
  startTime?: string;
  /**
   * thirdType
   * @example 1
   */
  thirdType?: string;
  /**
   * thirdUserId
   * @example 1
   */
  thirdUserId?: string;
  /**
   * tokenid
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * tradingName
   * @example "ETH"
   */
  tradingName?: string;
  /**
   * type 1=原生币，2=合约币
   * @format int32
   * @example 1
   */
  type?: number;
}

/** CollectTokenRequest */
export interface CollectTokenRequest {
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
   * tokenID
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * userIdList
   * @example [1,2,3,4]
   */
  userIds?: number[];
}

/** ContactusRequest */
export interface ContactusRequest {
  /**
   * businessNature
   * @example "businessNature"
   */
  businessNature?: string;
  /**
   * country
   * @example "country"
   */
  country?: string;
  /**
   * email
   * @example "email"
   */
  email?: string;
  /**
   * intentionOfService
   * @example "intentionOfService"
   */
  intentionOfService?: string;
  /**
   * name
   * @example "name"
   */
  name?: string;
  /**
   * phone
   * @example "phone"
   */
  phone?: string;
  /**
   * 1=Individual,2=Corporate
   * @format int32
   * @example 1
   */
  userType?: number;
}

/** ContractVo */
export interface ContractVo {
  /**
   * 合约地址
   * @example "0x2rerw2"
   */
  address?: string;
  /**
   * 合约代码
   * @example "solidity"
   */
  code?: string;
  /**
   * 合约ID
   * @format int64
   * @example 1
   */
  contractId?: number;
  /**
   * name合约名称
   * @example "usdt"
   */
  name?: string;
  /**
   * 所有者ID
   * @format int64
   * @example 1
   */
  owner?: number;
  /**
   * 备注
   * @example "usdt合约"
   */
  remark?: string;
  /** 合约BIP规范集 */
  standard?: string[];
  /**
   * 版本
   * @example 1
   */
  version?: string;
}

/** CreatClaimRequest */
export interface CreatClaimRequest {
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
   * unStakingTxId
   * @format int64
   * @example 12234
   */
  unStakingTxId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** CreatUserRequest */
export interface CreatUserRequest {
  /**
   * channel(option)
   * @example "Investment"
   */
  channel?: string;
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * extInfoList(option)
   * @example "扩展字段包括:Perfer language,省市，企业法人，行业领域"
   */
  extInfoList?: object;
  /**
   * icon url (option)
   * @example "头像(url)"
   */
  icon?: string;
  /**
   * invitationAuthority(option)
   * @format int32
   * @example 12345678
   */
  invitationAuthority?: number;
  /**
   * invitationCode(option)
   * @example 12345678
   */
  invitationCode?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * mobile(option)
   * @example 12345678
   */
  mobile?: string;
  /**
   * name
   * @example "amoro yang"
   */
  name?: string;
  /**
   * productId(option)
   * @format int64
   * @example 1
   */
  productId?: number;
  /**
   * productName(option)
   * @example "FMS"
   */
  productName?: string;
  /**
   * rate(option)
   * @example 1
   */
  rate?: number;
  /**
   * status
   * @format int32
   * @example 1
   */
  status?: number;
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
   * @example "amoro yang"
   */
  userId?: number;
  /**
   * userName
   * @example "和邮箱同值不需要前端传"
   */
  userName?: string;
  /**
   * userType
   * @format int32
   * @example "用户类型 1=Individual，2=Corporate"
   */
  userType?: number;
}

/** CreatWalletRequest */
export interface CreatWalletRequest {
  /**
   * channel
   * @example "custody,investment,O2O"
   */
  channel?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /** name */
  name?: string;
  /**
   * channel
   * @example "custody,investment,O2O"
   */
  remark?: string;
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
   * type
   * @format int32
   * @example "1=deposit，4=business，5=gas"
   */
  type?: number;
  /**
   * userId
   * @format int64
   */
  userId?: number;
  /** userName */
  userName?: string;
  /**
   * walletId
   * @format int64
   */
  walletId?: number;
  /**
   * walletName
   * @example "钱包名称"
   */
  walletName?: string;
}

/** CreateCollectRuleRequest */
export interface CreateCollectRuleRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * remark
   * @example "Rule description"
   */
  remark?: string;
  /**
   * Rule parameter 1
   * @example "Rule parameter 1"
   */
  'rule1'?: string;
  /**
   * Rule parameter 2
   * @example "Rule parameter 2"
   */
  'rule2'?: string;
  /**
   * Rule parameter 3
   * @example "Rule parameter 3"
   */
  'rule3'?: string;
  /**
   * Rule parameter 4
   * @example "Rule parameter 4"
   */
  'rule4'?: string;
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
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * type(1 = collection quota, 2 = collection maximum gas, 3 = collection time period)
   * @format int32
   * @example 1
   */
  type?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** DelWhiteAddressRequest */
export interface DelWhiteAddressRequest {
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
   * userAddressApplyId
   * @format int64
   * @example 1
   */
  userAddressApplyId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** DeleteEmailTemplateRequest */
export interface DeleteEmailTemplateRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  name?: string;
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

/** EditInviteCodeStatusRequest */
export interface EditInviteCodeStatusRequest {
  /**
   * status
   * @format int32
   * @example "邀请码状态，0=失效，1=有效"
   */
  inviteCodeStatus?: number;
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
   * @example 123456
   */
  userId?: number;
}

/** EditRateRequest */
export interface EditRateRequest {
  /**
   * channel(option)
   * @example "Investment"
   */
  channel?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * productId(option)
   * @format int64
   * @example 1
   */
  productId?: number;
  /**
   * productName(option)
   * @example "FMS"
   */
  productName?: string;
  /**
   * rate(option)
   * @example 1
   */
  rate?: string;
  /**
   * status
   * @format int32
   * @example "邀请权限，0=不可邀请，1=可邀请"
   */
  status?: number;
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
   * @example 123456
   */
  userId?: number;
}

/** EditRoleRequest */
export interface EditRoleRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * roleId
   * @format int32
   * @example 3
   */
  roleId?: number;
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
   * @example 543
   */
  userId?: number;
}

/** EditTokenExtInfoRequest */
export interface EditTokenExtInfoRequest {
  /** extInfo */
  extInfo?: string;
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
   * tokenid
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** EditWhiteAddressRequest */
export interface EditWhiteAddressRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * remark
   * @example "wallet1"
   */
  remark?: string;
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
   * userAddressApplyId
   * @format int64
   * @example 1
   */
  userAddressApplyId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** EnumVo */
export interface EnumVo {
  /** @format int32 */
  code?: number;
  message?: string;
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
  /** 用户邮箱 */
  email?: string;
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

/** FiatWithdrawRequest */
export interface FiatWithdrawRequest {
  /**
   * amount
   * @example 12.2553
   */
  amount?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /** remark */
  remark?: string;
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
   * tokenId
   * @format int32
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

/** FileDto */
export interface FileDto {
  extName?: string;
  /** @format int64 */
  fileId?: number;
  fileName?: string;
  fileUrl?: string;
  hash?: string;
  /** @format int32 */
  height?: number;
  /** @format int32 */
  size?: number;
  /** @format date-time */
  uploadTime?: string;
  /** @format int64 */
  userId?: number;
  /** @format int32 */
  width?: number;
}

/** FileVo */
export interface FileVo {
  extName?: string;
  /** @format int64 */
  fileId?: number;
  fileName?: string;
  fileUrl?: string;
  hash?: string;
  /** @format int32 */
  height?: number;
  /** @format int32 */
  size?: number;
  /** @format date-time */
  uploadTime?: string;
  /** @format int32 */
  width?: number;
}

/** GenerateGasAddressRequest */
export interface GenerateGasAddressRequest {
  /**
   * @format int64
   * @example 1
   */
  blockchainId?: number;
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

/** GenerateInvestmentAddressRequest */
export interface GenerateInvestmentAddressRequest {
  /** @format int64 */
  blockchainId?: number;
  /** @format int64 */
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
  /** @format int32 */
  walletType?: number;
}

/** GenerateMonthReport */
export interface GenerateMonthReport {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * month
   * @format int32
   * @example 6
   */
  month?: number;
  /**
   * reportType(1=all,2=sto)
   * @format int32
   * @example 1
   */
  reportType?: number;
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
   * @example "userId"
   */
  userId?: number;
  /**
   * year
   * @format int32
   * @example 2021
   */
  year?: number;
}

/** GenerateUserDepositAddressRequest */
export interface GenerateUserDepositAddressRequest {
  /** @format int64 */
  blockchainId?: number;
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
  /** @format int64 */
  userId?: number;
}

/** GetChainGasFeeRequest */
export interface GetChainGasFeeRequest {
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
   * tokenId(If empty, query all)
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** GetContractByIdRequest */
export interface GetContractByIdRequest {
  /**
   * 合约ID
   * @format int64
   * @example 1
   */
  contractId?: number;
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

/** GetDepositAddressRequest */
export interface GetDepositAddressRequest {
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
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** GetFileRequest */
export interface GetFileRequest {
  /**
   * fileId
   * @format int64
   * @example 1
   */
  fileId?: number;
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

/** GetGaKeyRequest */
export interface GetGaKeyRequest {
  /**
   * 2FACode
   * @example 123456
   */
  faCode?: string;
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

/** GetImagRequest */
export interface GetImagRequest {
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
   * url
   * @example "/img/112.jpg"
   */
  url?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** GetInvestmentParameterRequest */
export interface GetInvestmentParameterRequest {
  /** @format int64 */
  investmentId?: number;
}

/** GetSignKeyRequest */
export interface GetSignKeyRequest {
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

/** GetTokenByIdRequest */
export interface GetTokenByIdRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * policyType,tokenid=0 审批类型(1=1签，2=2签，3=签，4=4签，10=最小提现金额，11=最大提现金额，12=提现手续费)
   * @format int32
   * @example 1
   */
  policyType?: number;
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
   * tokenID,tokenid=0 代表全局规则
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** GetTokenListRequset */
export interface GetTokenListRequset {
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

/** GetTokenPolicyListRequest */
export interface GetTokenPolicyListRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
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
   * tokenID,tokenid=0 代表全局规则
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * 10=最小提现金额，11=最大提现金额，12=提现手续费
   * @example [1,2,3,4,10,11]
   */
  typeList?: number[];
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** GetTokenPolicyRequest */
export interface GetTokenPolicyRequest {
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
   * tokenId
   * @format int64
   * @example 1
   */
  tokenId?: number;
  /**
   * typeList
   * @example [1,2,3,4,10,11]
   */
  typeList?: number[];
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** GetTransactionRequest */
export interface GetTransactionRequest {
  /** @format int64 */
  txId?: number;
}

/** GetUserInfoRequest */
export interface GetUserInfoRequest {
  /**
   * query channel
   * @example 2
   */
  channel?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * query productId
   * @format int64
   * @example 2
   */
  productId?: number;
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
   * timeZoneId
   * @example 2
   */
  timeZoneId?: string;
  /**
   * query userId
   * @format int64
   * @example 2
   */
  userId?: number;
}

/** GetWalletInfoRequest */
export interface GetWalletInfoRequest {
  /**
   * walletId
   * @format int64
   * @example "钱包id"
   */
  walletId?: number;
}

/** GoogleAuthDto */
export interface GoogleAuthDto {
  encryptGaKey?: string;
  gaUrl?: string;
}

/** ListReportRequest */
export interface ListReportRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
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

/** LockUserRequest */
export interface LockUserRequest {
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
   * lock or unlock userid
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** LogActionMapVo */
export interface LogActionMapVo {
  /**
   * actionId
   * @format int32
   */
  actionId?: number;
  /** actionName */
  actionName?: string;
  /**
   * actionResult(1=成功，0=失败)
   * @format int32
   */
  actionResult?: number;
  /**
   * actionTime请求时间
   * @format int64
   */
  actionTime?: number;
  /** requestBody */
  requestBody?: string;
  /** requestUrl */
  requestUrl?: string;
  /** userId */
  userId?: string;
  /** userMap */
  userMap?: string;
  /** userName */
  userName?: string;
}

/** Login2FacodeRequest */
export interface Login2FacodeRequest {
  /**
   * 2Facode
   * @example "023456"
   */
  facode?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * mail
   * @example "abc@hk.com"
   */
  mail?: string;
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

/** NodeInfoVo */
export interface NodeInfoVo {
  /**
   * chainId
   * @format int32
   * @example 99
   */
  chainId?: number;
  /** @format int32 */
  chainType?: number;
  /**
   * networkType
   * @format int32
   * @example 1
   */
  networkType?: number;
  /**
   * nodeName
   * @example "BTC"
   */
  nodeName?: string;
}

/** PoolTransferRequest */
export interface PoolTransferRequest {
  /**
   * amount
   * @example 12.2553
   */
  amount?: number;
  /**
   * faCode
   * @example 256879
   */
  faCode?: string;
  /**
   * pool in Stake,Cold,Small,Large,Discard
   * @example 1
   */
  fromAdderess?: string;
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
   * pool in Stake,Cold,Small,Large,GasFee
   * @example 1
   */
  toAdderess?: string;
  /**
   * Pool Transfer token
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * Pool Transfer token
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

/** QueryAddressRequest */
export interface QueryAddressRequest {
  /**
   * address
   * @example "0x001111"
   */
  address?: string;
  /**
   * blockChainId
   * @format int64
   * @example 1
   */
  blockChainId?: number;
}

/** QueryAllBalanceRequset */
export interface QueryAllBalanceRequset {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
   */
  pageSize?: number;
  /**
   * tenantId (option)
   * @example "optional is not send return all"
   */
  tenantId?: string;
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
   * tokenId (option)
   * @format int32
   * @example "optional is not send return all"
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryBalanceRequest */
export interface QueryBalanceRequest {
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
   * tokenId
   * @format int32
   * @example "optional is not send return all"
   */
  tokenId?: number;
  /**
   * NFT ID
   * @example "optional is not send return all"
   */
  tokenNo?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
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
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * mail
   * @example "abc@hk.com"
   */
  mail?: string;
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

/** QueryChainBalanceRequest */
export interface QueryChainBalanceRequest {
  /**
   * blockChainId
   * @format int64
   * @example "optional is not send return all"
   */
  blockChainId?: number;
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
   * tokenId
   * @format int64
   * @example "optional is not send return all"
   */
  tokenId?: number;
  /**
   * NFT ID
   * @example "optional is not send return all"
   */
  tokenNo?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * walletId
   * @format int64
   */
  walletId?: number;
}

/** QueryChainTokenListRequest */
export interface QueryChainTokenListRequest {
  /**
   * blockChainId(If empty, query all)
   * @format int64
   * @example 1
   */
  blockChainId?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * status 0=disable,1=enable (If empty, query all)
   * @format int32
   * @example 1
   */
  status?: number;
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
   * tokenId
   * @format int64
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryChainTransactionByBackendRequest */
export interface QueryChainTransactionByBackendRequest {
  /**
   * address (option)
   * @example "0x00000000000"
   */
  address?: string;
  /**
   * status(option),no=all,1=Pending,2=WaitSend,3=UnConfirm,4=Success,5=Failed,6=Processing,7=Sent,8=Exception,9=WaitSign
   * @example [2]
   */
  chainStatusList?: number[];
  /**
   * isNft (option)
   * @example false
   */
  isNft?: boolean;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
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
   * tokenId List (option)
   * @example [1]
   */
  tokenList?: number[];
  /**
   * txType(option),no=all,17=StakingTransfer,18=Staking,19=UnStaking,21=UnStakingClaim,22=StakeRewordDeposit
   * @example [1]
   */
  txTypeList?: number[];
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryContractListRequest */
export interface QueryContractListRequest {
  /**
   * 合约地址
   * @example "0x2rerw2"
   */
  address?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * name合约名称
   * @example "usdt"
   */
  name?: string;
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

/** QueryEnumRequest */
export interface QueryEnumRequest {
  /**
   * 可以查询 TokenTypeEnum，StoTypeEnum，QueryTypeEnum，PolicyTypeEnum，NonceStatusEnum，NetworkTypeEnum，ChainTypeEnum 枚举值
   * @example "TokenTypeEnum"
   */
  enumName?: string;
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

/** QueryFiatTransactionRequest */
export interface QueryFiatTransactionRequest {
  /** 币种：USD，HKD */
  currencyList?: string[];
  /** 结束时间 */
  endTime?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
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
  requestId?: string;
  /** 开始时间 */
  startTime?: string;
  /** 订单状态：2-待审核，3-成功，8-取消 */
  statusList?: number[];
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
  timeZoneId?: string;
  /** 交易类型：1-充值，2-提现 */
  txTypeList?: number[];
  /**
   * userId
   * @format int64
   */
  userId?: number;
  /** 用户ID列表 */
  userIdList?: number[];
  /** userName */
  userName?: string;
}

/** QueryFundRequest */
export interface QueryFundRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * productId
   * @format int64
   * @example 2
   */
  productId?: number;
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
  timeZoneId?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryInvestmentYield */
export interface QueryInvestmentYield {
  /** @format int64 */
  investmentId?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
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
  /** @format int64 */
  userId?: number;
}

/** QueryInviterRequest */
export interface QueryInviterRequest {
  /**
   * productId
   * @format int64
   * @example 2
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
   * query userId
   * @format int64
   * @example 2
   */
  userId?: number;
}

/** QueryNodeInfoRequest */
export interface QueryNodeInfoRequest {
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

/** QueryOrderListRequest */
export interface QueryOrderListRequest {
  /**
   * query downloadStatus
   * @format int32
   */
  downloadStatus?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * query orderType
   * @example ["sell","buy"]
   */
  orderTypeList?: string[];
  /**
   * query productId
   * @format int64
   * @example 1
   */
  productId?: number;
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

/** QueryRecordRequest */
export interface QueryRecordRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * productId
   * @format int64
   * @example 1
   */
  productId?: number;
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
   * query type
   * @example ["downloadUser","downloadBuyOrder","downloadSellOrder"]
   */
  typeList?: string[];
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryRuleRequest */
export interface QueryRuleRequest {
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
   * TokenID,不传查询所有的
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryStakingRequest */
export interface QueryStakingRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
   */
  pageSize?: number;
  /**
   * 1=Processing,2=Pending,3=Success,4=Failed,5=Flagged,6=WaitSend,7=Exception,8=Cancel,9=Refund,10=WaitStaking,11=WaitToAccount,12=CanUnStaking
   * @format int32
   * @example 10
   */
  status?: number;
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
   * staking tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryTransactionByBackendRequest */
export interface QueryTransactionByBackendRequest {
  /**
   * billEndTime (option)
   * @format date-time
   * @example "2021-2-1"
   */
  billEndTime?: string;
  /**
   * billStartTime (option)
   * @format date-time
   * @example "2021-1-1"
   */
  billStartTime?: string;
  /**
   * endTime (option)
   * @format date-time
   * @example "2021-2-1"
   */
  endTime?: string;
  /**
   * isNft (option)
   * @example false
   */
  isNft?: boolean;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
   */
  pageSize?: number;
  /**
   * primaryOrderOnly (option)
   * @example true
   */
  primaryOrderOnly?: boolean;
  /**
   * startTime (option)
   * @format date-time
   * @example "2021-1-1"
   */
  startTime?: string;
  /**
   * status(option),no=all,1=Processing,2=Pending,3=Success,4=Failed,5=Flagged
   * @example [2]
   */
  statusList?: number[];
  /**
   * tenantId(option)
   * @example 1
   */
  tenantId?: string;
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
  timeZoneId?: string;
  /**
   * tokenId List (option)
   * @example [1]
   */
  tokenList?: number[];
  /**
   * txType(option),no=all,1=deposit,2=withdraw,3=transfer,4=call,5=put,6=collect,7=gasFee
   * @example [1]
   */
  txTypeList?: number[];
  /**
   * queryUserId(option)
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * userName(option)
   * @example 1
   */
  userName?: string;
}

/** QueryTransactionByUserRequest */
export interface QueryTransactionByUserRequest {
  /**
   * billEndTime (option)
   * @format date-time
   * @example "2021-2-1"
   */
  billEndTime?: string;
  /**
   * billStartTime (option)
   * @format date-time
   * @example "2021-1-1"
   */
  billStartTime?: string;
  /**
   * endTime (option)
   * @format date-time
   * @example "2021-2-1"
   */
  endTime?: string;
  /**
   * isNft (option)
   * @example false
   */
  isNft?: boolean;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
   */
  pageSize?: number;
  /**
   * startTime (option)
   * @format date-time
   * @example "2021-1-1"
   */
  startTime?: string;
  /**
   * status(option),no=all,1=Processing,2=Pending,3=Success,4=Failed,5=Flagged
   * @example [2]
   */
  statusList?: number[];
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
   * tokenId List (option)
   * @example [1]
   */
  tokenList?: number[];
  /**
   * txType(option),no=all,1=deposit,2=withdraw,3=transfer,4=call,5=put,6=collect,7=gasFee
   * @example [1]
   */
  txTypes?: number[];
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryTransactionExceptionRequest */
export interface QueryTransactionExceptionRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
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

/** QueryTransactionRequest */
export interface QueryTransactionRequest {
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
   * txId
   * @format int64
   * @example "transaction id"
   */
  txId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryUnStakingBalanceVo */
export interface QueryUnStakingBalanceVo {
  list?: StakeBalanceVo[];
  /**
   * totalUsdCumulativeRewards
   * @example 10
   */
  totalUsdCumulativeRewards?: string;
  /**
   * totalUsdStakingAmount
   * @example 10
   */
  totalUsdStakingAmount?: string;
}

/** QueryUserInfoProductRequest */
export interface QueryUserInfoProductRequest {
  /**
   * query downloadStatus
   * @format int32
   * @example "0-下载未下载，1-下载已下载，2-下载全部"
   */
  downloadStatus?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * query productId
   * @format int64
   * @example 2
   */
  productId?: number;
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

/** QueryUserInfoRequest */
export interface QueryUserInfoRequest {
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

/** QueryUserLastSubmitTimeRequest */
export interface QueryUserLastSubmitTimeRequest {
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
   * Questionnaire type(1.User survey)
   * @format int32
   * @example 1
   */
  type?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryUserListRequest */
export interface QueryUserListRequest {
  /**
   * mail(option)
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
   */
  pageSize?: number;
  /**
   * status(option)
   * @format int32
   * @example 1
   */
  status?: number;
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
   * userId(option)
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * userName(option)
   * @example "amoro yang"
   */
  userName?: string;
  /**
   * userType(option)
   * @format int32
   * @example 1
   */
  userType?: number;
}

/** QueryUserListResponse */
export interface QueryUserListResponse {
  /**
   * email(option)
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * gmtCreated(option)
   * @example "2024-09-18 12:00:00"
   */
  gmtCreated?: string;
  /**
   * name(option)
   * @example "amoro yang"
   */
  name?: string;
  /**
   * parentUserId(option)
   * @format int64
   * @example 23
   */
  parentUserId?: number;
  /**
   * parentUserName(option)
   * @example "yang"
   */
  parentUserName?: string;
  /**
   * status(option)
   * @format int32
   * @example 1
   */
  status?: number;
  /**
   * userId(option)
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * userName(option)
   * @example "amoro yang"
   */
  userName?: string;
  /**
   * userType(option)
   * @format int32
   * @example 1
   */
  userType?: number;
}

/** QueryUserLogActionRequest */
export interface QueryUserLogActionRequest {
  /**
   * actions
   * @example [1,2]
   */
  actions?: number[];
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
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

/** QueryUserRegisterRequest */
export interface QueryUserRegisterRequest {
  /** @format int64 */
  investmentId?: number;
  /** @format int32 */
  status?: number;
  userIds?: number[];
}

/** QueryUserWhiteAddressListRequest */
export interface QueryUserWhiteAddressListRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
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
   * tokenId list
   * @example [1,2,3,4]
   */
  tokenIdList?: number[];
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryWaitCollectRequest */
export interface QueryWaitCollectRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
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
   * tokenID
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** QueryWalletRequest */
export interface QueryWalletRequest {
  channel?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  name?: string;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
   */
  pageSize?: number;
  /** @format int32 */
  status?: number;
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
  typeList?: number[];
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
  walletIdList?: number[];
}

/** QueryWalletTransactionRequest */
export interface QueryWalletTransactionRequest {
  /**
   * billEndTime (option)
   * @format date-time
   * @example "2021-2-1"
   */
  billEndTime?: string;
  /**
   * billStartTime (option)
   * @format date-time
   * @example "2021-1-1"
   */
  billStartTime?: string;
  /**
   * blockChainId List (option)
   * @example [1]
   */
  blockChainIdList?: number[];
  /**
   * endTime (option)
   * @example "2021-2-1 or 时间戳"
   */
  endTime?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * tpageNum
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
   * requestId(option)
   * @example 1
   */
  requestId?: string;
  /**
   * startTime (option)
   * @example "2021-1-1 or 时间戳"
   */
  startTime?: string;
  /**
   * status(option),no=all,1=Processing,2=Pending,3=Success,4=Failed,5=Flagged,6=WaitSend,7=Exception,8=Cancel,11=WaitToAccount
   * @example [2]
   */
  statusList?: number[];
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
  timeZoneId?: string;
  /**
   * token List (option)
   * @example [1]
   */
  tokenList?: number[];
  /** txHashList */
  txHashList?: string[];
  /**
   * txType(option),no=all,1=deposit,2=withdraw,7=gasFee,8=gasTransfer
   * @example [1]
   */
  txTypeList?: number[];
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * queryWalletId(option)
   * @format int64
   * @example 1
   */
  walletId?: number;
}

/** QueryWhiteAddressApplyRequest */
export interface QueryWhiteAddressApplyRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 页码
   * @format int32
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页数量
   * @format int32
   * @example 10
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

/** QueryYieldRequest */
export interface QueryYieldRequest {
  endTime?: string;
  /** @format int64 */
  investmentId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  startTime?: string;
  /** @format int64 */
  userId?: number;
}

/** ReSendTransactionRequest */
export interface ReSendTransactionRequest {
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
   * TransactionId id
   * @format int64
   * @example 1
   */
  txId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** ResetPasswordRequest */
export interface ResetPasswordRequest {
  /**
   * gacode
   * @example "023456"
   */
  gacode?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * mail
   * @example "abc@hk.com"
   */
  mail?: string;
  /**
   * new Password
   * @example "A23456"
   */
  newPassword?: string;
  /**
   * reset code
   * @example 123456
   */
  resetCode?: string;
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

/** ResetUserGaRequest */
export interface ResetUserGaRequest {
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
   * @example "userId"
   */
  userId?: number;
}

/** ResyncBlockRequset */
export interface ResyncBlockRequset {
  /**
   * block number
   * @example 1
   */
  blockNum?: string;
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
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** RetryTransactionRequest */
export interface RetryTransactionRequest {
  /**
   * faCode
   * @example 256879
   */
  faCode?: string;
  /**
   * gaCode
   * @example 256879
   */
  gaCode?: string;
  /**
   * gasFeeRate
   * @example 1.2
   */
  gasFeeRate?: number;
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
   * TransactionId id
   * @format int64
   * @example 1
   */
  txId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** RoleVo */
export interface RoleVo {
  name?: string;
  /**
   * 1=Issuser,2=investor,99=admin
   * @format int32
   * @example 1
   */
  roleId?: number;
}

/** SaveRuleRequest */
export interface SaveRuleRequest {
  /**
   * 结束归集时间hh-mm
   * @example "23:59"
   */
  endTime?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 归集最大gas费
   * @example 0.01
   */
  maxGasLimit?: string;
  /**
   * 最小归集金额
   * @example 0.1
   */
  minAmount?: string;
  /**
   * 开始归集时间hh-mm
   * @example "00:00"
   */
  startTime?: string;
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
   * TokenID
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** Send2FACodeByLoginRequest */
export interface Send2FACodeByLoginRequest {
  /**
   * isBackEnd admin login
   * @example false
   */
  isAdmin?: boolean;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * mail
   * @example "abc@hk.com"
   */
  mail?: string;
  /**
   * password hash
   * @example "sha128"
   */
  password?: string;
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

/** Send2FacodeByMailRequest */
export interface Send2FacodeByMailRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * mail
   * @example "abc@hk.com"
   */
  mail?: string;
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

/** SetContractRequest */
export interface SetContractRequest {
  /**
   * 合约地址
   * @example "0x2rerw2"
   */
  address?: string;
  /**
   * 合约代码
   * @example "solidity"
   */
  code?: string;
  /**
   * 合约ID
   * @format int64
   * @example 1
   */
  contractId?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * name合约名称
   * @example "usdt"
   */
  name?: string;
  /**
   * 所有者ID
   * @format int64
   * @example 1
   */
  owner?: number;
  /**
   * 备注
   * @example "usdt合约"
   */
  remark?: string;
  /** 合约BIP规范集 */
  standard?: string[];
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
  /**
   * 版本
   * @example 1
   */
  version?: string;
}

/** SetPasswordRequest */
export interface SetPasswordRequest {
  /**
   * 2FAcode,if not Set Password no need
   * @example "023456"
   */
  facode?: string;
  /**
   * gacode,if not Set Password no need
   * @example "023456"
   */
  gacode?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * new Password
   * @example "A23456"
   */
  newPassword?: string;
  /**
   * old Password
   * @example "A23456"
   */
  oldPassword?: string;
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

/** SetTokenByIdRequest */
export interface SetTokenByIdRequest {
  /**
   * 合约Id
   * @format int64
   * @example 1
   */
  contractId?: number;
  /**
   * 小数位
   * @format int32
   * @example 9
   */
  decimals?: number;
  /**
   * icon
   * @example "http://"
   */
  icon?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * 获取价格渠道
   * @format int32
   * @example 9
   */
  marketChannel?: number;
  /**
   * 币种名称
   * @example "BTCTestCoin"
   */
  name?: string;
  /**
   * 单价
   * @example 9
   */
  price?: string;
  /**
   * 备注
   * @example "备注"
   */
  remark?: string;
  /**
   * 排序
   * @format int32
   * @example 1
   */
  sequence?: number;
  /**
   * 1=有效，0=无效
   * @format int32
   * @example 1
   */
  status?: number;
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
   * tokenID(必填)
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * 交易名称
   * @example "BTC"
   */
  tradingName?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** SetTokenPolicyRequest */
export interface SetTokenPolicyRequest {
  /**
   * amount 审批金额,大于此金额需要N签
   * @example 1
   */
  amount?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * policyType,tokenid=0 审批类型(1=1签，2=2签，3=签，4=4签，10=最小提现金额，11=最大提现金额，12=提现手续费)
   * @format int32
   * @example 1
   */
  policyType?: number;
  /**
   * 币种名称
   * @example "btc"
   */
  remark?: string;
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
   * tokenID,tokenid=0 代表全局规则
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** SignRequestVo */
export interface SignRequestVo {
  /**
   * amount
   * @example 1
   */
  amount?: string;
  /**
   * 1=bitcoin链,2=eth链,3=bsc链
   * @format int32
   * @example 1
   */
  chainType?: number;
  /**
   * fromAddress
   * @example 1
   */
  fromAddress?: string;
  /**
   * id
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 1=MAIN_NET，2=TEST_NET
   * @format int32
   * @example 1
   */
  networkType?: number;
  /**
   * nonce
   * @example 1
   */
  nonce?: string;
  /**
   * 异常信息
   * @example 1
   */
  remark?: string;
  /**
   * 签名的seedhash
   * @example 1
   */
  seedHash?: string;
  /**
   * serial
   * @format int32
   * @example 1
   */
  serial?: number;
  /**
   * 1=已发送,2=已签名，3=签名异常，4=未发送，5=上链异常,6=上链成功
   * @format int32
   * @example 1
   */
  status?: number;
  /**
   * toAddress
   * @example 1
   */
  toAddress?: string;
  /**
   * txid
   * @format int64
   * @example 1
   */
  txid?: number;
  /**
   * version
   * @format int32
   * @example 1
   */
  version?: number;
}

/** SpeedUpTransactionRequest */
export interface SpeedUpTransactionRequest {
  /**
   * gasFeeRate 1-2
   * @example 1.2
   */
  gasFeeRate?: number;
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
   * TransactionId id
   * @format int64
   * @example 1
   */
  txId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** StakeBalanceVo */
export interface StakeBalanceVo {
  /**
   * activeAmount
   * @example 1
   */
  activeAmount?: string;
  /**
   * address
   * @example "0x012134131331"
   */
  address?: string;
  /** APY */
  apy?: string;
  /**
   * balance
   * @example 1
   */
  balance?: string;
  /**
   * eth chainid
   * @format int32
   * @example 1
   */
  chainId?: number;
  /**
   * 1=bitcoin链,2=eth链
   * @format int32
   * @example 2
   */
  chainType?: number;
  /**
   * claimAmount
   * @example 1
   */
  claimAmount?: string;
  /**
   * contract address
   * @example 1
   */
  contract?: string;
  /**
   * freeze_amount
   * @example 0
   */
  freeze_amount?: string;
  /**
   * grantAmount
   * @example 1
   */
  grantAmount?: string;
  /** icon url */
  icon?: string;
  /**
   * 关联的staking资产
   * @format int32
   * @example 1
   */
  linkTokenId?: number;
  /**
   * 最小质押金额
   * @example 1
   */
  minStakeAmount?: string;
  /**
   * 币种名称
   * @example "ETHCoin等"
   */
  name?: string;
  /**
   * 1=MAIN_NET，2=TEST_NET
   * @format int32
   * @example 1
   */
  networkType?: number;
  /** currency price */
  price?: string;
  /**
   * processAmount
   * @example 1
   */
  processAmount?: string;
  /**
   * token balance - freeze_amount
   * @example 1
   */
  realBalance?: string;
  /**
   * token的remark
   * @example "网络名等"
   */
  remark?: string;
  /**
   * 0=否，1=sto
   * @format int32
   * @example 1
   */
  stoType?: number;
  /**
   * tokenid
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * nft的编号
   * @example 1
   */
  tokenNo?: string;
  /**
   * totalStakedAmount
   * @example 1
   */
  totalStakedAmount?: string;
  /**
   * totalUsdStakedAmount
   * @example 1
   */
  totalUsdStakedAmount?: string;
  /**
   * tradingName
   * @example "ETH"
   */
  tradingName?: string;
  /**
   * type 1=原生币，2=合约币
   * @format int32
   * @example 1
   */
  type?: number;
  /**
   * 赎回时间
   * @example 1
   */
  unStakingTime?: string;
  /**
   * unclaimAmount
   * @example 1
   */
  unclaimAmount?: string;
  /**
   * updateTime
   * @format int64
   * @example 1626057167000
   */
  updateTime?: number;
  /** USD单价 */
  usdPrice?: string;
  usdValue?: string;
}

/** StakingReqRequest */
export interface StakingReqRequest {
  /**
   * amount
   * @example 12.2553
   */
  amount?: number;
  /**
   * 2FA
   * @example 123456
   */
  faCode?: string;
  /**
   * GA
   * @example 123456
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
   * staking tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * validatorId
   * @format int32
   * @example 1
   */
  validatorId?: number;
}

/** SubmitQuestionnaireRequest */
export interface SubmitQuestionnaireRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * Questionnaire result
   * @example "Need to continue to optimize"
   */
  result?: string;
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
   * Questionnaire type(1.User survey)
   * @format int32
   * @example 1
   */
  type?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** SumGasTransactionRequest */
export interface SumGasTransactionRequest {
  /**
   * endTime
   * @format int64
   * @example 1668327475136
   */
  endTime?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * startTime
   * @format int64
   * @example 1638327475136
   */
  startTime?: number;
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
   * toUserid
   * @format int64
   * @example 6
   */
  toUserid?: number;
  /**
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** SumUserBalanceRequest */
export interface SumUserBalanceRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * stakingTokenIds null = all
   * @example [1]
   */
  stakingTokenIds?: number[];
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
  /**
   * userIds null = all
   * @example [1]
   */
  userIds?: number[];
}

/** TokenBoundUserRequest */
export interface TokenBoundUserRequest {
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
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * bound userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** TokenNftVo */
export interface TokenNftVo {
  description?: string;
  externalUrl?: string;
  image?: string;
  name?: string;
  sourceJson?: string;
  /**
   * thirdType
   * @example 1
   */
  thirdType?: string;
  /**
   * thirdUserId
   * @example 1
   */
  thirdUserId?: string;
}

/** TokenPolicyVo */
export interface TokenPolicyVo {
  /**
   * amount
   * @example 1
   */
  amount?: string;
  /**
   * policyType{1=1签，2=2签，3=签，4=4签，10=最小提现金额，11=最大提现金额}
   * @format int32
   * @example 1
   */
  policyType?: number;
  /**
   * remark
   * @example 1
   */
  remark?: string;
  /**
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
}

/** TokenVo */
export interface TokenVo {
  /** address */
  address?: string;
  /**
   * eth chainid
   * @format int32
   * @example 1
   */
  chainId?: number;
  /**
   * 1=bitcoin链,2=eth链
   * @format int32
   * @example 2
   */
  chainType?: number;
  /**
   * 0=否，1=sto
   * @example 1
   */
  contract?: string;
  /** contractVo */
  contractVo?: ContractVo;
  /**
   * 法币信息
   * @example "USD"
   */
  currency?: string;
  /**
   * 小数位(必填)
   * @format int32
   * @example 9
   */
  decimals?: number;
  /** token extInfo */
  extInfo?: Record<string, string>;
  /** icon url */
  icon?: string;
  /**
   * 关联的关联的服务对象名称
   * @example "MATIC"
   */
  linkService?: string;
  /**
   * 关联的tokenId，stake与UnStake才会使用的到
   * @format int32
   * @example 50
   */
  linkTokenId?: number;
  /**
   * 1=后台设置,2=coinMarketCap
   * @format int32
   */
  marketChannel?: number;
  /**
   * name
   * @example "ETHCoin"
   */
  name?: string;
  /**
   * 1=MAIN_NET，2=TEST_NET
   * @format int32
   * @example 1
   */
  networkType?: number;
  /** price currency */
  price?: string;
  /** remark */
  remark?: string;
  /**
   * 排序（默认99）
   * @format int32
   * @example 1
   */
  sequence?: number;
  /**
   * 1=有效，0=无效（默认为1，建议添加时为0确认无误后再修改为有效）
   * @format int32
   * @example 1
   */
  status?: number;
  /**
   * 1=标准，2=staking，3=Unstaking
   * @format int32
   * @example 1
   */
  stoType?: number;
  /**
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /** totalAmount USD */
  totalAmount?: string;
  /**
   * tradingName
   * @example "ETH"
   */
  tradingName?: string;
  /**
   * type 1=原生币，2=合约币
   * @format int32
   * @example 1
   */
  type?: number;
  /** price USD */
  usdPrice?: string;
}

/** TransactionStatisticsRequest */
export interface TransactionStatisticsRequest {
  /**
   * endTime
   * @format date-time
   * @example "2021-2-1"
   */
  endTime?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * startTime
   * @format date-time
   * @example "2021-1-1"
   */
  startTime?: string;
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
   * tokenId List (option)
   * @example [1]
   */
  tokenList?: number[];
  /**
   * txType(option),no=all,1=deposit,2=withdraw,3=transfer,4=call,5=put,6=collect,7=gasFee
   * @example [1]
   */
  txTypeList?: number[];
  /**
   * queryUserId(option)
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** TransactionStatisticsVo */
export interface TransactionStatisticsVo {
  /**
   * sumAmount
   * @example 1.2301
   */
  sumAmount?: string;
  /**
   * sumFee
   * @example 123.1
   */
  sumFee?: string;
  /**
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * tradingName
   * @example "ETH"
   */
  tradingName?: string;
}

/** TransactionVo */
export interface TransactionVo {
  /**
   * amlGrading
   * @format int32
   */
  amlGrading?: number;
  /**
   * amlScore
   * @format int32
   */
  amlScore?: number;
  /** 交易金额 */
  amount?: string;
  /** approveName */
  approveName?: string;
  /** 审批备注,使用/n分割每次审批内容 */
  approveRemark?: string;
  /** approveTime */
  approveTime?: string;
  /**
   * 记账类型: 1.资金转移 2.非资金转移.是否变动链上资产
   * @format int32
   */
  billType?: number;
  /**
   * 交易状态:1=Pending、2=WaitSend、3=UnConfirm、4=Success、5=Failed,6=Processing,7=Sent,8=Exception,9=WaitSign
   * @format int32
   */
  chainStatus?: number;
  /**
   * 链交易ID
   * @format int64
   */
  chainTxId?: number;
  /**
   * 记账方向 0.入账 -1.出账
   * @format int32
   */
  direction?: number;
  /** 归属用户email */
  email?: string;
  /** 异常信息 */
  errorMsg?: string;
  /** 交易费用 */
  fee?: string;
  /** 转出账户名称 */
  fromUserAddress?: string;
  /** 转出账户ID */
  fromUserId?: string;
  /** token icon url */
  icon?: string;
  /**
   * 交易ID
   * @format int64
   */
  id?: number;
  /**
   * kysScore
   * @format int32
   */
  kyaScore?: number;
  /**
   * linkTx
   * @format int64
   */
  linkTx?: number;
  /** 用户name */
  name?: string;
  /**
   * 支付订单编号
   * @format int64
   */
  paymentId?: number;
  /** 申请备注 */
  remark?: string;
  /** riskScore */
  riskScore?: string;
  /** riskTime */
  riskTime?: string;
  /**
   * HSM签名版本
   * @format int32
   */
  signVersion?: number;
  /**
   * 交易状态:1=Processing、2=Pending、3=Success、4=Failed,5=Flagged,6=WaitSend,7=Exception,8=Cancel,9=Refund
   * @format int32
   */
  status?: number;
  /** 三方订单编号 */
  thirdOrderNo?: string;
  /** 三方订单类型，0=内部 */
  thirdType?: string;
  /**
   * thirdUserId
   * @example 1
   */
  thirdUserId?: string;
  /** 转入账户/用户企业名称 */
  toUserAddress?: string;
  /** 转入账户ID */
  toUserId?: string;
  /**
   * 币种ID
   * @format int32
   */
  tokenId?: number;
  /** 币种名称 如：BTCCoin,BTCTestCoin,ETHCoin等 */
  tokenName?: string;
  /** NFT信息 */
  tokenNftVo?: TokenNftVo;
  /** token */
  tokenNo?: string;
  /** 交易名称:BTC,ETH */
  tradingName?: string;
  /** 交易完成时间ms */
  txBillTime?: string;
  /** 交易HASH */
  txHash?: string;
  /** 交易创建时间ms */
  txTime?: string;
  /**
   * 交易类型:1.充值、2.提现、3.转账
   * @format int32
   */
  txType?: number;
  /** 归属用户ID */
  userId?: string;
  /**
   * 用户Identity
   * @example "xx-xx-00001"
   */
  userIdentity?: string;
}

/** TransferForWalletRequest */
export interface TransferForWalletRequest {
  /**
   * amount
   * @example 12.2553
   */
  amount?: number;
  /**
   * faCode
   * @example 256879
   */
  faCode?: string;
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
   * @example "servicename_256879"
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
  /**
   * walletId
   * @format int64
   * @example 1
   */
  walletId?: number;
  /**
   * walletType
   * @format int32
   * @example "4-业务提现，5-gas费"
   */
  walletType?: number;
}

/** TransferGasFeeRequest */
export interface TransferGasFeeRequest {
  /**
   * 转账金额(option)，不填系统转账当前系统平均gasfee的5倍
   * @example 1
   */
  amount?: number;
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
   * 目标资金池地址
   * @example "0x91920130391304133"
   */
  toAddress?: string;
  /**
   * tokenID
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** TransferRequest */
export interface TransferRequest {
  /**
   * amount
   * @example 12.2553
   */
  amount?: number;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /** remark */
  remark?: string;
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
   * toUser
   * @example "to user mail"
   */
  toUserMail?: string;
  /**
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** UnStakingReqRequest */
export interface UnStakingReqRequest {
  /**
   * amount
   * @example 12.2553
   */
  amount?: number;
  /**
   * 2FA
   * @example 123456
   */
  faCode?: string;
  /**
   * GA
   * @example 123456
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
   * unstaking tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** UpdateEmailTemplateRequest */
export interface UpdateEmailTemplateRequest {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  new_name?: string;
  project_json?: string;
  template_content?: string;
  template_name?: string;
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

/** UserAddressApplyVo */
export interface UserAddressApplyVo {
  /**
   * address
   * @example "0xqjsasadw2sad2"
   */
  address?: string;
  /**
   * gmtCreated
   * @format int64
   * @example "Create time stamp"
   */
  gmtCreated?: number;
  /**
   * User Address Apply id
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * remark
   * @example "my wallet"
   */
  remark?: string;
  /**
   * Approval status(1.Pending,2.Approval,3.Declined,4.user cancel)
   * @format int32
   * @example 3
   */
  status?: number;
  /** tokenVo */
  token?: TokenVo;
  /**
   * token id
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * address type(1=充值，2=提现，3=外部地址)
   * @format int32
   * @example 1
   */
  type?: number;
  /** BaseUserVo */
  user?: BaseUserVo;
  /**
   * User id
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** UserAddressVo */
export interface UserAddressVo {
  /**
   * address
   * @example "0x1220301301030310"
   */
  address?: string;
  /**
   * chainAccountId
   * @format int64
   * @example 1231
   */
  chainAccountId?: number;
  /**
   * 链账户余额
   * @example 1
   */
  chainBalance?: string;
  /**
   * eth chainid
   * @format int32
   * @example 1
   */
  chainId?: number;
  /**
   * 1=bitcoin链,2=eth链
   * @format int32
   * @example 2
   */
  chainType?: number;
  /** icon url */
  icon?: string;
  /**
   * userAddressId
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * name
   * @example "ETHCoin"
   */
  name?: string;
  /**
   * 1=MAIN_NET，2=TEST_NET
   * @format int32
   * @example 1
   */
  networkType?: number;
  /**
   * realBalance
   * @example 1.001
   */
  realBalance?: string;
  /**
   * remark Memo
   * @example "02334144"
   */
  remark?: string;
  /**
   * 1有效，0无效
   * @format int32
   * @example 1
   */
  status?: number;
  /**
   * thirdType
   * @example 1
   */
  thirdType?: string;
  /**
   * thirdUserId
   * @example 1
   */
  thirdUserId?: string;
  /**
   * token_id
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * type 1=原生币，2=合约币
   * @format int32
   * @example 1
   */
  tokenType?: number;
  /**
   * tradingName
   * @example "ETH"
   */
  tradingName?: string;
  /**
   * 1=充值，2=提现，3=外部地址
   * @format int32
   * @example 1
   */
  type?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * 用户Identity
   * @example "xx-xx-00001"
   */
  userIdentity?: string;
  /**
   * userNick
   * @example "userNick"
   */
  userNick?: string;
  /**
   * 用户role
   * @format int32
   * @example 1
   */
  userRole?: number;
}

/** UserBalanceVo */
export interface UserBalanceVo {
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  /**
   * 用户手机
   * @example 121231313
   */
  mobile?: string;
  /**
   * thirdType
   * @example 1
   */
  thirdType?: string;
  /**
   * thirdUserId
   * @example 1
   */
  thirdUserId?: string;
  /** 用户多币种余额列表 */
  tokenBalance?: BalanceVo[];
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * 用户Identity
   * @example "xx-xx-00001"
   */
  userIdentity?: string;
  /**
   * userNick
   * @example "userNick"
   */
  userNick?: string;
}

/** UserEditRequest */
export interface UserEditRequest {
  /**
   * backup mail
   * @example "abc@hk.com"
   */
  backupMail?: string;
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * Contact number
   * @example 123456
   */
  mobile?: string;
  /**
   * backup mail
   * @example "abc@hk.com"
   */
  name?: string;
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

/** UserInfoResponse */
export interface UserInfoResponse {
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  /** 扩展信息：country-国家省市，businessNature-企业法人，language-语言偏好，intentionOfService-行业领域，openAccountTime-开户时间 */
  extInfoList?: object;
  extName?: string;
  /** @format int64 */
  fileId?: number;
  /** 用户上传文件列表 */
  fileList?: FileDto[];
  fileName?: string;
  fileUrl?: string;
  /**
   * 签约时间
   * @example 12345678
   */
  fmsSignTime?: string;
  /**
   * 预注册时间
   * @format date-time
   * @example 12345678
   */
  gmtCreated?: string;
  hasGaKey?: boolean;
  /**
   * icon url
   * @example "头像(url)"
   */
  icon?: string;
  /**
   * 邀请码
   * @example "asdsa"
   */
  invitationCode?: string;
  /**
   * 邀请权限
   * @format int32
   * @example 1
   */
  invitationStatus?: number;
  /**
   * jwtToken
   * @example "user request token"
   */
  jwtToken?: string;
  /**
   * mobile
   * @example 12345678
   */
  mobile?: string;
  /**
   * name
   * @example "dsfd"
   */
  name?: string;
  /**
   * 邀请人的邀请码
   * @example "qqwd"
   */
  parentUserCode?: string;
  /**
   * 邀请人ID
   * @format int64
   * @example 0.1
   */
  parentUserId?: number;
  /**
   * 邀请人名
   * @example "ass"
   */
  parentUserName?: string;
  /**
   * 费率
   * @example 0.1
   */
  rate?: number;
  /**
   * status
   * @format int32
   * @example 1
   */
  status?: number;
  /**
   * TransactionId id
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * 用户Identity
   * @example "xx-xx-00001"
   */
  userIdentity?: string;
  /**
   * userName
   * @example "默认为邮箱"
   */
  userName?: string;
  /**
   * userType
   * @format int32
   * @example 1
   */
  userType?: number;
}

/** UserVo */
export interface UserVo {
  addressList?: UserAddressVo[];
  /**
   * backupEmail
   * @example "abc@hk.com"
   */
  backupEmail?: string;
  /**
   * email
   * @example "abc@hk.com"
   */
  email?: string;
  extInfoList?: object;
  /** @format date-time */
  gmtCreated?: string;
  hasGaKey?: boolean;
  /**
   * icon url
   * @example "头像(url)"
   */
  icon?: string;
  /**
   * jwtToken
   * @example "user request token"
   */
  jwtToken?: string;
  /** @format int32 */
  kyaStatus?: number;
  /** @format date-time */
  kyaTime?: string;
  /**
   * mobile
   * @example 12345678
   */
  mobile?: string;
  /**
   * name
   * @example "amoro yang"
   */
  name?: string;
  roleList?: RoleVo[];
  /**
   * 1=普通用户,2=管理用户
   * @format int32
   * @example 1
   */
  roleType?: number;
  /**
   * status(0=无效，1=有效，2=未重置初始密码，3=短时锁定,4=账户锁定)
   * @format int32
   * @example 1
   */
  status?: number;
  /** tenantId */
  tenantId?: string;
  thirdUserId?: string;
  thirdUserName?: string;
  thirdUserType?: string;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
  /**
   * 用户Identity
   * @example "xx-xx-00001"
   */
  userIdentity?: string;
  /**
   * userName
   * @example "默认为邮箱"
   */
  userName?: string;
  /**
   * userType
   * @format int32
   * @example "用户类型 1=Individual，2=Corporate"
   */
  userType?: number;
}

/** ValidateAddressRequest */
export interface ValidateAddressRequest {
  /**
   * address
   * @example "0x15029B775e3AF04efe5Adfa2393b2241c7eA378E"
   */
  address?: string;
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
   * tokenId
   * @format int32
   * @example 1
   */
  tokenId?: number;
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
  /** @format int64 */
  userId?: number;
}

/** VerifyGACodeRequest */
export interface VerifyGACodeRequest {
  /**
   * GaCode
   * @example 123456
   */
  gaCode?: string;
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

/** VerifyResetingRequest */
export interface VerifyResetingRequest {
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

/** WalletGenerateAddressRequest */
export interface WalletGenerateAddressRequest {
  /**
   * @format int64
   * @example 1
   */
  blockchainId?: number;
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
  /**
   * 钱包id
   * @format int64
   * @example 1
   */
  walletId?: number;
  /**
   * walletType
   * @format int32
   * @example "4-业务提现，5-gas费"
   */
  walletType?: number;
}

/** WithdrawRequest */
export interface WithdrawRequest {
  /**
   * amount
   * @example 12.2553
   */
  amount?: number;
  /**
   * faCode
   * @example 256879
   */
  faCode?: string;
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
   * signHash
   * @example 256879
   */
  signHash?: string;
  /**
   * thirdOrderNo
   * @example 256879
   */
  thirdOrderNo?: string;
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
   * @format int32
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

/** queryApproveRecord */
export interface QueryApproveRecord {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
  /**
   * signTypeList null=all
   * @example [1,2,3]
   */
  signTypeList?: number[];
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
   * TransactionId id
   * @format int64
   * @example 1
   */
  txId?: number;
  /**
   * userId
   * @format int64
   * @example 1
   */
  userId?: number;
}

/** userTransferGasFeeRequset */
export interface UserTransferGasFeeRequset {
  /**
   * gacode
   * @example 1
   */
  gaCode?: string;
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
   * tokenID
   * @format int32
   * @example 1
   */
  tokenId?: number;
  /**
   * gas to userId
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

/** BasePageResponse«FileVo» */
export interface BasePageResponseFileVo {
  content?: BasePageFileVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BasePageResponse«LogActionMapVo» */
export interface BasePageResponseLogActionMapVo {
  content?: BasePageLogActionMapVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BasePageResponse«QueryUserListResponse» */
export interface BasePageResponseQueryUserListResponse {
  content?: BasePageQueryUserListResponse;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BasePageResponse«TokenPolicyVo» */
export interface BasePageResponseTokenPolicyVo {
  content?: BasePageTokenPolicyVo;
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

/** BasePageResponse«UserAddressApplyVo» */
export interface BasePageResponseUserAddressApplyVo {
  content?: BasePageUserAddressApplyVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BasePageResponse«UserAddressVo» */
export interface BasePageResponseUserAddressVo {
  content?: BasePageUserAddressVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BasePageResponse«UserBalanceVo» */
export interface BasePageResponseUserBalanceVo {
  content?: BasePageUserBalanceVo;
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

/** BasePage«FileVo» */
export interface BasePageFileVo {
  /** 数据列表 */
  list?: FileVo[];
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

/** BasePage«LogActionMapVo» */
export interface BasePageLogActionMapVo {
  /** 数据列表 */
  list?: LogActionMapVo[];
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

/** BasePage«QueryUserListResponse» */
export interface BasePageQueryUserListResponse {
  /** 数据列表 */
  list?: QueryUserListResponse[];
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

/** BasePage«TokenPolicyVo» */
export interface BasePageTokenPolicyVo {
  /** 数据列表 */
  list?: TokenPolicyVo[];
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

/** BasePage«UserAddressApplyVo» */
export interface BasePageUserAddressApplyVo {
  /** 数据列表 */
  list?: UserAddressApplyVo[];
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

/** BasePage«UserAddressVo» */
export interface BasePageUserAddressVo {
  /** 数据列表 */
  list?: UserAddressVo[];
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

/** BasePage«UserBalanceVo» */
export interface BasePageUserBalanceVo {
  /** 数据列表 */
  list?: UserBalanceVo[];
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

/** BaseResponse«ContractVo» */
export interface BaseResponseContractVo {
  content?: ContractVo;
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

/** BaseResponse«FileVo» */
export interface BaseResponseFileVo {
  content?: FileVo;
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

/** BaseResponse«List«AssetBalanceResponse»» */
export interface BaseResponseListAssetBalanceResponse {
  content?: AssetBalanceResponse[];
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

/** BaseResponse«List«ChainGasFeeVo»» */
export interface BaseResponseListChainGasFeeVo {
  content?: ChainGasFeeVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«ChainTokenResponse»» */
export interface BaseResponseListChainTokenResponse {
  content?: ChainTokenResponse[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«CollectRuleVo»» */
export interface BaseResponseListCollectRuleVo {
  content?: CollectRuleVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«ContractVo»» */
export interface BaseResponseListContractVo {
  content?: ContractVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«EnumVo»» */
export interface BaseResponseListEnumVo {
  content?: EnumVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«LogActionMapVo»» */
export interface BaseResponseListLogActionMapVo {
  content?: LogActionMapVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«NodeInfoVo»» */
export interface BaseResponseListNodeInfoVo {
  content?: NodeInfoVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«SignRequestVo»» */
export interface BaseResponseListSignRequestVo {
  content?: SignRequestVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«StakeBalanceVo»» */
export interface BaseResponseListStakeBalanceVo {
  content?: StakeBalanceVo[];
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

/** BaseResponse«List«TransactionStatisticsVo»» */
export interface BaseResponseListTransactionStatisticsVo {
  content?: TransactionStatisticsVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«List«UserAddressVo»» */
export interface BaseResponseListUserAddressVo {
  content?: UserAddressVo[];
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«Map«string,List«ChainAccountVo»»» */
export interface BaseResponseMapStringListChainAccountVo {
  content?: Record<string, ChainAccountVo[]>;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«QueryUnStakingBalanceVo» */
export interface BaseResponseQueryUnStakingBalanceVo {
  content?: QueryUnStakingBalanceVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«TokenPolicyVo» */
export interface BaseResponseTokenPolicyVo {
  content?: TokenPolicyVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«TokenVo» */
export interface BaseResponseTokenVo {
  content?: TokenVo;
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

/** BaseResponse«UserAddressVo» */
export interface BaseResponseUserAddressVo {
  content?: UserAddressVo;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** BaseResponse«UserInfoResponse» */
export interface BaseResponseUserInfoResponse {
  content?: UserInfoResponse;
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

/** BaseResponse«int» */
export interface BaseResponseInt {
  /** @format int32 */
  content?: number;
  /**
   * 返回码 0成功，其他为失败,例如15xxx
   * @format int32
   */
  respCode?: number;
  /** 返回信息,用于非成功说明 */
  respMsg?: string;
}

/** Map«string,List«ChainAccountVo»» */
export type MapStringListChainAccountVo = Record<string, any>;

export interface UploadUsingPostPayload {
  /** 上传的文件 */
  file: File;
}

export interface UploadUsingPostParams {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
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

export interface UploadAttachmentUsingPostPayload {
  /** 上传的文件 */
  file: File;
}

export interface UploadAttachmentUsingPostParams {
  /**
   * loginUserId
   * @format int64
   * @example 1
   */
  loginUserId?: number;
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

/** @format int32 */
export type CreateUserUsingPostPayload = number;

export type QueryAddressUsingPost1Payload = QueryAddressRequest[];
