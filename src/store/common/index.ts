import {commonApi, option} from '@/api'
import {LoginReq} from '@/api/common/params'
import {makeObservable, observable} from 'mobx'

export const UID = 'uid'
export const TOKEN = 'token'

class CommonStore {
  constructor() {
    makeObservable(this)
  }

  // state
  @observable
  private _uid?: number

  @observable
  private _token?: string

  @observable
  private _isLogin?: boolean

  async initApi() {
    const uid = localStorage.getItem(UID)
    const token = localStorage.getItem(TOKEN)
    if (uid && token) {
      option.setAuth(uid, token)
      this._isLogin = true
      return
    }
    this._isLogin = false
    window.location.replace('/')
  }

  async login(params: LoginReq) {
    const res = await commonApi.login(params)
    if (res.success) {
      if (res.data) {
        this.saveAuth(res.data.uid, res.data.token)
        return true
      }
      return true
    }
    return false
  }

  saveAuth(uid: number, token: string) {
    this._uid = uid
    this._token = token
    localStorage.setItem(UID, uid.toString())
    localStorage.setItem(TOKEN, token)
  }

  get uid() {
    return this._uid
  }
}

export default CommonStore
