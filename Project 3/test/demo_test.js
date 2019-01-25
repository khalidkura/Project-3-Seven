const mocha = require('mocha');
const assert = require('assert');
const SocialFeed = require('../models/feed.js');
describe('saving records', function(){

    it('saves a record to a database', function(done){
        
        var feed = new SocialFeed({
            post:'My favorite song is One more time by Daft Punk'
        });

        feed.save().then(function(){
            assert(feed.isNew === false);
            done();
        });


    });
});