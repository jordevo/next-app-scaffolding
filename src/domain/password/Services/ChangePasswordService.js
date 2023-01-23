import {Service} from '@s-ui/domain'

export class ChangePasswordService extends Service {
  constructor({passwordRepository} = {}) {
    super()
    this._passwordRepository = passwordRepository
  }

  execute({changePasswordRequest}) {
    return this._passwordRepository
      .changePassword({
        changePasswordRequest
      })
      .then((result) => {
        return result
      })
      .catch(error => {
        throw error
      })
  }
}
