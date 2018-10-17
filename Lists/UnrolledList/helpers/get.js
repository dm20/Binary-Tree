var get = function(node, index) {
  var count = 0;
  var n = node;
  while (n != null) {
    if (index < count + n.vals.length) {
      return n.vals[index - count]
    }
    count += n.vals.length
    n = n.next
  }
}
