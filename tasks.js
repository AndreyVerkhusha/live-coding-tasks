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
//console.log(_map((x) => x + 1, arr))
//console.log(arr._map((x) => x + 2)) 


  
