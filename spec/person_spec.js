let Person = require("../src/person")


describe("Person class", function(){

    let person = new Person('Ryan',30,'male',['being a hardarse',' agile', ' ssd hard drives'] );

    it("Checks the name", function(){
        expect(person.name).toBe("Ryan");
    })

    it("Checks the name", function(){
        expect(person.gender).toBe("male");
    })

    it("Checks the name", function(){
        expect(person.age).toBe(30);
    })

    it("Checks the name", function(){
        expect(sayHello()).toBe("Hello, my name is Ryan and I am 30 years old male. My interests are being a hardarse, agile and ssd hard drives.");
    })
})