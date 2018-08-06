/*
Given a binary tree, determine if it is a valid binary search tree (BST).
Assume a BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Input:
    2
   / \
  1   3
Output: true
    5
   / \
  1   4
     / \
    3   6
Output: false
Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
             is 5 but its right child's value is 4.
*/

var isValidBST = function(r) {
    if (r == null) {
    	return true
    }
    return checkTree(r)
};

function checkTree(node) {
	if (node == null) { return true }

	if (node.left != null && getMax(node.left) >= node.val ) { return false }

	if (node.right != null && getMin(node.right) <= node.val) { return false }

	if (!checkTree(node.left) || !checkTree(node.right)) { return false }

	return true
}

function getMax(node) {
    if (node == null) {
        return
    }
    var max = node.val
    var lMax = getMax(node.left)
    var rMax = getMax(node.right)
    if (lMax > max) {
        max = lMax
    }
    if (rMax > max) {
        max = rMax
    }
    return max
}

function getMin(node) {
    if (node == null) {
        return
    }
    var min = node.val
    var lMin = getMin(node.left)
    var rMin = getMin(node.right)
    if (lMin < min) {
        min = lMin
    }
    if (rMin < min) {
        min = rMin
    }
    return min
}
