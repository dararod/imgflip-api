declare namespace API {
  interface Response<T> {
    success: boolean;
    data?: T;
    error_message?: string;
  }
}
