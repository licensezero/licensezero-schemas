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
        jurisdiction: {
          $ref: '#/definitions/jurisdiction'
        },
        name: {
          $ref: '#/definitions/name'
        }
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
        id: {
          $ref: '#/definitions/uuid'
        },
        jurisdiction: {
          $ref: '#/definitions/jurisdiction'
        },
        name: {
          $ref: '#/definitions/name'
        }
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
        id: {
          $ref: '#/definitions/uuid'
        },
        description: {
          type: 'string',
          minLength: 1
        },
        url: {
          $ref: '#/definitions/url'
        }
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
        id: {
          $ref: '#/definitions/uuid'
        }
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
        form: {
          $ref: '#/definitions/url'
        },
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
        api: {
          $ref: '#/definitions/url'
        },
        homepage: {
          $ref: '#/definitions/url'
        },
        jurisdiction: {
          $ref: '#/definitions/jurisdiction'
        },
        key: {
          description: 'Ed25519 Public Key',
          type: 'string',
          pattern: '^[0-9a-f]{64}$'
        },
        name: {
          $ref: '#/definitions/name'
        },
        relationship: {
          oneOf: [
            {
              const: 'licensor'
            },
            {
              $ref: '#/definitions/url'
            }
          ]
        },
        signature: {
          type: 'string',
          pattern: '^[0-9a-f]{128}$'
        }
      },
      additionalProperties: false
    }
  },
  definitions: {
    jurisdiction: {
      type: 'string',
      pattern: '^[A-Z][A-Z]-[A-Z0-9]+$'
    },
    name: {
      type: 'string',
      minLength: 4
    },
    uuid: {
      type: 'string',
      pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
    },
    url: {
      type: 'string',
      format: 'uri',
      pattern: '^https://'
    }
  }
}
