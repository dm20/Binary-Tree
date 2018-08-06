/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3
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
 * return {boolean}
 */
var isSymmetric = function(root) {
    var levels = levelOrder(root)
    for (var x = 1; x < levels.length; x++) {
	    var level = levels[x]
        for (var i = 0, j = level.length-1; i < level.length; i++,j--) {
            if (level[i] != level[j]) {
                return false
            }
        }
    }
    return true
};

var levelOrder = function(node) {
    if (node == null) { return []}
    var discovered = [];
    discovered.push(node)
    var levels = levelOrderTraverse(discovered,[])
    return levels
}

function levelOrderTraverse(discovered,elms) {
    var level = []
    for (var i = 0; i < discovered.length; i++) {
        if (discovered[i] != null) {
            level.push(discovered[i].val)
        } else {
            level.push("null")
        }
        
    }
    elms.push(level);
    var newlyDiscovered = [];
    for (var i = 0; i < discovered.length; i++) {
        if (discovered[i] != null) {
            if (discovered[i].left != null) {
                newlyDiscovered.push(discovered[i].left)
            } else {
                newlyDiscovered.push(null)
            }
            if (discovered[i].right != null) {
                newlyDiscovered.push(discovered[i].right)
            } else {
                newlyDiscovered.push(null)
            }
        }
    }
    if (newlyDiscovered.length > 0) {
        levelOrderTraverse(newlyDiscovered,elms)
    }
    return elms
}
