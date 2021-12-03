import ApiBase from '../apibase/apibase'
import * as Params from './params'
import * as Responses from './responses'

class CommonApi extends ApiBase {
  login(params: Params.LoginReq) {
    return this.post<Responses.LoginRes>('/login', params)
  }
}

export default CommonApi
