
// var utils  = require('course-utilities');
// var calculator = utils.load('./app.js', 'calculator');

//import calculator.require('./app.js)

// import {
//     calculator
// } from "./app.js";

const calculator = require('./app.js')


describe('calculator', () => {

    it('Add (+) 2 nums to get sum', () => {
         //Test 1   
        let a = 10;
        let b = 5;
        expect(calculator(a,b, '+')).toBe(15)    
    });

    it('Subtract (-) 2 nums', () => {
        //Test 2  
        let a = 10;
        let b = 5;
        expect(calculator(a,b, '-')).toBe(5)  
     });

   it('Get product (*) of 2 nums', () => {
    //Test 3 
    let a = 10;
    let b = 5;
    expect(calculator(a,b, '*')).toBe(50)  
    });

    it('Expect typeof sum to be number', () => {
        //Test 4  
        let a = 10;
        let b = 5;
        expect(typeof calculator(a,b, '+')).toBe("number")  
    });
})