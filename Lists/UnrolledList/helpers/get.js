var get = function(node, index) {
  var count = 0;
  UnrolledListNode n = node;
  while (n != null) {
    if (index < count + node.MAX_LEN) {
      return n.vals[index - count]
    }
    count += n.vals.length
  }
  return ""
}
