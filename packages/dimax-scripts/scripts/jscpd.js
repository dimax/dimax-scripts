'use strict';

const JsCpd = require('jscpd');

const config = require('../config/jscpd');

const jscpd = new JsCpd();

jscpd.run(config);
