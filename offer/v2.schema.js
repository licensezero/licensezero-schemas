module.exports = {
  type: 'object',
  required: [
    'description',
    'id',
    'licensor',
    'pricing',
    'url'
  ],
  properties: {
    description: {
      type: 'string',
      minLength: 1
    },
    id: require('../common/uuid'),
    licensor: require('../common/uuid'),
    pricing: {
      type: 'object',
      required: [
        'private'
      ],
      properties: {
        private: require('../common/price'),
        relicense: require('../common/price')
      }
    },
    url: {
      type: 'string',
      format: 'uri',
      pattern: '^https://'
    }
  }
}
