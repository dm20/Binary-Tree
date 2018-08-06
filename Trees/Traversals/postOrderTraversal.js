function postOrderTraverse(node) {
  if (node == null) { return };
  
  // traverse left subtree
  if (node.left != null) {
    postOrderTraverse(node.left);
  }
  
  // traverse right subtree
  if (node.right != null) {
    postOrderTraverse(node.right);
  }

  // visit
  print(node.val)
}
