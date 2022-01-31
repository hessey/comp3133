var calculator = require('../app/calculator');
var assert = require('chai').assert;

describe('add', () =>{
    function makeTest(x,y){
        let expected = x + y;
        let failure = x+(y+1);

        it(`add (${x},${y}) expected Result ${expected} PASS`, ()=>{
            assert.equal(calculator.add(x,y), expected)
        })

        it(`add (${x},${y}) expected Result ${failure} FAIL`, ()=>{
            assert.equal(calculator.add(x,y), failure)
        })      

    }
    makeTest(5,2)  
})

describe('sub', () =>{
    function makeTest(x,y){
        let expected = x - y;
        let failure = x-0;

        it(`sub (${x},${y}) expected Result ${expected} PASS`, ()=>{
            assert.equal(calculator.sub(x,y), expected)
        })

        it(`sub (${x},${y}) expected Result ${failure} FAIL `, ()=>{
            assert.equal(calculator.sub(x,y), failure)
        })      

    }
    makeTest(5,2)  
})
describe('mul', () =>{
    function makeTest(x,y){
        let expected = x * y;
        let failure = x*(y+2);

        it(`mul (${x},${y}) expected Result ${expected} PASS`, ()=>{
            assert.equal(calculator.mul(x,y), expected)
        })

        it(`mul (${x},${y}) expected Result ${failure} FAIL `, ()=>{
            assert.equal(calculator.mul(x,y), failure)
        })      

    }
    makeTest(5,2)  
})
describe('div', () =>{
    function makeTest(x,y){
        let expected = x / y;
        let failure = x/5;

        it(`div (${x},${y}) expected Result ${expected} PASS`, ()=>{
            assert.equal(calculator.div(x,y), expected)
        })

        it(`div (${x},${y}) expected Result ${failure} FAIL `, ()=>{
            assert.equal(calculator.div(x,y), failure)
        })      

    }
    makeTest(10,2)  
})