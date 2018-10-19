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

/* CASES */
// 8 elements
var list = [1,5,3,0,6,4,9,2]

// 4 elements
// var list = [1,2,4,3]

// 2 elements
// var list = [1,0]

// 71 elements 
// var list = [5500,558,559,557,53,12,18,14,28,29,52,500,58,894275935,57,53,53,100,98,998,75,77,73,23,27,23,17,0,31,88,89,87,83,97,93,92,48,34,47,43,43,300,38,39,37,33,1500,8,5,7,13,113,8,9,7,32897457233,2,8,4,7,444443,323,8,9,7,3,158,159,157,13,12]

// 5179 elements
// var list = [631, 355, 997, 224, 652, 605, 387, 142, 25, 421, 184, 726, 370, 842, 734, 571, 177, 957, 265, 925, 224, 374, 88, 640, 181, 45, 723, 347, 661, 384, 627, 22, 911, 801, 746, 813, 383, 617, 575, 530, 275, 249, 452, 228, 804, 986, 30, 536, 87, 802, 989, 67, 939, 18, 684, 784, 534, 885, 899, 626, 138, 218, 182, 42, 107, 616, 940, 354, 411, 984, 946, 677, 988, 767, 337, 662, 244, 296, 680, 528, 412, 603, 751, 584, 552, 584, 512, 83, 720, 996, 355, 971, 346, 887, 455, 413, 218, 126, 309, 726, 783, 694, 10, 843, 922, 771, 43, 378, 704, 730, 224, 269, 673, 477, 624, 236, 177, 830, 767, 934, 108, 182, 99, 490, 193, 896, 99, 44, 557, 772, 312, 179, 339, 210, 510, 906, 629, 102, 391, 55, 501, 432, 998, 812, 486, 894, 138, 390, 927, 917, 714, 618, 343, 936, 125, 731, 646, 833, 398, 750, 835, 322, 552, 979, 549, 330, 619, 361, 757, 414, 492, 695, 973, 328, 838, 739, 954, 32, 357, 663, 282, 230, 711, 625, 591, 660, 48, 349, 451, 241, 715, 856, 282, 731, 138, 837, 139, 588, 366, 807, 504, 490, 877, 353, 449, 964, 42, 973, 189, 667, 586, 675, 361, 620, 811, 19, 84, 975, 651, 231, 403, 122, 268, 258, 332, 152, 348, 122, 884, 94, 930, 399, 47, 342, 736, 795, 545, 686, 894, 55, 304, 46, 195, 720, 722, 878, 582, 71, 923, 800, 286, 544, 985, 716, 839, 433, 471, 561, 269, 749, 504, 647, 308, 139, 476, 362, 788, 780, 669, 134, 22, 560, 301, 939, 981, 287, 801, 896, 598, 884, 944, 549, 728, 577, 26, 447, 646, 521, 372, 937, 830, 849, 373, 593, 873, 934, 668, 207, 654, 72, 407, 667, 934, 811, 485, 757, 417, 972, 988, 864, 389, 455, 247, 784, 883, 914, 558, 599, 149, 900, 450, 206, 900, 763, 882, 285, 673, 664, 123, 407, 275, 717, 283, 896, 827, 390, 498, 695, 834, 610, 575, 326, 456, 714, 884, 721, 19, 675, 439, 438, 117, 815, 325, 246, 343, 376, 547, 562, 396, 398, 515, 658, 951, 722, 400, 832, 134, 60, 84, 164, 324, 302, 12, 540, 95, 147, 631, 859, 974, 571, 997, 554, 515, 331, 430, 492, 71, 888, 65, 436, 827, 395, 613, 819, 886, 931, 191, 259, 898, 593, 504, 613, 819, 532, 202, 454, 428, 966, 620, 695, 720, 347, 517, 557, 156, 562, 695, 426, 836, 731, 360, 454, 386, 776, 734, 430, 694, 945, 784, 706, 109, 390, 591, 459, 50, 229, 834, 16, 864, 78, 669, 500, 218, 572, 122, 671, 600, 56, 56, 153, 20, 435, 832, 617, 520, 864, 98, 908, 108, 517, 143, 559, 5, 767, 849, 917, 987, 505, 271, 101, 508, 586, 763, 83, 662, 517, 171, 939, 590, 441, 942, 656, 452, 840, 533, 554, 680, 367, 239, 579, 867, 407, 113, 444, 300, 401, 833, 404, 390, 360, 140, 260, 87, 429, 257, 298, 425, 119, 495, 706, 244, 785, 74, 394, 3, 221, 1, 189, 142, 268, 175, 139, 599, 901, 939, 221, 483, 376, 524, 265, 68, 436, 174, 26, 955, 431, 962, 762, 7, 680, 706, 645, 552, 218, 772, 228, 371, 891, 856, 402, 318, 609, 910, 909, 592, 333, 853, 442, 904, 33, 532, 716, 179, 337, 188, 322, 404, 549, 49, 553, 275, 242, 243, 154, 956, 936, 819, 728, 176, 360, 189, 1, 316, 700, 625, 543, 439, 287, 502, 762, 762, 576, 748, 646, 123, 504, 347, 92, 148, 198, 672, 432, 694, 257, 10, 532, 279, 946, 906, 393, 25, 671, 837, 971, 57, 450, 582, 687, 719, 650, 727, 374, 582, 116, 58, 980, 285, 595, 962, 186, 193, 342, 933, 391, 273, 152, 397, 375, 131, 435, 92, 615, 11, 573, 790, 235, 448, 569, 61, 496, 642, 221, 837, 971, 846, 506, 279, 747, 237, 957, 620, 600, 173, 90, 255, 859, 911, 700, 725, 230, 576, 811, 404, 988, 90, 321, 511, 61, 726, 557, 529, 830, 859, 789, 318, 452, 752, 110, 110, 270, 525, 973, 710, 312, 291, 850, 912, 639, 255, 89, 838, 585, 948, 61, 585, 285, 828, 191, 443, 393, 827, 677, 208, 318, 134, 671, 571, 170, 148, 476, 908, 552, 33, 54, 805, 451, 383, 790, 364, 532, 712, 871, 329, 650, 975, 76, 587, 414, 309, 264, 759, 995, 187, 781, 196, 992, 802, 424, 729, 498, 809, 357, 73, 591, 910, 194, 432, 749, 39, 946, 764, 559, 184, 498, 518, 994, 855, 962, 679, 404, 935, 479, 232, 396, 705, 559, 757, 995, 962, 535, 964, 116, 51, 304, 580, 531, 901, 541, 432, 543, 712, 17, 801, 143, 478, 257, 369, 662, 170, 279, 198, 195, 327, 880, 471, 404, 179, 969, 407, 844, 615, 377, 877, 785, 465, 814, 898, 429, 334, 597, 902, 702, 377, 735, 954, 543, 540, 311, 71, 182, 93, 463, 9, 915, 643, 1, 30, 208, 455, 127, 9, 727, 354, 780, 437, 437, 49, 50, 91, 594, 241, 841, 857, 964, 489, 220, 226, 537, 762, 348, 461, 639, 917, 162, 716, 578, 433, 884, 393, 179, 633, 624, 328, 803, 999, 981, 127, 232, 24, 607, 111, 407, 884, 548, 369, 208, 441, 956, 124, 471, 857, 43, 692, 979, 283, 134, 685, 909, 611, 900, 193, 754, 346, 419, 156, 819, 625, 739, 805, 67, 951, 498, 755, 742, 831, 157, 457, 618, 932, 835, 895, 583, 583, 855, 35, 885, 408, 36, 746, 155, 144, 606, 254, 324, 402, 406, 386, 610, 167, 188, 95, 323, 770, 234, 740, 693, 824, 828, 293, 309, 523, 325, 832, 810, 557, 263, 681, 234, 456, 385, 539, 992, 755, 980, 235, 529, 51, 757, 602, 857, 988, 929, 410, 0, 541, 208, 219, 326, 96, 748, 749, 543, 338, 832, 553, 958, 893, 357, 546, 347, 623, 797, 746, 126, 822, 25, 414, 731, 781, 367, 745, 892, 243, 130, 225, 350, 287, 927, 51, 593, 163, 838, 168, 502, 999, 355, 47, 214, 398, 334, 230, 936, 683, 962, 438, 940, 6, 610, 801, 233, 932, 763, 826, 573, 793, 329, 223, 312, 585, 830, 290, 403, 862, 615, 991, 204, 827, 676, 249, 476, 399, 599, 801, 105, 821, 841, 355, 430, 572, 701, 742, 758, 389, 429, 956, 573, 850, 276, 622, 588, 963, 86, 500, 522, 90, 905, 884, 439, 782, 148, 620, 261, 446, 844, 196, 304, 483, 338, 798, 987, 159, 237, 702, 375, 974, 972, 644, 860, 402, 632, 985, 559, 934, 720, 484, 639, 888, 199, 395, 992, 402, 659, 901, 995, 653, 108, 36, 618, 567, 962, 746, 663, 523, 260, 962, 540, 30, 696, 520, 59, 890, 330, 230, 114, 311, 228, 652, 66, 275, 282, 880, 444, 756, 603, 783, 114, 979, 849, 51, 466, 326, 630, 230, 580, 603, 600, 448, 35, 514, 408, 108, 460, 451, 551, 805, 701, 872, 52, 220, 460, 959, 790, 452, 333, 59, 741, 507, 200, 427, 169, 752, 368, 942, 17, 829, 627, 539, 651, 727, 94, 878, 14, 294, 180, 926, 68, 581, 637, 651, 865, 56, 817, 529, 694, 212, 543, 703, 956, 445, 85, 57, 629, 796, 691, 345, 947, 520, 954, 74, 207, 775, 914, 783, 296, 152, 848, 785, 271, 228, 321, 830, 822, 571, 572, 286, 699, 796, 442, 446, 466, 279, 675, 904, 909, 747, 261, 690, 132, 124, 191, 146, 585, 73, 822, 723, 926, 493, 655, 890, 539, 282, 976, 36, 326, 973, 365, 309, 121, 916, 135, 332, 897, 500, 615, 583, 698, 29, 528, 32, 827, 340, 847, 246, 581, 938, 48, 54, 21, 681, 599, 114, 796, 618, 70, 69, 136, 789, 92, 238, 244, 105, 858, 698, 734, 651, 516, 326, 662, 118, 148, 20, 964, 970, 124, 467, 657, 290, 755, 558, 428, 267, 754, 898, 728, 407, 938, 255, 533, 955, 268, 250, 928, 69, 299, 592, 203, 636, 798, 502, 651, 796, 233, 601, 112, 516, 838, 921, 498, 278, 653, 917, 510, 974, 197, 111, 297, 396, 421, 311, 694, 92, 402, 295, 306, 106, 594, 283, 155, 1, 284, 551, 871, 42, 905, 131, 834, 800, 918, 137, 505, 405, 174, 575, 606, 214, 520, 989, 490, 695, 411, 35, 293, 801, 347, 83, 511, 367, 739, 525, 805, 817, 189, 124, 821, 638, 16, 896, 515, 545, 606, 760, 855, 383, 85, 734, 332, 840, 372, 828, 177, 130, 880, 44, 687, 734, 437, 380, 980, 399, 440, 157, 326, 314, 895, 247, 311, 409, 708, 144, 871, 83, 462, 30, 753, 700, 215, 680, 557, 851, 559, 902, 420, 358, 489, 256, 929, 467, 254, 431, 703, 402, 182, 856, 584, 374, 222, 219, 522, 433, 741, 70, 847, 680, 137, 858, 200, 607, 543, 162, 6, 771, 765, 421, 57, 586, 174, 729, 534, 253, 917, 758, 887, 69, 184, 737, 697, 777, 502, 425, 611, 856, 671, 524, 299, 704, 382, 568, 888, 843, 899, 939, 815, 1, 3, 87, 261, 23, 424, 341, 541, 926, 298, 338, 859, 340, 138, 508, 857, 384, 696, 628, 450, 474, 950, 83, 280, 447, 588, 878, 469, 437, 746, 468, 861, 467, 498, 487, 229, 86, 67, 888, 233, 862, 712, 873, 938, 140, 394, 981, 645, 896, 482, 14, 623, 231, 527, 725, 607, 588, 433, 244, 429, 10, 609, 958, 95, 36, 886, 247, 9, 815, 140, 880, 95, 353, 593, 585, 668, 648, 433, 140, 752, 242, 650, 857, 84, 972, 31, 835, 836, 50, 546, 943, 321, 806, 601, 790, 799, 50, 283, 653, 490, 973, 748, 568, 299, 256, 887, 447, 816, 98, 860, 28, 899, 900, 524, 120, 178, 706, 831, 35, 758, 957, 343, 638, 343, 216, 786, 723, 279, 582, 421, 92, 24, 491, 278, 340, 287, 171, 399, 698, 204, 666, 443, 433, 175, 193, 616, 269, 560, 945, 714, 679, 959, 775, 608, 948, 60, 269, 987, 772, 475, 681, 417, 380, 213, 383, 30, 472, 333, 976, 555, 846, 408, 462, 826, 991, 524, 925, 739, 567, 969, 824, 960, 646, 380, 477, 912, 15, 157, 472, 543, 60, 658, 890, 110, 438, 280, 985, 609, 254, 133, 545, 828, 837, 833, 204, 544, 875, 121, 856, 900, 218, 77, 474, 835, 469, 414, 503, 125, 132, 870, 603, 265, 865, 58, 458, 722, 339, 401, 527, 894, 778, 69, 279, 379, 865, 420, 240, 598, 479, 899, 935, 818, 709, 743, 900, 65, 336, 4, 828, 507, 366, 227, 535, 289, 68, 85, 68, 410, 123, 443, 899, 354, 120, 569, 875, 349, 42, 142, 77, 741, 457, 668, 699, 571, 629, 878, 662, 875, 468, 141, 68, 714, 308, 671, 652, 531, 715, 505, 488, 498, 936, 389, 117, 240, 685, 839, 970, 215, 760, 584, 403, 510, 496, 651, 744, 302, 90, 826, 390, 775, 179, 109, 905, 876, 1000, 864, 37, 545, 998, 511, 874, 70, 988, 923, 564, 431, 338, 721, 14, 374, 923, 546, 474, 497, 309, 951, 982, 514, 993, 456, 426, 213, 193, 833, 727, 530, 829, 512, 552, 213, 588, 143, 52, 683, 609, 220, 406, 630, 555, 128, 169, 1, 418, 488, 160, 667, 18, 120, 952, 976, 31, 494, 863, 243, 834, 814, 629, 2, 380, 904, 680, 379, 632, 243, 571, 982, 850, 283, 682, 358, 987, 84, 250, 811, 84, 531, 801, 739, 142, 438, 350, 478, 587, 146, 905, 640, 163, 566, 932, 783, 686, 466, 260, 569, 249, 319, 911, 885, 795, 926, 179, 518, 627, 913, 664, 389, 740, 818, 600, 85, 922, 54, 527, 119, 380, 813, 244, 884, 713, 378, 249, 253, 767, 50, 685, 620, 747, 977, 384, 260, 877, 806, 461, 91, 564, 187, 532, 355, 315, 727, 516, 791, 204, 678, 52, 801, 679, 946, 92, 908, 510, 615, 316, 77, 851, 145, 370, 622, 998, 517, 991, 227, 398, 697, 65, 748, 420, 811, 380, 319, 986, 718, 413, 99, 735, 637, 74, 121, 982, 497, 22, 54, 141, 893, 466, 561, 494, 68, 898, 289, 269, 594, 476, 368, 656, 938, 620, 283, 205, 439, 27, 876, 610, 204, 520, 54, 862, 443, 548, 567, 680, 371, 78, 456, 48, 738, 38, 954, 742, 937, 513, 241, 260, 759, 993, 357, 753, 110, 597, 431, 731, 261, 95, 451, 640, 132, 453, 652, 827, 308, 402, 884, 701, 242, 760, 291, 277, 6, 375, 437, 304, 291, 243, 937, 860, 397, 479, 565, 490, 270, 990, 184, 862, 33, 332, 749, 644, 169, 952, 543, 251, 579, 915, 896, 483, 443, 312, 55, 754, 132, 356, 396, 886, 21, 844, 288, 250, 488, 729, 203, 216, 976, 593, 304, 968, 896, 190, 2, 712, 868, 118, 39, 598, 604, 516, 8, 689, 946, 874, 113, 355, 242, 560, 613, 301, 798, 796, 781, 351, 54, 709, 993, 162, 114, 913, 482, 852, 810, 187, 247, 54, 609, 777, 511, 28, 990, 501, 332, 174, 626, 575, 751, 154, 357, 144, 851, 338, 275, 6, 802, 497, 538, 871, 723, 668, 179, 550, 960, 596, 809, 985, 886, 214, 35, 451, 14, 474, 951, 249, 386, 431, 831, 825, 453, 381, 926, 741, 738, 947, 510, 792, 452, 849, 390, 738, 976, 523, 430, 207, 323, 111, 375, 330, 342, 817, 532, 521, 774, 120, 625, 347, 335, 575, 864, 199, 672, 902, 199, 298, 497, 890, 501, 277, 534, 574, 413, 15, 703, 507, 381, 65, 359, 234, 204, 814, 393, 54, 375, 775, 165, 912, 319, 330, 204, 767, 70, 950, 158, 286, 687, 141, 512, 721, 929, 732, 750, 407, 239, 521, 219, 842, 663, 816, 794, 469, 310, 688, 987, 770, 830, 706, 595, 753, 497, 865, 68, 969, 99, 547, 403, 107, 724, 614, 783, 567, 811, 577, 944, 871, 508, 789, 473, 829, 322, 976, 278, 73, 751, 831, 922, 327, 804, 538, 463, 821, 952, 76, 709, 235, 399, 268, 833, 995, 650, 704, 932, 688, 568, 381, 635, 363, 408, 369, 468, 503, 911, 206, 339, 574, 487, 262, 580, 878, 61, 441, 84, 563, 539, 768, 233, 587, 459, 861, 661, 354, 347, 254, 953, 298, 158, 361, 742, 706, 701, 6, 374, 901, 318, 597, 298, 125, 388, 818, 981, 862, 84, 338, 236, 318, 984, 548, 749, 842, 167, 903, 105, 745, 729, 717, 133, 446, 509, 530, 860, 678, 806, 531, 956, 67, 542, 282, 481, 685, 208, 608, 326, 881, 133, 102, 959, 153, 153, 156, 90, 454, 669, 831, 790, 713, 473, 709, 958, 506, 305, 790, 236, 234, 465, 619, 615, 123, 124, 284, 736, 411, 829, 935, 399, 52, 571, 748, 320, 493, 222, 939, 482, 540, 221, 96, 60, 820, 771, 196, 895, 684, 657, 990, 34, 424, 490, 584, 83, 660, 52, 557, 712, 488, 618, 214, 646, 381, 104, 378, 263, 241, 623, 523, 413, 218, 859, 861, 284, 615, 779, 955, 920, 385, 163, 797, 114, 159, 356, 848, 583, 586, 926, 575, 10, 809, 609, 480, 268, 258, 481, 227, 49, 169, 258, 198, 606, 824, 811, 802, 708, 859, 781, 204, 993, 94, 651, 215, 244, 340, 198, 507, 951, 395, 584, 607, 715, 402, 859, 920, 751, 286, 797, 143, 505, 611, 704, 383, 729, 887, 56, 138, 863, 422, 411, 959, 750, 981, 234, 96, 385, 500, 570, 977, 493, 401, 995, 261, 665, 964, 671, 299, 531, 1, 884, 404, 301, 951, 461, 288, 85, 582, 153, 73, 581, 287, 362, 725, 858, 348, 962, 954, 206, 768, 616, 919, 603, 702, 744, 385, 252, 37, 472, 645, 279, 518, 246, 298, 650, 891, 861, 210, 399, 888, 257, 967, 619, 165, 826, 656, 546, 251, 40, 233, 361, 633, 986, 207, 757, 886, 472, 159, 811, 477, 116, 876, 635, 97, 908, 35, 40, 989, 686, 377, 504, 763, 49, 726, 701, 459, 582, 339, 171, 399, 920, 226, 361, 325, 84, 513, 833, 905, 724, 383, 298, 692, 880, 925, 81, 483, 128, 253, 884, 196, 121, 544, 315, 382, 792, 839, 680, 417, 643, 214, 617, 675, 601, 346, 364, 171, 795, 493, 355, 775, 237, 845, 817, 846, 370, 383, 861, 464, 571, 695, 961, 546, 637, 571, 927, 864, 170, 179, 244, 752, 199, 983, 710, 175, 858, 909, 962, 571, 563, 177, 514, 548, 165, 494, 535, 199, 623, 26, 319, 533, 327, 602, 362, 135, 914, 641, 659, 675, 745, 842, 517, 152, 381, 821, 171, 330, 966, 806, 222, 1000, 64, 425, 404, 400, 112, 424, 614, 988, 220, 354, 266, 291, 188, 23, 449, 244, 869, 529, 914, 974, 585, 119, 927, 594, 884, 424, 607, 71, 925, 642, 104, 700, 396, 85, 214, 249, 227, 703, 754, 547, 553, 631, 985, 634, 600, 909, 571, 335, 957, 440, 602, 720, 679, 213, 82, 274, 868, 559, 465, 430, 774, 654, 658, 161, 432, 505, 375, 480, 342, 777, 384, 712, 481, 729, 938, 517, 903, 218, 873, 83, 465, 22, 808, 179, 165, 182, 691, 214, 298, 768, 501, 909, 58, 437, 572, 565, 824, 126, 300, 2, 951, 766, 751, 139, 349, 151, 497, 809, 633, 688, 640, 729, 860, 627, 181, 573, 164, 906, 77, 339, 581, 475, 805, 531, 227, 709, 149, 658, 634, 229, 182, 166, 150, 203, 955, 16, 958, 26, 971, 298, 525, 862, 896, 189, 661, 941, 976, 108, 179, 747, 49, 71, 489, 850, 997, 4, 543, 861, 909, 845, 879, 746, 117, 509, 169, 831, 928, 169, 884, 388, 383, 271, 868, 742, 448, 710, 944, 174, 245, 641, 809, 853, 398, 115, 80, 360, 829, 215, 791, 655, 26, 786, 923, 492, 834, 131, 760, 926, 833, 259, 213, 522, 397, 479, 994, 604, 945, 490, 438, 773, 744, 443, 53, 88, 798, 656, 32, 557, 720, 110, 217, 811, 139, 882, 924, 13, 377, 168, 540, 102, 39, 933, 972, 361, 644, 68, 208, 40, 469, 150, 991, 427, 955, 724, 581, 540, 705, 5, 783, 927, 8, 825, 767, 997, 228, 920, 642, 105, 268, 764, 806, 104, 470, 219, 923, 320, 858, 260, 878, 188, 759, 32, 642, 567, 376, 213, 792, 145, 489, 13, 187, 485, 838, 141, 732, 691, 34, 489, 971, 112, 743, 639, 594, 499, 568, 427, 76, 291, 561, 633, 931, 978, 94, 662, 603, 474, 356, 476, 671, 960, 89, 798, 591, 912, 101, 293, 52, 504, 768, 283, 225, 331, 453, 737, 510, 383, 905, 965, 628, 132, 618, 383, 991, 287, 706, 535, 193, 689, 50, 184, 46, 885, 840, 118, 410, 120, 572, 949, 256, 990, 350, 209, 666, 973, 623, 64, 374, 166, 231, 52, 902, 793, 373, 832, 754, 622, 394, 359, 89, 342, 549, 461, 645, 514, 814, 97, 464, 590, 187, 611, 52, 576, 842, 500, 439, 149, 28, 757, 796, 294, 115, 375, 829, 842, 665, 960, 943, 113, 648, 481, 67, 898, 497, 771, 60, 262, 651, 134, 639, 385, 766, 653, 381, 300, 340, 919, 456, 442, 454, 945, 219, 882, 20, 342, 766, 343, 619, 453, 10, 599, 602, 649, 343, 493, 702, 888, 55, 98, 650, 764, 988, 125, 364, 676, 376, 863, 292, 133, 673, 203, 869, 751, 419, 0, 149, 274, 872, 601, 321, 284, 435, 904, 925, 505, 628, 719, 24, 575, 47, 423, 468, 23, 65, 924, 534, 367, 364, 151, 150, 351, 336, 784, 487, 465, 131, 886, 675, 835, 656, 984, 980, 250, 625, 728, 498, 850, 191, 124, 3, 153, 534, 511, 385, 311, 4, 815, 638, 448, 244, 803, 824, 852, 467, 971, 841, 79, 238, 818, 406, 466, 952, 965, 765, 575, 916, 495, 166, 326, 296, 558, 67, 69, 167, 947, 811, 710, 970, 998, 987, 150, 958, 530, 74, 312, 895, 835, 2, 640, 803, 245, 64, 263, 103, 484, 419, 381, 887, 421, 284, 48, 219, 239, 29, 702, 8, 611, 408, 249, 652, 320, 104, 536, 165, 883, 666, 848, 763, 807, 633, 710, 689, 321, 532, 873, 55, 500, 433, 904, 630, 983, 585, 841, 469, 545, 179, 634, 963, 534, 480, 794, 93, 881, 4, 512, 678, 566, 478, 321, 602, 913, 683, 947, 99, 511, 110, 545, 689, 147, 778, 399, 898, 307, 61, 219, 83, 950, 16, 115, 12, 216, 11, 642, 517, 246, 194, 91, 368, 8, 603, 479, 308, 744, 839, 262, 514, 447, 341, 839, 982, 626, 181, 123, 580, 329, 268, 550, 181, 678, 56, 34, 287, 77, 901, 847, 396, 169, 430, 416, 729, 406, 952, 912, 951, 346, 290, 887, 210, 131, 521, 905, 403, 216, 79, 933, 603, 377, 665, 792, 333, 693, 204, 959, 712, 167, 443, 633, 930, 529, 626, 681, 923, 153, 406, 312, 694, 891, 491, 806, 326, 550, 389, 897, 676, 828, 110, 279, 768, 216, 34, 437, 937, 262, 570, 360, 27, 500, 827, 259, 46, 246, 661, 329, 659, 13, 718, 391, 34, 406, 716, 921, 984, 983, 896, 866, 801, 555, 419, 127, 655, 864, 275, 840, 71, 379, 268, 153, 631, 316, 959, 499, 739, 13, 605, 576, 807, 655, 878, 902, 152, 193, 791, 61, 390, 300, 734, 104, 793, 783, 532, 253, 71, 626, 25, 62, 130, 451, 672, 856, 498, 49, 314, 642, 786, 289, 498, 818, 595, 536, 331, 412, 794, 343, 463, 368, 680, 568, 652, 491, 398, 477, 67, 411, 969, 781, 729, 766, 757, 843, 770, 979, 111, 396, 492, 258, 37, 974, 726, 148, 148, 705, 381, 76, 411, 143, 799, 930, 5, 650, 679, 254, 843, 294, 27, 93, 798, 711, 783, 624, 825, 35, 405, 250, 481, 881, 281, 599, 26, 155, 834, 195, 830, 338, 671, 52, 734, 499, 943, 290, 377, 114, 965, 433, 85, 717, 507, 328, 754, 836, 254, 534, 435, 158, 600, 937, 108, 900, 550, 427, 152, 248, 447, 533, 355, 773, 882, 734, 406, 604, 641, 127, 496, 310, 579, 944, 427, 33, 929, 925, 358, 260, 787, 512, 563, 685, 92, 873, 943, 97, 846, 909, 11, 524, 650, 385, 649, 763, 576, 632, 278, 840, 427, 632, 833, 270, 401, 554, 444, 90, 744, 33, 430, 37, 976, 522, 910, 383, 884, 255, 909, 895, 399, 625, 568, 895, 214, 4, 881, 235, 245, 641, 305, 826, 884, 945, 391, 801, 157, 625, 699, 86, 531, 889, 264, 235, 840, 496, 152, 231, 658, 563, 292, 622, 716, 281, 412, 362, 781, 135, 902, 290, 500, 784, 677, 150, 697, 129, 946, 886, 515, 679, 977, 125, 752, 827, 781, 191, 429, 14, 325, 135, 451, 572, 792, 420, 533, 926, 899, 545, 901, 52, 809, 335, 229, 822, 348, 165, 28, 955, 680, 861, 939, 680, 917, 257, 886, 920, 300, 73, 767, 85, 729, 448, 651, 170, 531, 634, 14, 470, 886, 114, 443, 660, 295, 950, 694, 207, 555, 879, 558, 752, 895, 842, 131, 189, 154, 29, 9, 596, 609, 919, 734, 301, 496, 258, 733, 117, 746, 810, 745, 337, 584, 469, 87, 829, 686, 267, 969, 184, 300, 411, 236, 195, 705, 181, 522, 296, 463, 925, 216, 1, 907, 680, 515, 522, 103, 997, 359, 625, 393, 8, 545, 509, 247, 45, 842, 48, 316, 783, 972, 586, 778, 728, 651, 665, 939, 535, 398, 670, 441, 133, 439, 548, 395, 398, 751, 522, 490, 89, 251, 448, 638, 709, 993, 932, 92, 954, 163, 970, 597, 240, 70, 300, 814, 77, 354, 132, 158, 62, 702, 86, 617, 174, 651, 499, 285, 831, 818, 938, 0, 640, 7, 106, 107, 367, 240, 346, 250, 387, 421, 640, 788, 270, 844, 740, 826, 182, 65, 610, 702, 112, 96, 598, 812, 815, 89, 731, 904, 452, 71, 241, 732, 40, 425, 540, 954, 209, 116, 646, 108, 983, 248, 606, 817, 830, 489, 761, 915, 901, 214, 547, 785, 194, 747, 476, 583, 261, 85, 298, 917, 471, 269, 763, 772, 21, 880, 798, 324, 669, 296, 930, 282, 169, 745, 477, 653, 967, 313, 76, 791, 365, 585, 183, 77, 154, 827, 301, 384, 651, 817, 766, 374, 190, 647, 4, 283, 639, 592, 325, 989, 123, 736, 157, 435, 832, 360, 76, 557, 274, 132, 700, 486, 183, 101, 202, 135, 324, 951, 532, 248, 437, 669, 548, 609, 863, 381, 749, 157, 58, 340, 817, 378, 973, 605, 338, 928, 898, 851, 257, 285, 780, 701, 493, 968, 476, 995, 491, 503, 769, 388, 453, 133, 759, 565, 649, 798, 220, 858, 905, 292, 726, 339, 273, 170, 664, 536, 829, 267, 176, 431, 476, 785, 131, 51, 628, 29, 136, 695, 516, 543, 808, 794, 502, 277, 120, 887, 970, 943, 638, 91, 75, 182, 32, 725, 144, 636, 790, 566, 377, 822, 305, 319, 785, 504, 261, 732, 163, 921, 222, 84, 74, 770, 818, 740, 758, 961, 466, 787, 423, 944, 1, 981, 570, 346, 558, 300, 159, 665, 684, 792, 349, 250, 345, 329, 927, 756, 288, 606, 766, 846, 902, 596, 69, 218, 869, 414, 661, 783, 248, 554, 230, 7, 767, 22, 393, 253, 204, 662, 915, 7, 746, 800, 908, 975, 120, 519, 822, 637, 954, 947, 967, 67, 438, 321, 134, 135, 806, 525, 944, 988, 410, 371, 227, 446, 266, 459, 433, 260, 134, 419, 507, 324, 685, 443, 436, 793, 816, 752, 789, 501, 555, 631, 98, 246, 616, 305, 767, 267, 40, 297, 556, 969, 689, 718, 559, 533, 876, 393, 458, 208, 757, 547, 357, 701, 109, 7, 597, 659, 580, 910, 636, 526, 260, 51, 732, 164, 280, 259, 547, 541, 788, 870, 788, 969, 180, 931, 45, 241, 9, 672, 905, 572, 155, 502, 568, 188, 324, 716, 553, 142, 380, 397, 577, 19, 578, 932, 107, 732, 971, 609, 720, 303, 459, 48, 385, 362, 288, 817, 451, 807, 790, 283, 68, 55, 638, 424, 906, 417, 154, 540, 937, 661, 395, 259, 848, 945, 377, 67, 182, 576, 186, 291, 462, 347, 318, 460, 236, 28, 658, 159, 803, 409, 327, 746, 746, 174, 118, 174, 627, 842, 510, 166, 714, 907, 219, 871, 212, 837, 859, 523, 477, 890, 65, 509, 621, 734, 230, 22, 139, 770, 970, 387, 993, 326, 137, 385, 563, 634, 542, 315, 159, 153, 137, 710, 465, 113, 701, 180, 804, 514, 548, 208, 785, 526, 571, 422, 721, 73, 595, 862, 449, 653, 303, 607, 279, 800, 796, 954, 444, 457, 600, 843, 31, 187, 944, 948, 453, 811, 929, 673, 372, 406, 439, 679, 465, 953, 355, 339, 896, 545, 749, 125, 453, 75, 663, 704, 919, 660, 690, 854, 468, 458, 806, 825, 190, 26, 57, 143, 171, 626, 30, 472, 678, 115, 236, 289, 173, 324, 801, 300, 776, 553, 555, 731, 774, 901, 138, 794, 189, 29, 127, 134, 128, 935, 273, 943, 638, 873, 367, 236, 187, 546, 255, 306, 16, 587, 963, 850, 8, 634, 359, 114, 541, 416, 517, 886, 149, 435, 59, 381, 722, 95, 667, 296, 599, 152, 436, 13, 229, 264, 511, 215, 346, 748, 414, 56, 390, 474, 825, 304, 822, 566, 54, 260, 589, 480, 199, 239, 780, 617, 144, 716, 402, 462, 707, 401, 14, 75, 591, 446, 927, 95, 375, 546, 112, 904, 633, 905, 631, 14, 316, 112, 629, 61, 674, 477, 306, 516, 707, 814, 316, 311, 345, 666, 861, 762, 876, 871, 173, 850, 960, 770, 875, 67, 647, 324, 640, 880, 374, 767, 168, 520, 627, 714, 306, 264, 916, 615, 93, 628, 192, 777, 865, 334, 135, 765, 319, 252, 200, 69, 552, 404, 750, 487, 385, 61, 214, 544, 411, 901, 56, 444, 538, 134, 541, 857, 198, 156, 61, 661, 19, 291, 974, 765, 244, 682, 138, 630, 857, 900, 348, 486, 680, 704, 461, 364, 280, 76, 445, 166, 399, 921, 511, 914, 92, 993, 96, 313, 785, 602, 466, 298, 133, 295, 167, 317, 110, 832, 972, 218, 706, 39, 616, 669, 37, 3, 142, 862, 276, 532, 522, 568, 333, 413, 414, 984, 58, 397, 791, 594, 310, 902, 93, 319, 887, 657, 685, 474, 141, 951, 883, 437, 835, 325, 368, 795, 99, 952, 1, 295, 48, 443, 790, 914, 533, 804, 563, 751, 9, 477, 250, 308, 967, 209, 520, 226, 567, 998, 132, 955, 124, 186, 647, 128, 81, 659, 27, 985, 539, 374, 707, 947, 382, 693, 602, 775, 592, 376, 851, 226, 797, 997, 281, 710, 665, 415, 498, 949, 953, 733, 385, 40, 583, 565, 355, 880, 625, 624, 296, 75, 294, 235, 346, 848, 160, 158, 509, 603, 161, 635, 844, 782, 265, 315, 183, 447, 327, 280, 932, 400, 379, 593, 69, 205, 724, 575, 200, 843, 424, 545, 528, 185, 82, 464, 31, 435, 558, 639, 34, 710, 169, 593, 608, 772, 56, 855, 384, 400, 325, 555, 295, 366, 349, 630, 664, 992, 944, 350, 193, 920, 289, 551, 919, 90, 258, 427, 578, 900, 218, 967, 434, 785, 525, 331, 432, 718, 916, 890, 135, 120, 893, 653, 40, 505, 894, 386, 292, 234, 201, 380, 595, 268, 622, 805, 104, 729, 649, 475, 933, 96, 599, 234, 32, 580, 842, 557, 840, 205, 621, 174, 290, 19, 701, 952, 749, 757, 542, 282, 245, 286, 963, 231, 537, 205, 434, 142, 376, 794, 813, 904, 540, 818, 708, 43, 146, 233, 247, 170, 235, 275, 952, 347, 297, 404, 302, 757, 360, 125, 617, 356, 363, 68, 867, 458, 78, 905, 282, 614, 662, 200, 960, 665, 541, 869, 557, 21, 483, 808, 736, 572, 9, 718, 449, 660, 753, 805, 29, 780, 567, 76, 252, 133, 564, 541, 69, 988, 251, 315, 301, 42, 528, 256, 409, 948, 919, 121, 592, 360, 719, 524, 261, 493, 856, 724, 199, 157, 370, 862, 685, 634, 141, 79, 876, 420, 488, 460, 516, 272, 232, 900, 909, 604, 365, 599, 668, 895, 87, 539, 428, 617, 559, 226, 105, 10, 59, 323, 779, 335, 620, 993, 648, 540, 232, 740, 889, 860, 597, 655, 915, 433, 290, 632, 295, 622, 48, 995, 207, 607, 348, 718, 28, 67, 927, 88, 332, 526, 247, 543, 781, 522, 932, 147, 417, 280, 598, 36, 64, 323, 98, 170, 371, 40, 709, 641, 174, 62, 407, 463, 203, 870, 598, 23, 899, 453, 58, 106, 998, 866, 615, 27, 323, 464, 99, 571, 326, 450, 578, 75, 57, 301, 522, 562, 242, 913, 826, 445, 982, 578, 234, 811, 451, 250, 955, 143, 513, 972, 648, 615, 470, 578, 911, 376, 229, 424, 274, 445, 628, 535, 385, 873, 300, 400, 518, 62, 231, 118, 99, 890, 33, 839, 507, 114, 490, 599, 90, 978, 653, 461, 864, 263, 824, 329, 941, 244, 957, 511, 565, 994, 771, 314, 58, 44, 813, 412, 384, 523, 892, 406, 604, 95, 336, 145, 245, 379, 270, 216, 634, 800, 209, 896, 746, 536, 970, 565, 218, 858, 862, 313, 327, 840, 493, 52, 778, 427, 280, 334, 367, 795, 39, 727, 873, 286, 657, 232, 622, 75, 967, 610, 384, 31, 858]

quickSort(list,0,list.length-1)
print(list)
