import {UseCase} from '@s-ui/domain'

export class ChangePasswordUseCase extends UseCase {
  constructor({config, changePasswordService, changePasswordRequest}) {
    super()
    this._config = config
    this._changePasswordService = changePasswordService
    this._changePasswordRequest = changePasswordRequest
  }

  async execute({password, token}) {
    const changePasswordRequest = this._changePasswordRequest({
      password,
      token
    })
    try {
      const result = await this._changePasswordService.execute({
        changePasswordRequest
      })
      return result
    }
    catch (error) {
      throw error
    }
  }
}
