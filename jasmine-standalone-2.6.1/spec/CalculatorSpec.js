describe("Calculator",function () {

    var cal;

    beforeEach(function () {
        cal = new Calculator();
    });

    describe("add",function () {

        it("should add two numbers",function () {

            var res = cal.add(2,3);
            expect(res).toBe(5);

        }) ;
        it("should throw error if no arguments",function(){

            expect(function () {
                cal.add(1);
            }).toThrow();

        });

    });


});