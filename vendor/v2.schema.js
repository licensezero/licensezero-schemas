module.exports = {
  type: 'object',
  required: [
    'api',
    'homepage',
    'jurisdiction',
    'key',
    'name'
  ],
  properties: {
    api: require('../common/url'),
    homepage: require('../common/url'),
    jurisdiction: {
      type: 'string',
      pattern: '^[A-Z][A-Z]-[A-Z0-9]+$'
    },
    key: {
      type: 'string',
      pattern: '^[0-9a-f]{64}$'
    },
    name: {
      type: 'string',
      minLength: 4
    }
  }
}
