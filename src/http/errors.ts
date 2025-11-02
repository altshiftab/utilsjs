import {Context} from "./types.js";

export class FetchError extends Error {
    static name = "FetchError";

    constructor(message: string, public readonly context: Context, options?: {cause?: unknown}) {
        super(message, options);
        this.context = context;
    }
}

export class BadStatusCodeError extends FetchError {
    static name = "BadStatusCodeError";

    constructor(public readonly statusCode: number, public readonly context: Context) {
        super("bad status code", context);
        this.statusCode = statusCode;
    }
}

