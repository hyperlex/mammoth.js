/* eslint-disable */
var assert = require("assert");
var path = require("path");
var fs = require("fs");
var _ = require("underscore");

var mammoth = require("../");
var promises = require("../lib/promises");
var results = require("../lib/results");

var testing = require("./testing");
var test = require("./test")(module);
var testData = testing.testData;
var createFakeDocxFile = testing.createFakeDocxFile;

test('should retain text colors and styles', function() {
    var docxPath = path.join(__dirname, "test-data/all-text-styles.docx");
    return mammoth.convertToHtml({path: docxPath}).then(function(result) {
        assert.equal(result.value, '<p>foobar</p>');
    });
});
