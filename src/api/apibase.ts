import {AxiosInstance} from 'axios'
import {warpperSend} from './request'
import {FailResponse, Response} from './responses'

// 错误处理
export type ErrorHandle = (status: number, data: any) => void

export class ApiBaseOption {
  onError?: ErrorHandle
  beforeSend?: any
  afterSend?: any
}

type PostOptions = {
  beforeSend?: boolean
  afterSend?: boolean
}

export default class ApiBase {
  request?: AxiosInstance
  apiOption?: ApiBaseOption

  constructor(option: ApiBaseOption) {
    this.apiOption = option
  }

  protected async post<T = any>(
    url: string,
    body: any = {},
    options?: PostOptions,
  ) {
    if (this.apiOption?.beforeSend && options?.beforeSend) {
      this.apiOption.beforeSend()
    }
    const res = await warpperSend(
      () => this.request?.post(url, body),
      this.apiOption?.onError,
    )
    if (this.apiOption?.afterSend && options?.afterSend) {
      this.apiOption.afterSend()
    }

    if (res.success) {
      return res as Response<T>
    }
    return res as FailResponse
  }
}
