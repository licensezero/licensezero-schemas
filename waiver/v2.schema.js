module.exports = {
  type: 'object',
  required: [
    'beneficiary',
    'licensor',
    'offer',
    'order',
    'schema',
    'waiver',
    'vendor'
  ],
  additionalProperties: false,
  properties: {
    beneficiary: {
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
        'id',
        'price'
      ],
      additionalProperties: false,
      properties: {
        price: {
          type: 'integer',
          min: 1
        },
        id: require('../common/uuid')
      }
    },
    schema: {
      type: 'string',
      const: 'https://schemas.licensezero.com/waiver/2.0.0.json'
    },
    waiver: {
      type: 'object',
      required: [
        'date',
        'form',
        'term',
        'text'
      ],
      additionalProperties: false,
      properties: {
        date: {
          type: 'string',
          format: 'date-time'
        },
        form: require('../common/url'),
        term: {
          oneOf: [
            {
              type: 'string',
              const: 'forever'
            },
            {
              type: 'integer',
              minimum: 1
            }
          ]
        },
        text: {
          type: 'string',
          minLength: 1
        }
      }
    },
    vendor: {
      type: 'object',
      required: [
        'api',
        'homepage',
        'jurisdiction',
        'key',
        'name',
        'relationship',
        'signature'
      ],
      properties: {
        api: require('../common/url'),
        homepage: require('../common/url'),
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
        }
      },
      additionalProperties: false
    }
  }
}
