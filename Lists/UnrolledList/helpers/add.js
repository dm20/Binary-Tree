var add = function(node, index, item) {
  var count = 0;
  UnrolledListNode n = node;
  var stop = false;
  
  while (n != null && !stop) {
    if (index <= count + n.vals.length) {
      if (n.vals.length < MAX_LEN) {
        var newVals = []
        newVals.push(n.vals.slice(0, i - count,))
        newVals.push(item)
        newVals.push(n.vals.slice(i - count,n.vals.length)
        if (newVals.length > n.MAX_LEN) {
          n.vals = newVals.slice(0,n.MAX_LEN)
          newNode = new UnrolledListNode(newVals.slice(n.MAX_LEN, newVals.length), n.MAX_LEN)
          newNode.next = n.next
          n.next = newNode
        } else {
          n.vals = newVals
        }
        stop = true
      }
    }
    count += n.vals.length
  }
}
