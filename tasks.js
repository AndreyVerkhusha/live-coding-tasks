/* написать собственную реализацию метода у массивов .map */
const _map = (func, arr) => {
  if(!arr.length) return [];
  
  return arr.map((elem, indx) =>  func(elem, indx, arr))
}
//console.log(_map((x) => x + 1, [1,2,3]))


  
