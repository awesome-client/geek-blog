import {AxiosError} from 'axios'
import {ErrorHandle} from 'src/api/apibase'
import {FailResponse, Response} from './responses'

export const warpperSend = async (
  request: any,
  errorHandle?: ErrorHandle,
): Promise<Response<any> | FailResponse> => {
  try {
    const res = await request()
    return res.data
  } catch (error) {
    const e = error as AxiosError
    if (e.response) {
      errorHandle?.(e.response.status, e.response.data)
      return e.response.data
    } else {
      return {
        success: false,
        err_msg: '服务器开小差了,请稍后再试',
        err_code: 500,
      }
    }
  }
}
