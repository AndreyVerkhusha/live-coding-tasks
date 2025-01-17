/* написать собственную реализацию метода у массивов .map */
const arr = [1,2,3];

const _map = (func, arr) => {
  const result = [];
  
  if(!arr.length) return result;
  
  arr.forEach((elem, indx) =>  result.push(func(elem, indx, arr)))
  
  return result;
}

Array.prototype._map = function(func) {
  const context = this;
  const result = [];
  
  if(!arr.length) return result;
  
  context.forEach((elem, indx) => result.push(func(elem, indx, context)))
  
  return result
};
// console.log(_map((x) => x + 1, arr))
// console.log(arr._map((x) => x + 2)) 

/* 
Результат должен быть такой, где каждая строка представляет собой либо отдельное число (если диапазон состоит из одного элемента), либо диапазон чисел в формате "start-end".
Например, для входного массива [1, 4, 5, 2, 3, 9, 8, 11, 0] результатом будет массив ['0-5', '8-9', '11'].
*/
const range = (arr) => {
  const  newArr = [... new Set(arr)].sort((a,b ) => a - b);
  const result  = [];
  
  let start = newArr[0];
  let end = newArr[0]
  
  for(let i = 1; i <= newArr.length; i++) {
    if(newArr[i] === end + 1) {
      end = newArr[i]
    } else {
      const newElem = start === end ? start.toString() : `${start}-${end}`;
      result.push(newElem)
      start = newArr[i]
      end = newArr[i]
    }
  }
  
  return result
};
// console.log(range([1,4,5,2,3,9,8,11,0])) // '0-5, 8-9, 11'
// console.log(range([1,4,3,2])) // '1-4'

  
