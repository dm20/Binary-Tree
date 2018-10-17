/*
* Debug function
*/
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

/********
* TESTS *
*********/
var n = new UnrolledListNode(['a','b','c'],5)
n.next = new UnrolledListNode(['d','e','f','g','h'],5)
n.next.next = new UnrolledListNode(['i','j'],5)

// Test creation
print("\nLIST:")
printList(n)
print("\n")

// Test get function
print("\nGET:")
print("get element 0: " + get(n,0))
print("get element 5: " + get(n,5))
print("get element 9: " + get(n,9))
print("\n")

// Test add function
print("\nADD:")
print("add 'item' at index 2")
add(n,2,'item')
print("add 'word' at index 8")
add(n,8,'word')

// See modified list
print("\nLIST AFTER ADDITIONS:")
printList(n)
print("\n")

// Test get function after modifications
print("get element 9: " + get(n,9))
