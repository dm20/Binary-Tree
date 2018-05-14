
// TEST CASE 1
/*
var r = new TreeNode(3);
r.left = new TreeNode(9);
r.left.left = new TreeNode(1);
r.left.right = new TreeNode(6);
r.right = new TreeNode(20);
r.right.left = new TreeNode(15)
r.right.right = new TreeNode(7)
r.right.right.right = new TreeNode(9)
*/

// TEST CASE 2
/*
var r = new TreeNode(3);
r.left = new TreeNode(30);
r.left.left = new TreeNode(1);
r.left.right = new TreeNode(6);
r.right = new TreeNode(10);
r.right.left = new TreeNode(15)
r.right.right = new TreeNode(7)
r.right.right.left = new TreeNode(9)
*/

// TEST CASE 3
/*
var r = new TreeNode(1)
*/

var levels = getLevels(r);
for (var i = 0; i < levels.length; i++) {
    print()
    print("Level " + (i + 1) + ": " + levels[i])
}
