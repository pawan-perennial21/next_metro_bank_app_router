export default class MyCustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MyCustomError';
  }
}

export interface IError {
  message: string;
}
