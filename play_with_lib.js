import mergeSort from "./lib/algorithms/mergeSort.js";
import quickSort from "./lib/algorithms/quickSort.js";
import binarySearch from "./lib/algorithms/binarySearch.js";

export default (() => {
    
const A = [1,5,7,8,10,2,3];

Object.assign(this || globalThis || window, 
{
    mergeSort: mergeSort,
    quickSort: quickSort,
    binarySearch: (array, target) => `sortedArray=[${quickSort(array)}], index=${binarySearch(quickSort(array), target)}`,
    arr: A
});


console.log('mergeSort:', mergeSort(A));
console.log('quickSort', quickSort(A));
console.log('binarySearch', ((searchVal) => {const sortedArray = quickSort(A); return binarySearch(sortedArray, searchVal);})(10));

})();