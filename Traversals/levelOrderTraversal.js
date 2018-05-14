var discovered = [];

var getLevels = function(node) {
    if (node == null) { return []}
    discovered.push(node)
    var levels = levelOrderTraverse(discovered,[])
    return levels
}

function levelOrderTraverse(discovered,elms) {
    var level = []
    for (var i = 0; i < discovered.length; i++) {
        level.push(discovered[i].val)
    }
    elms.push(level);
    var newlyDiscovered = [];
    for (var i = 0; i < discovered.length; i++) {
        if (discovered[i].left != null) {
            newlyDiscovered.push(discovered[i].left)
        }
        if (discovered[i].right != null) {
            newlyDiscovered.push(discovered[i].right)
        }
    }
    if (newlyDiscovered.length > 0) {
        levelOrderTraverse(newlyDiscovered,elms)
    }
    return elms
}
