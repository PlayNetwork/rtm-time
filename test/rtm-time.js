/* jshint -W117 */
var rtmtime = require('../rtm-time'),
    should = require('should');


describe('rtm-time', function () {
	describe('.parse()', function() {
		it('should parse "1S" into 1', function() {
			rtmtime.parse('1S').should.be.exactly(1);
		});
		it('should parse "2s" into 2000', function() {
			rtmtime.parse('2s').should.be.exactly(2000);
		});
		it('should parse "3m" into 180000', function() {
			rtmtime.parse('3m').should.be.exactly(180000);
		});
		it('should parse "4h" into 14400000', function() {
			rtmtime.parse('4h').should.be.exactly(14400000);
		});
		it('should parse "5d" into 432000000', function() {
			rtmtime.parse('5d').should.be.exactly(432000000);
		});
		it('should parse "0S" into 0', function() {
			rtmtime.parse('0S').should.be.exactly(0);
		});
		it('should parse "10S" into 10', function() {
			rtmtime.parse('10S').should.be.exactly(10);
		});
		it('should parse "100S" into 100', function() {
			rtmtime.parse('100S').should.be.exactly(100);
		});
		it('should return null for null input', function() {
			var r = rtmtime.parse(null);
			if (r !== null) {
				throw new Error(r + ' was not null');
			}
		});
		it('should return null for an invalid unit of time', function() {
			var r = rtmtime.parse('1q');
			if (r !== null) {
				throw new Error(r + ' was not null');
			}
		});
		it('should return null for an invalid numeric value', function() {
			var r = rtmtime.parse('qS');
			if (r !== null) {
				throw new Error(r + ' was not null');
			}
		});
		it('should return null for a missing unit of time', function() {
			var r = rtmtime.parse('33');
			if (r !== null) {
				throw new Error(r + ' was not null');
			}
		});
		it('should return null for an empty string', function() {
			var r = rtmtime.parse('');
			if (r !== null) {
				throw new Error(r + ' was not null');
			}
		});
		it('should return null for any invalid input', function() {
			var r = rtmtime.parse('qS');
			if (r !== null) {
				throw new Error(r + ' was not null');
			}
		});
	});
});
