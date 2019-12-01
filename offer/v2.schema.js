module.exports = {
  "type": "object",
  "required": [
    "description",
    "id",
    "licensor",
    "pricing",
    "url"
  ],
  "properties": {
    "description": {
      "type": "string",
      "minLength": 1
    },
    "id": {
      "$ref": "#/definitions/uuid"
    },
    "licensor": {
      "$ref": "#/definitions/uuid"
    },
    "pricing": {
      "type": "object",
      "required": [
        "private"
      ],
      "properties": {
        "private": {
          "$ref": "#/definitions/price"
        },
        "relicense": {
          "$ref": "#/definitions/price"
        }
      }
    },
    "url": {
      "type": "string",
      "format": "uri",
      "pattern": "^https://"
    }
  },
  "definitions": {
    "price": {
      "type": "integer",
      "min": 300,
      "max": 300000
    },
    "uuid": {
      "type": "string",
      "pattern": "^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
    }
  }
}
