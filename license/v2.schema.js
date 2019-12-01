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
        form: {
          $ref: '#/definitions/url'
        },
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
        id: {
          $ref: '#/definitions/uuid'
        }
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
        },
        homepage: {
          $ref: '#/definitions/url'
        },
        api: {
          $ref: '#/definitions/url'
        }
      }
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
