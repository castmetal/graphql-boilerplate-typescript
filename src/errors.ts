/*
Here we consolidate all erros codes.
This way it is easy to standardize and find the correct error code to use.
*/


export default {
  AUTH_REQUIRED: new Error('AUTH_REQUIRED'), // Used when query attempts to query a resource that is strict to logged users
  FORBIDDEN: new Error('FORBIDDEN'),
  INCORRECT_EMAIL_OR_PASSWORD: new Error('INCORRECT_EMAIL_OR_PASSWORD'), // Used when login fails with wrong data
  INCORRECT_EMAIL_OR_FB_USER: new Error('INCORRECT_EMAIL_OR_FB_USER'), // Used when login fails with wrong data
  BAD_INPUT_FORMAT: new Error('BAD_INPUT_FORMAT'), // Used when mutation input is not with expected format
  NOT_FOUND: new Error('NOT_FOUND'),
  ALREADY_EXISTS: new Error('ALREADY_EXISTS'),
  TOKEN_EXPIRED: new Error('TOKEN_EXPIRED'),
  INTERNAL_SERVER_ERROR: new Error('INTERNAL_SERVER_ERROR'),
  QUESTION_NOT_FOUND: new Error('QUESTION_NOT_FOUND'),
  REPORT_ISSUE_DOES_NOT_EXIST: new Error('REPORT_ISSUE_DOES_NOT_EXIST'),
  COULD_NOT_PARSE_WHERE_FILTER: new Error('COULD_NOT_PARSE_WHERE_FILTER'),
};
