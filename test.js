var glob = require('glob')
var path = require('path')
var tape = require('tape')
var ajv = require('ajv')()

tape('schemas', function (suite) {
  glob.sync('**/*.schema.json').forEach(function (file) {
    suite.test(file, function (test) {
      var schema = require(path.resolve(file))
      ajv.validateSchema(schema)
      test.deepEqual(ajv.errors, null, 'valid schema')
      test.end()
    })
  })
})

tape('examples', function (suite) {
  glob.sync('**/*.example.json').forEach(function (file) {
    suite.test(file, function (test) {
      var dirname = path.dirname(file)
      var basename = path.basename(file, '.example.json')
      var split = basename.split('-')
      var schemaFile = path.join(dirname, split[0] + '.schema.json')
      var schema = require(path.resolve(schemaFile))
      var data = require(path.resolve(file))
      test.doesNotThrow(function () {
        ajv.validate(schema, data)
      }, 'no exception')
      test.deepEqual(ajv.errors, null, 'no validation errors')
      test.end()
    })
  })
})
