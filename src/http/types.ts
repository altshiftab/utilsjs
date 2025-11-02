export interface RequestInitEx {
    skipReadResponseBody?: boolean;
    skipErrorOnStatusCode?: boolean;
}

export interface Context {
    request: Request;
    requestBody: string;
    response?: Response;
    responseBody?: string;
}
