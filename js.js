//Q1
// let str = "hello";
// function reverseString(str){
//     let arr = Array.from(str);

//    let  revArr = arr.reverse();
//    let final= revArr.toString()
//    console.log(final);

// }

// reverseString(str);

//Q2

// function findPairsWithSum(arr, target) {
//     const pairs = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 pairs.push([arr[i], arr[j]]);
//             }
//         }
//     }

//     return pairs;
// }

// let arr2 = [1, 2, 3, 4, 5];
// let tar = 6;
// console.log(findPairsWithSum(arr2,tar));

//Q3

// function binarySearch(array, target) {
//     let leftIndex = 0;
//     let rightIndex = array.length - 1;

//     while (leftIndex <= rightIndex) {
//         let midIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (target === array[midIndex]) {
//             return midIndex;
//         } else if (target < array[midIndex]) {
//             rightIndex = midIndex - 1;

//         } else {
//             leftIndex = midIndex + 1;
//         }

//     }
//     return -1;
// }

// console.log(binarySearch([1, 3, 5, 7, 9], 5));

//Q4

// function bubbleSort(arr) {
//     const n = arr.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {

//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr;
// }

// const arr4 = [5, 3, 8, 4, 2];

// console.log(bubbleSort(arr4));

//Q5
// function  FirstRepeated(arr){
//     const seen = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (seen.includes(arr[i])) {
//             return arr[i];
//         }
//         seen.push(arr[i]);
//     }

//     return null;
// }

// let arr5 = [1, 2, 3, 4, 2, 5]

// console.log(FirstRepeated(arr5));

//Q6

// function removeDuplicates(arr) {
//     const unique = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!unique.includes(arr[i])) {
//             unique.push(arr[i]);
//         }
//     }

//     return unique;
// }

// let arr6 = [1, 2, 2, 3, 4, 4, 5];

// console.log(removeDuplicates(arr6));

//Q7

// function intersectArrays(arr1, arr2) {
//     const intersection = [];
//     let i = 0;
//     let j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             i++;
//         } else if (arr1[i] > arr2[j]) {
//             j++;
//         } else {
//             intersection.push(arr1[i]);
//             i++;
//             j++;
//         }
//     }

//     return intersection;
// }

// let array1 = [1, 3, 4, 5];
// let array2 = [2, 3, 5, 6];

// console.log(intersectArrays(array1,array2));

//Q8

// function isRotation(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   for (let i = 0; i < str1.length; i++) {
//     let rotation = str1.slice(i) + str1.slice(0, i);

//     if (rotation == str2) {
//       return true;
//     }
//   }

//   return false;
// }

// let str1 = "abcde";
// let str2 = "cdeab";

// console.log(isRotation(str1, str2));

//Q9

// function longestCommonPrefix(arr) {
//   if (arr.length === 0) return "";

//   let start = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     let element = arr[i];

//     let j = 0;
//     while (
//       j < start.length &&
//       j < element.length &&
//       start[j] === element[j]
//     ) {
//       j++;
//     }

//     start = start.slice(0, j);

//     if (start === "") return "";
//   }

//   return start;
// }

// const input = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(input));

//Q19


// function mergeSort(Arr) {
//     if (Arr.length < 2) {
//         return Arr;
//     }

//     const mid = Math.floor(Arr.length / 2);
//     const leftArr = Arr.slice(0, mid);
//     const rightArr = Arr.slice(mid);

//     return merge(mergeSort(leftArr), mergeSort(rightArr));

// }

// function merge(leftArr, rightArr) {
//     const sortedArray = [];

//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortedArray.push(leftArr.shift());
//         } else {
//             sortedArray.push(rightArr.shift());
//         }

//     }
//     return [...sortedArray, ...leftArr, ...rightArr];
// }


// const array = [38, 27, 43, 3, 9];
// console.log(mergeSort(array));


//Q13

// function lengthOfLongestSubstring(s) {
//     let charSet = new Set(); 
//     let maxLength = 0; 
//     let start = 0; 

//     for (let end = 0; end < s.length; end++) {
//         while (charSet.has(s[end])) {
//             charSet.delete(s[start]); 
//             start++; 
//         }
//         charSet.add(s[end]); 
//         maxLength = Math.max(maxLength, end - start + 1); 
//     }

//     return maxLength; 
// }

// const str = "abcabcbb";
// console.log(lengthOfLongestSubstring(str)); 


//Q12

// const input = [3, 7, 1, 2, 8, 4, 5]
// let n = input.length + 1;
// let expSum = 0;
// let actualsum = 0;
// for (let i = 1 ; i <= n ; i++ ) {
//     expSum+=i;
// } 

// for (let j in input) {
//  actualsum += input[j]
// }

// console.log(expSum - actualsum);


//Q9

// const findMajorityElement = (arr) => {
//   let counts = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (counts[num]) {
//       counts[num] += 1;
//     } else {
//       counts[num] = 1;
//     }

//     if (counts[num] > Math.floor(arr.length / 2)) {
//       return num;
//     }
//   }
// };

// let arr9 = [3, 3, 4, 2, 3, 3];

// console.log(findMajorityElement(arr9));



