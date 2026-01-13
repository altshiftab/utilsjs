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

export interface ProblemDetail {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    instance?: string;
    error?: string;
}