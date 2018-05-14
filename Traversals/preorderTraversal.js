function preorderTraverse(node) {
  if (node == null) { return };
  
  //visit
  print(node.val)
  
  // traverse left subtree
  if (node.left != null) {
    preorderTraverse(node.left);
  }
  
  // traverse right subtree
  if (node.right != null) {
    preorderTraverse(node.right);
  }
}
