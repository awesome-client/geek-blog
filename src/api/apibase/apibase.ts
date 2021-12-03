import {AxiosInstance} from 'axios'
import {warpperSend} from './request'
import {FailResponse, Response} from './responses'

// 错误处理
export type ErrorHandle = (status: number, data: any) => void

export class ApiBaseOption {
  // 鉴权
  uid?: string
  token?: string

  // Handler
  onError?: ErrorHandle
  beforeSend?: any
  afterSend?: any

  // 设置鉴权
  setAuth(uid: string, token: string) {
    this.uid = uid
    this.token = token
  }

  setOnError(onError: ErrorHandle) {
    this.onError = onError
  }

  setCallBack(callback: {before?: () => void; after?: () => void}) {
    if (callback.before) this.beforeSend = callback.before
    if (callback.after) this.afterSend = callback.before
  }
}

type PostOptions = {
  beforeSend?: boolean
  afterSend?: boolean
}

export default class ApiBase {
  private _request?: AxiosInstance
  private _apiOption?: ApiBaseOption

  constructor(option: ApiBaseOption) {
    this._apiOption = option
  }

  protected async post<T = any>(
    url: string,
    body: any = {},
    options?: PostOptions,
  ) {
    if (this._apiOption?.beforeSend && options?.beforeSend) {
      this._apiOption.beforeSend()
    }
    const res = await warpperSend(
      () =>
        this._request?.post(url, body, {
          headers: {
            uid: this._apiOption?.uid || '',
            token: this._apiOption?.token || '',
          },
        }),
      this._apiOption?.onError,
    )
    if (this._apiOption?.afterSend && options?.afterSend) {
      this._apiOption.afterSend()
    }

    if (res.success) {
      return res as Response<T>
    }
    return res as FailResponse
  }
}
