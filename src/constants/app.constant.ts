export const Locator = {
    // DB
    MONGO_DB: Symbol('MongoDb'),

    // Repository
    USER_REPOSITORY: Symbol('UserRepository'),
    KEY_REPOSITORY: Symbol('KeyRepository'),
    CUSTOMER_REPOSITORY: Symbol('CustomerRepository'),
    PRICE_REPOSITORY: Symbol('PriceRepository'),
    // Service
    TOKEN_SERVICE: Symbol('TokenService'),
    USER_SERVICE: Symbol('UserService'),
    KEY_SERVICE: Symbol('KeyService'),
    AUTH_SERVICE: Symbol('AuthService'),
    CUSTOMER_SERVICE: Symbol('CustomerService'),
    HOME_SERVICE: Symbol('HomeService'),
    PRICE_SERVICE: Symbol('PriceService'),

    // Model
    USER_MODEL: Symbol('UserModel'),
    KEY_MODEL: Symbol('KeyModel'),
    CUSTOMER_MODEL: Symbol('CustomerModel'),
    PRICE_MODEL: Symbol('PriceModel'),

    // Controller
    BASE_CONTROLLER: Symbol('BaseController'),
    AUTH_CONTROLLER: Symbol('AuthController'),
    CUSTOMER_CONTROLLER: Symbol('CustomerController'),
    HOME_CONTROLLER: Symbol('HomeController'),
    PRICE_CONTROLLER: Symbol('PriceController'),

    // Router
    INDEX_ROUTER: Symbol('IndexRouter'),
    AUTH_ROUTER: Symbol('AuthRouter'),
    CUSTOMER_ROUTER: Symbol('CustomerRouter'),
    HOME_ROUTER: Symbol('HomeRouter'),
    PRICE_ROUTER:Symbol('PriceRouter')
}


export const StatusCode = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    MOVED_TEMPORARILY: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,

    /**
     * @deprecated
     *
     * Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
     */
    USE_PROXY: 305,

    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    REQUEST_TOO_LONG: 413,
    REQUEST_URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    INSUFFICIENT_SPACE_ON_RESOURCE: 419,

    /**
     * @deprecated
     *
     * A deprecated response used by the Spring Framework when a method has failed.
     */
    METHOD_FAILURE: 420,

    MISDIRECTED_REQUEST: 421,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    INSUFFICIENT_STORAGE: 507,
    NETWORK_AUTHENTICATION_REQUIRED: 511
}

export const AuthType = {
    SIGN_IN: 'SignIn',
    SIGN_UP: 'SignUp'
}
