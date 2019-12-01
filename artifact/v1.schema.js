module.exports = {
  description: 'License Zero Metadata',
  type: 'object',
  required: [
    'licensezero'
  ],
  properties: {
    version: {
      type: 'string',
      enum: [
        '',
        '1.0.0'
      ]
    },
    licensezero: {
      type: 'array',
      items: {
        description: 'License Zero Offer',
        type: 'object',
        properties: {
          licensorSignature: {
            description: "Licensor's Ed25519 Signature",
            type: 'string',
            pattern: '^[0-9a-f]{128}$'
          },
          agentSignature: {
            description: "Agent's Ed25519 Signature",
            type: 'string',
            pattern: '^[0-9a-f]{128}$'
          },
          license: {
            type: 'object',
            required: [
              'homepage',
              'jurisdiction',
              'name',
              'projectID',
              'publicKey',
              'terms',
              'version'
            ],
            additionalProperties: false,
            properties: {
              homepage: {
                description: 'Project Homepage',
                type: 'string',
                format: 'uri',
                pattern: '^(https|http)://'
              },
              jurisdiction: {
                description: "Licensor's Jurisdiction",
                type: 'string',
                pattern: '^[A-Z][A-Z]-[A-Z0-9]+$'
              },
              name: {
                description: "Licensor's Name",
                type: 'string',
                minLength: 4
              },
              projectID: {
                description: 'Project ID',
                type: 'string',
                pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
              },
              publicKey: {
                description: "Licensor's Ed25519 Public Key",
                type: 'string',
                pattern: '^[0-9a-f]{64}$'
              },
              terms: {
                description: 'Public License Terms',
                enum: [
                  'parity',
                  'prosperity',
                  'charity'
                ]
              },
              version: {
                description: 'Public License Version',
                type: 'string',
                pattern: '^[0-9]+.[0-9]+.[0-9]+$'
              }
            }
          }
        }
      }
    }
  }
}
