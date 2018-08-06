/*
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * param {TreeNode} root
 * return {number}
 */
var maxDepth = function(root) {
    return maximumDepth(root)
};

function maximumDepth(node) {
    if (node == null) {
        return 0
    }
    var right = maximumDepth(node.right)
    var left = maximumDepth(node.left)
    return Math.max(right,left)+1
}
