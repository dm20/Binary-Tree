/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding 
up all the values along the path equals the given sum.
Note: A leaf is a node with no children.
*/

var hasPathSum = function(root, sum) {
    if (root == null) {
        return false
    }
    var result = checkTree(root,root.val,sum)
    console.log(result)
    return result 
};

function checkTree(node,currentSum,sum) {
    if (currentSum == sum && node.left == null && node.right == null) {
        return true
    }
    var result = false
    if (node.left != null) {
        result = result || checkTree(node.left,currentSum+node.left.val,sum)
    }
    if (node.right != null) {
        result = result || checkTree(node.right,currentSum+node.right.val,sum)
    }
    return result
}
