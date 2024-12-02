export interface GetTestResponse {
  message: string;
}

export type GetTest = () => Promise<GetTestResponse>;

export interface SimpleApiClient {
  getTest: GetTest;
}
