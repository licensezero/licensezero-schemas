module.exports = {
  description: 'License Zero Private License',
  type: 'object',
  required: [
    'license',
    'licensee',
    'licensor',
    'offer',
    'order',
    'schema',
    'vendor'
  ],
  additionalProperties: false,
  properties: {
    license: {
      type: 'object',
      required: [
        'form',
        'text'
      ],
      additionalProperties: false,
      properties: {
        form: require('../common/url'),
        text: {
          type: 'string',
          minLength: 1
        }
      }
    },
    licensee: {
      type: 'object',
      required: [
        'email',
        'jurisdiction',
        'name'
      ],
      additionalProperties: false,
      properties: {
        email: {
          type: 'string',
          format: 'email'
        },
        jurisdiction: require('../common/jurisdiction'),
        name: require('../common/name')
      }
    },
    licensor: {
      type: 'object',
      required: [
        'email',
        'id',
        'jurisdiction',
        'name'
      ],
      additionalProperties: false,
      properties: {
        email: {
          type: 'string',
          format: 'email'
        },
        id: require('../common/uuid'),
        jurisdiction: require('../common/jurisdiction'),
        name: require('../common/name')
      }
    },
    offer: {
      type: 'object',
      required: [
        'description',
        'id',
        'url'
      ],
      additionalProperties: false,
      properties: {
        id: require('../common/uuid'),
        description: {
          type: 'string',
          minLength: 1
        },
        url: require('../common/url')
      }
    },
    order: {
      type: 'object',
      required: [
        'date',
        'id',
        'price'
      ],
      additionalProperties: false,
      properties: {
        date: {
          type: 'string',
          format: 'date-time'
        },
        price: {
          type: 'integer',
          min: 1
        },
        id: require('../common/uuid')
      }
    },
    schema: {
      type: 'string',
      const: 'https://schemas.licensezero.com/license/2.0.0.json'
    },
    vendor: {
      type: 'object',
      required: [
        'jurisdiction',
        'key',
        'name',
        'relationship',
        'signature',
        'homepage',
        'api'
      ],
      additionalProperties: false,
      properties: {
        jurisdiction: require('../common/jurisdiction'),
        key: {
          description: 'Ed25519 Public Key',
          type: 'string',
          pattern: '^[0-9a-f]{64}$'
        },
        name: require('../common/name'),
        relationship: {
          oneOf: [
            {
              const: 'licensor'
            },
            require('../common/url')
          ]
        },
        signature: {
          type: 'string',
          pattern: '^[0-9a-f]{128}$'
        },
        homepage: require('../common/url'),
        api: require('../common/url')
      }
    }
  }
}
