import { strictEqual } from 'assert';
import Wallet from '../src/Wallet';

describe('Wallet', function() {
   describe("isEmpty()", function() {
     it ("should be empty by default", function() {
        const wallet = new Wallet();
        strictEqual(wallet.isEmpty(), true);
     });
   })
});
