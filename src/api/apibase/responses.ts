export type Response<T> = {
  data: T
  success: true
}

export type FailResponse = {
  success: false
  err_msg: string
  err_code: number
}
