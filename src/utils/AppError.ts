class AppError extends Error {
  statusCode: number

  constructor(message: string, status:number = 400){
    super(message)
    this.statusCode = status
  }
}

export {AppError}