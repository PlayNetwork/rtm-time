# rtm-time

A simple library that parses time in Remember the Milk / Jira format, like 1h, 2d, 3.3m, 40s, etc.

    var rtmtime = require('rtm-time');

    console.log(rtmtime.parse('1h'));
    console.log(rtmtime.parse('3s'));
    console.log(rtmtime.parse('2d'));

    3600000
    3000
    172800000