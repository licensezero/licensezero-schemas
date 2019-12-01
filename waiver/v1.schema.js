module.exports = {
  "description": "License Zero Waiver",
  "type": "object",
  "required": [
    "manifest",
    "projectID",
    "document",
    "publicKey",
    "signature"
  ],
  "properties": {
    "manifest": {
      "description": "JSON serialization",
      "type": "string",
      "pattern": "^{.+}$"
    },
    "projectID": {
      "description": "Project ID",
      "type": "string",
      "pattern": "^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
    },
    "document": {
      "description": "License Text",
      "type": "string",
      "minLength": 1
    },
    "publicKey": {
      "description": "Licensor's Ed25519 Public Key",
      "type": "string",
      "pattern": "^[0-9a-f]{64}$"
    },
    "signature": {
      "description": "Licensor's Ed25519 Signature",
      "type": "string",
      "pattern": "^[0-9a-f]{128}$"
    }
  }
}
