module.exports = {
  type: 'object',
  required: [
    'email',
    'jurisdiction',
    'name'
  ],
  properties: {
    email: {
      type: 'string',
      format: 'email'
    },
    jurisdiction: {
      type: 'string',
      pattern: '^[A-Z][A-Z]-[A-Z0-9]+$'
    },
    name: {
      type: 'string',
      minLength: 4
    }
  }
}
