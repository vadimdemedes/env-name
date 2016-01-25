'use strict';

/**
 * Dependencies
 */

var envInfo = require('env-info');
var format = require('util').format;


/**
 * Get environment description (node + browser)
 */

function envName () {
	var info = envInfo();

	return format('%s %s (%s)', info.runtime.name, info.runtime.version, info.os.name);
}


/**
 * Expose `env-name`
 */

module.exports = envName;
