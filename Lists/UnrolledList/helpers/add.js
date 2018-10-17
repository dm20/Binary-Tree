var add = function(node, index, item) {
  var count = 0;
  var n = node;
  var stop = false;
  
  while (n != null && !stop) {
    if (index < count + n.vals.length) {
        var newVals = n.vals.slice(0, index - count)
        newVals.push(item)
        var ending = n.vals.slice(index - count,n.vals.length)
        newVals.push(ending)
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
    count += n.vals.length
    n = n.next
  }

}
