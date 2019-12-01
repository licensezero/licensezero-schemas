module.exports = {
  type: 'object',
  required: [
    'FORM',
    'VERSION',
    'beneficiary',
    'date',
    'licensor',
    'project'
  ],
  additionalProperties: false,
  properties: {
    FORM: {
      description: 'Waiver Form Name',
      type: 'string',
      const: 'waiver'
    },
    VERSION: {
      description: 'Waiver Form Version',
      type: 'string',
      pattern: '^[0-9]+.[0-9]+.[0-9]+$'
    },
    date: {
      description: 'Waiver Effective Date',
      type: 'string',
      format: 'date-time'
    },
    beneficiary: {
      description: 'Beneficiary Identification',
      type: 'object',
      required: [
        'name',
        'jurisdiction',
        'email'
      ],
      additionalProperties: false,
      properties: {
        name: {
          description: "Beneficiary's Name",
          type: 'string',
          minLength: 4
        },
        jurisdiction: {
          description: "Beneficiary's Jurisdiction",
          type: 'string',
          pattern: '^[A-Z][A-Z]-[A-Z0-9]+$'
        },
        email: {
          description: "Beneficiary's E-Mail Address",
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
    },
    term: {
      oneOf: [
        {
          type: 'integer',
          min: 7,
          max: 3650
        },
        {
          type: 'string',
          const: 'forever'
        }
      ]
    }
  }
}
