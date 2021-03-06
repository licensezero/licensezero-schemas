module.exports = {
  type: 'object',
  required: [
    'FORM',
    'VERSION',
    'date',
    'licensee',
    'licensor',
    'orderID',
    'price',
    'project'
  ],
  additionalProperties: false,
  properties: {
    FORM: {
      description: 'Private License Form Name',
      type: 'string',
      const: 'private license'
    },
    VERSION: {
      description: 'Private License Form Version',
      type: 'string',
      pattern: '^[0-9]+.[0-9]+.[0-9]+$'
    },
    date: {
      description: 'Private License Effective Date',
      type: 'string',
      format: 'date-time'
    },
    licensee: {
      description: 'Licensee Identification',
      type: 'object',
      required: [
        'name',
        'jurisdiction',
        'email'
      ],
      additionalProperties: false,
      properties: {
        name: {
          description: "Licensee's Name",
          type: 'string',
          minLength: 4
        },
        jurisdiction: {
          description: "Licensee's Jurisdiction",
          type: 'string',
          pattern: '^[A-Z][A-Z]-[A-Z0-9]+$'
        },
        email: {
          description: "Licensee's E-Mail Address",
          type: 'string',
          format: 'email'
        }
      }
    },
    licensor: {
      type: 'object',
      required: [
        'name',
        'jurisdiction'
      ],
      additionalProperties: false,
      properties: {
        name: {
          description: "Licensor's Name",
          type: 'string',
          minLength: 4
        },
        jurisdiction: {
          description: "Licensor's Jurisdiction",
          type: 'string',
          pattern: '^[A-Z][A-Z]-[A-Z0-9]+$'
        }
      }
    },
    orderID: {
      description: 'Private License Order ID',
      type: 'string',
      pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
    },
    price: {
      description: 'Private License Price',
      type: 'integer',
      min: 1
    },
    project: {
      description: 'Project Identification',
      type: 'object',
      required: [
        'projectID',
        'homepage',
        'description'
      ],
      additionalProperties: false,
      properties: {
        projectID: {
          type: 'string',
          pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
        },
        homepage: {
          description: 'Project Homepage',
          type: 'string',
          format: 'uri',
          pattern: '^https://'
        },
        description: {
          type: 'string',
          minLength: 1
        }
      }
    }
  }
}
