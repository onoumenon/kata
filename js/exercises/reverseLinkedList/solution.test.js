const LinkedList = require("./solution");

describe("LinkedList", () => {
    it("should return a linkedList of 1 to 10", () => {
        let linkedList = new LinkedList 
        for (let i = 0; i < 10; i++) {
            linkedList.add(i+1)
        }
        expect(linkedList).toEqual({"head": {"data": 1, "next": {"data": 2, "next": {"data": 3, "next": {"data": 4, "next": {"data": 5, "next": {"data": 6, "next": {"data": 7, "next": {"data": 8, "next": {"data": 9, "next": {"data": 10, "next": null}}}}}}}}}}});
    });

   it('should reverse a list', () => {
    let linkedList = new LinkedList 
    for (let i = 0; i < 10; i++) {
        linkedList.add(i+1)
    }
    expect(linkedList.reverse()).toEqual({"data": 10, "next": {"data": 9, "next": {"data": 8, "next": {"data": 7, "next": {"data": 6, "next": {"data": 5, "next": {"data": 4, "next": {"data": 3, "next": {"data": 2, "next": {"data": 1, "next": null}}}}}}}}}})
   }); 

});
