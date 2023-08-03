const assert = require('assert');
const quixote = require("quixote");

describe('Check if ', function () {

    let frame;

    let navContainer;

    before(function (done) {
        frame = quixote.createFrame({
            src: '/base/src/index.html'
        }, done);
    });

    after(function () {
        frame.remove();
    });

    beforeEach(function (done) {
        frame.reload(function() {
            navContainer = frame.get("nav.nav-container");
            done();
        });
    });


    it('nav-container is flex and has justify-content value', function () {
        assert.equal(navContainer.getRawStyle('display'), "flex", "display is flex");
        assert.equal(navContainer.getRawStyle('justify-content'), "space-between", "justify-content is space-between");
    });
});
