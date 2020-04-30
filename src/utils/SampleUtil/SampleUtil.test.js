import {add} from './'

describe("add testa",()=>{
    it("should return sum of two numbers",()=>{
        expect(add(1,2)).toBe(3);
    });
});