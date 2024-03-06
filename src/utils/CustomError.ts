export abstract class CustomError extends Error {
  abstract errorCode: number;
  abstract errorType: string;

  constructor(public message: string) {
    super(message);
  }

  abstract serialize(): { message: string };
}
