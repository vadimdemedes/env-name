'use strict';

/**
 * Dependencies
 */

var envInfo = require('env-info');
var envName = require('./');
var format = require('util').format;
var test = require('tape');


/**
 * Tests
 */

test('get env', function (t) {
	var info = envInfo();
	var expected = format('%s %s (%s)', info.runtime.name, info.runtime.version, info.os.name);

	t.is(envName(), expected);
	t.end();
});
