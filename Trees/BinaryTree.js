//              3
//            /   \
//          30     10
//         /  \   /  \
//        1.   6 15   7
//                     \
//                      9

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var r = new TreeNode(3);
r.left = new TreeNode(30);
r.left.left = new TreeNode(1);
r.left.right = new TreeNode(6);
r.right = new TreeNode(10);
r.right.left = new TreeNode(15)
r.right.right = new TreeNode(7)
r.right.right.right = new TreeNode(9)
