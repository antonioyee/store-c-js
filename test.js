var assert      = require("assert");
var checkout    = require('./checkout');
var co;

describe('Store C', function() {

    beforeEach(function () {
        co = new checkout();
    });

    describe('Items: VOUCHER, TSHIRT, MUG => Total: 32.50€', function () {

        var items = ['VOUCHER', 'TSHIRT', 'MUG'];

        describe('Items: VOUCHER, TSHIRT, MUG', function () {
            it('FAIL - Items: VOUCHER, TSHIRT, MUG', function () {
                assert.equal(32.5, co.scan(items[0]).scan(items[1]).scan(items[2]).total());
        	});
        });

        describe('Total: 32.50€', function () {
            it('FAIL - Total: 32.50€', function () {
                var shopping = co.scan(items[0]).scan(items[1]).scan(items[2]);
                assert.equal(32.5, shopping.total());
        	});
        });

    });

    describe('Items: VOUCHER, TSHIRT, VOUCHER => Total: 25.00€', function () {

        var items = ['VOUCHER', 'TSHIRT', 'VOUCHER'];

        describe('Items: VOUCHER, TSHIRT, VOUCHER', function () {
            it('FAIL - Items: VOUCHER, TSHIRT, VOUCHER', function () {
                assert.equal(25, co.scan(items[0]).scan(items[1]).scan(items[2]).total());
        	});
        });

        describe('Total: 25.00€', function () {
            it('FAIL - Total: 25.00€', function () {
                var shopping = co.scan(items[0]).scan(items[1]).scan(items[2]);
                assert.equal(25, shopping.total());
        	});
        });

    });

    describe('Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT => Total: 81.00€', function () {

        var items = ['TSHIRT', 'TSHIRT', 'TSHIRT', 'VOUCHER', 'TSHIRT'];

        describe('Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT', function () {
            it('FAIL - Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT', function () {
                assert.equal(81, co.scan(items[0]).scan(items[1]).scan(items[2]).scan(items[3]).scan(items[4]).total());
        	});
        });

        describe('Total: 81.00€', function () {
            it('FAIL - Total: 81.00€', function () {
                var shopping = co.scan(items[0]).scan(items[1]).scan(items[2]).scan(items[3]).scan(items[4]);
                assert.equal(81, shopping.total());
        	});
        });

    });

    describe('Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT => Total: 74.50€', function () {

        var items = ['VOUCHER', 'TSHIRT', 'VOUCHER', 'VOUCHER', 'MUG', 'TSHIRT', 'TSHIRT'];

        describe('Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT', function () {
            it('FAIL - Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT', function () {
                assert.equal(74.5, co.scan(items[0]).scan(items[1]).scan(items[2]).scan(items[3]).scan(items[4]).scan(items[5]).scan(items[6]).total());
        	});
        });

        describe('Total: 74.50€', function () {
            it('FAIL - Total: 74.50€', function () {
                var shopping = co.scan(items[0]).scan(items[1]).scan(items[2]).scan(items[3]).scan(items[4]).scan(items[5]).scan(items[6]);
                assert.equal(74.5, shopping.total());
        	});
        });

    });

});
