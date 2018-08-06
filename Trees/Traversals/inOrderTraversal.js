function inOrderTraverse(node) {
  if (node == null) { return };
  
  // traverse left subtree
  if (node.left != null) {
    inOrderTraverse(node.left);
  }

  // visit
  print(node.val)
  
  // traverse right subtree
  if (node.right != null) {
    inOrderTraverse(node.right);
  }

}
