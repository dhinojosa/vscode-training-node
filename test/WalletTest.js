const assert = require('assert');

describe('Wallet', function() {
   describe("isEmpty()", function() {
     it ("should be empty by default", function() {
        const wallet = new Wallet();
        assert.strictEqual(wallet.isEmpty(), true);
     });
   })
});