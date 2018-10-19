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
// var list = [5500,558,559,557,53,12,18,14,28,29,52,500,58,894275935,57,53,53,100,98,998,75,77,73,23,27,23,17,0,31,88,89,87,83,97,93,92,48,34,47,43,43,300,38,39,37,33,1500,8,5,7,13,113,8,9,7,32897457233,2,8,4,7,444443,323,8,9,7,3,158,159,157,13,12]


quickSort(list,0,list.length-1)
print(list)
