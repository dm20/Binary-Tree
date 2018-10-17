var partition = function (arr, low, high) {
	var x = arr[high]
	var i = low - 1
	for (var j = low; j <= high - 1; j++) {
		if (arr[j] <= x) {
			i++
			var temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
		}
	}
	var temp = arr[i + 1]
	arr[i + 1] = arr[high]
	arr[high] = temp
	return i + 1 
}

var quickSort = function (arr, low, high) {
	if (low < high) {
		index = partition(arr,low,high)
		quickSort(arr,low,index-1)
		quickSort(arr,index+1,high)
	}
}

/*
* TESTS
*/

// CASES
var list = [1,5,3,0,6,4,9,2]
// var list = [1,2,4,3]
// var list = [1,0]

quickSort(list,0,list.length-1)
print(list)
