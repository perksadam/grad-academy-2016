describe("Person Methods", function() {
    var persons = [];
    beforeEach(function(){
        persons = [
            {
                name   : 'Bob',
                height : 70,
                gender : 'Male'
            },
            {
                name   : 'Julie',
                height : 62,
                gender : 'Female'
            },
            {
                name   : 'Ralph',
                height : 50,
                gender : 'Male'
            }
        ]
    });

    it("can add to all person's heights",function(){
        spyOn(_, 'forEach').and.callThrough();
        addToHeights(persons, 10);

        expect(persons[0].height).toBe(80);
        expect(persons[1].height).toBe(72);
        expect(persons[2].height).toBe(60);
        expect(_.forEach).toHaveBeenCalled();
    });

    it("can get all heights", function(){
        spyOn(_, 'pluck').and.callThrough();
        expect(getHeights(persons)).toEqual([70,62,50]);
        expect(_.pluck).toHaveBeenCalled();
    });

    it("can sum all heights", function(){
        expect(sumHeights(persons)).toBe(182);
    });

    it("can get the max height", function(){
        expect(getMaxHeight(persons)).toBe(70);
        persons.push({
            name   : 'John',
            height : 70,
            gender : 'Male'
        });
        expect(getMaxHeight(persons)).toBe(70);
    });

    it("can get persons by name", function(){
        expect(getPersonsByName(persons, "Ralph")).toEqual([persons[2]]);
        persons.push({
            name   : 'Bob',
            height : 75,
            gender : 'Male'
        });
        expect(getPersonsByName(persons, "Bob").length).toBe(2);
    });

    it("can tell if all are males", function() {
        expect(areAllMale(persons)).toBe(false);
        persons[0].gender = "Male";
        persons[1].gender = "Male";
        persons[2].gender = "Male";
        expect(areAllMale(persons)).toBe(true);
    });
});

