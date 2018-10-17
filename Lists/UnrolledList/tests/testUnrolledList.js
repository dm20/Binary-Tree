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

var printList = function(node) {
	var n = node
	while (n != null) {
		print(n.vals)
		n = n.next
	}
}

/*
* Unrolled List
*/
function UnrolledListNode(vals, height) {
  this.vals = vals;
  this.next = null;
  this.MAX_LEN = height;
}


var n = new UnrolledListNode(['a','b','c'],5)
n.next = new UnrolledListNode(['d','e','f','g','h'],5)
n.next.next = new UnrolledListNode(['i','j'],5)

print("\nLIST:")
printList(n)
print("\n")

print("\nGET:")
print("get element 0: " + get(n,0))
print("get element 5: " + get(n,5))
print("get element 9: " + get(n,9))
print("\n")

print("\nADD:")
print("add 'item' at index 2")
add(n,2,'item')

print("add 'word' at index 8")
add(n,8,'word')

print("\nLIST AFTER ADDITIONS:")
printList(n)
print("\n")

print("get element 9: " + get(n,9))

