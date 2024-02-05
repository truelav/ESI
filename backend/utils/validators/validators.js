import Ajv from "ajv"
const ajv = new Ajv({ allErrors: true })

const createUser_Schema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      company: { type: 'string' },
      password: { type: 'string' },
      're-password': { type: 'string' },
    },
    required: ['name', 'email', 'company', 'password', 're-password'],
    additionalProperties: false,
}

const loginUser_Schema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      company: { type: 'string' },
      password: { type: 'string' },
      're-password': { type: 'string' },
    },
    required: ['name', 'email', 'company', 'password', 're-password'],
    additionalProperties: false,
}

const validateCreateUser = ajv.compile(createUser_Schema);
const validateLoginUser = ajv.compile(loginUser_Schema);


export { validateCreateUser, validateLoginUser };