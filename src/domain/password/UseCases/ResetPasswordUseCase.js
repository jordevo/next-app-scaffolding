import {UseCase} from '@s-ui/domain'

export class ResetPasswordUseCase extends UseCase {
  constructor({config, resetPasswordService, resetPasswordRequest}) {
    super()
    this._config = config
    this._resetPasswordService = resetPasswordService
    this._resetPasswordRequest = resetPasswordRequest
  }

  async execute({email}) {
    const resetPasswordRequest = this._resetPasswordRequest({email})
    try {
      
      const result = await this._resetPasswordService.execute({
        resetPasswordRequest
      })
      return result
    }
    catch (error) {
      throw error
    }
  }
}
