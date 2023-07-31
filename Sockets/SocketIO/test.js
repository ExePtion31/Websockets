const path = require('path');
require('reflect-metadata');
require('dotenv').config({
    path: path.resolve('test.env'),
});

const Jasmine = require('jasmine');
const TSConsoleReporter = require('jasmine-ts-console-reporter');
const jasmine = new Jasmine();

jasmine.loadConfigFile('./jasmine.json');
jasmine.env.clearReporters();
jasmine.addReporter(new TSConsoleReporter());
jasmine.execute();
