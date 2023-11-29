const HTTPStatusCodes = {
    // 1xx Informational
    Continue: 100,

    // 2xx Success
    OK: 200,
    Created: 201,
    NoContent: 204,

    // 3xx Redirection
    MovedPermanently: 301,
    Found: 302,
    NotModified: 304,

    // 4xx Client Errors
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    UnprocessableEntity: 422,

    // 5xx Server Errors
    InternalServerError: 500,
    NotImplemented: 501,
    ServiceUnavailable: 503,
}

export default HTTPStatusCodes