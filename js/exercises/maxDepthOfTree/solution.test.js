const BinaryTree = require("./solution");

describe("binary tree", () => {
    it("creates a binary tree", () => {
        const tree = new BinaryTree
        const numArr = [4,2,8,7,12,5,3,11,13,14]
        numArr.forEach((num)=>{tree.insert(num)})
        expect(tree).toEqual({"root": {"data": 4, "left": {"data": 2, "left": null, "right": {"data": 3, "left": null, "right": null}}, "right": {"data": 8, "left": {"data": 7, "left": {"data": 5, "left": null, "right": null}, "right": null}, "right": {"data": 12, "left": {"data": 11, "left": null, "right": null}, "right": {"data": 13, "left": null, "right": {"data": 14, "left": null, "right": null}}}}}});
    });
    it('should calculate max depth of tree', () => {
        const tree = new BinaryTree
        const numArr = [4,2,8,7,12,5,3,11,13,14]
        numArr.forEach((num)=>{tree.insert(num)}) 
        expect(tree.findMaxDepth()).toBe(5)
    });
});
