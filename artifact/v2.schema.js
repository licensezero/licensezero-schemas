module.exports = {
  description: 'License Zero Artifact Metadata',
  type: 'object',
  required: [
    'offers',
    'schema'
  ],
  properties: {
    offers: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'api',
          'id'
        ],
        additionalProperties: false,
        properties: {
          api: {
            $ref: '#/definitions/url'
          },
          id: {
            type: 'string',
            pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
          },
          public: {
            $ref: '#/definitions/url'
          }
        }
      }
    },
    schema: {
      type: 'string',
      const: 'https://schemas.licensezero.com/artifact/2.0.0.json'
    }
  },
  definitions: {
    url: {
      type: 'string',
      format: 'uri',
      pattern: '^https://'
    }
  }
}
