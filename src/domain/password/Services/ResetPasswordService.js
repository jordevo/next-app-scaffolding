import {Service} from '@s-ui/domain'

export class ResetPasswordService extends Service {
  constructor({passwordRepository} = {}) {
    super()
    this._passwordRepository = passwordRepository
  }

  /**
   * @param {String} request
   */
  execute({resetPasswordRequest}) {
    return this._passwordRepository
      .resetPassword({
        resetPasswordRequest
      })
      .then((result) => {
        return result
      })
      .catch(error => {
        throw error
      })
  }
}
