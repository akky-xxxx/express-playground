type Args = {
  status?: number
  message?: string
  error?: any // eslint-disable-line  @typescript-eslint/no-explicit-any
}

export class ThisError extends Error {
  status: number

  constructor(args: Args) {
    const { status, message, error } = args
    super(message)
    this.status = error?.status || status || 500
    this.stack = error?.stack
    this.message = error?.message || message
  }
}
