import {add} from '.'

describe("add test",()=>{
    it("should return sum of two numbers",()=>{
        expect(add(1,2)).toBe(3);
        expect(add(-2,2)).toBe(0);
    });
});

function FindName(name){
    return name==="satya";
}

describe("to check true or false",()=>{
    it("should return true",()=>{
        expect(FindName("satya")).toBeTruthy();
        expect(FindName("saty")).toBeFalsy();
    })
})

describe("to check numbers",()=>{
    it("it should be same number",()=>{
        const a=20;
        expect(a).toBe(20);
    })

    it("it should not be same number",()=>{
        const a=20;
        expect(a).not.toBe(1);
    })

    it("it should be deep equal",()=>{
        const a=[1,2];
        expect(a).toEqual([1,2])

        expect({ a: undefined, b: 2 }).toEqual({b:2})
        expect({ a: undefined, b: 2 }).not.toStrictEqual({a:undefined});
    })
})

describe("Arrays",()=>{
    it("length should be equal to 3",()=>{
        expect(['Alice', 'Bob', 'Eve']).toHaveLength(3);
        expect(['Alice', 'Bob', 'Eve']).toContain('Bob');
        expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(['Alice', 'Bob']))

    })
})