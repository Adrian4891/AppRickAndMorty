//const app = require("../app");
//const session = require("supertest");
//const request = session(app);

const { reverseString } = require("../testing/funcReverse");
const {  funcOrder } = require("../testing/funcOrder");
const funDesvalance = require("../testing/funDesvalance");

describe("Function reverse", ()=>{
    test("Deberia devolver un string alreves", ()=> {
       const result = reverseString("ernesto");
       expect(result).toBe("otsenre");
    });
    
    test("Si es en mayuscula deberia devolver lo mismo", ()=>{
        const result = reverseString("ERNESTO");
        expect(result).toBe("otsenre")
    });
    
    test("Si el string esta vacio, deberia devolver un string vacio", ()=>{
        const result = reverseString("");
        expect(result).toBe("")
    });
    
    test("Si no se le pasa nada, devulve undefined", ()=>{
        const result = reverseString();
        expect(result).toBe(undefined);
    });
})

describe("Function order",()=>{
    test("Devuelve un array ordenado, ascendente", ()=>{
       const result = funcOrder([4,32,6,67,8,9,12,99]);
       expect(result).toStrictEqual([4,6,8,9,12,32,67,99]);
    });
    test("Si se le pasa un array vacio, solo lo devuelve",()=>{
        const result = funcOrder([]);
        expect(result).toStrictEqual([]);
    });
    test("Si no se le pasa nada, devulve undefined", ()=>{
        const result = funcOrder();
        expect(result).toBe(undefined);
    });

});

describe("Expresion balanceada",()=>{
   test("deberia devolver true si la expresion esta balanceada ", ()=>{
      const result = funDesvalance("{ [ a * ( c + d ) ] : 5 }")
      expect(result).toBe(true);
   });
   test("si la expresion esta desvalanceada devuelve false", () =>{
      const result = funDesvalance("{ a * ( c + d ) ] - 5 }");
      expect(result).toBe(false);
   });
});