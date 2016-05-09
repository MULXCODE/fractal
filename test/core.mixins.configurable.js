'use strict';

const chai            = require('chai');
const expect          = chai.expect;

const Configurable    = require('../src/core/mixins/configurable');

describe('Configurable', function(){
    
    const config = new (Configurable(Object));

    describe('.set()', function(){
        it('sets a config value', function(){
            config.set('foo', 'bar');
            expect(config.get('foo')).to.equal('bar');
        });
    });

    describe('.get()', function(){
        it('gets a config value', function(){
            config.set('bar', 'foo');
            expect(config.get('bar')).to.equal('foo');
        });
        it('returns undefined if not set', function(){
            expect(config.get('xyxyxyx')).to.equal(undefined);
        });
    });

});
