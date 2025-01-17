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
Нужно написать диапазон цифр в массиве, с учётом разрыва. 
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

  
/*
Написать функцию asyncLimit, которая принимает два аргумента: асинхронную функцию func и число delay, представляющее максимальное время выполнения функции в миллисекундах.
В delay указывается за сколько должен выполниться промис.
Если выполняется дольше чем delay - выдать ошибку "Превышен лимит времени исполнения". Если нет - вернуть вычисляемое значение
Пример:
// asyncLimit(fn, 50)(5) // rejected: Превышен лимит времени исполнения
// asyncLimit(fn, 150)(5) // resolved: 25
// asyncLimit(fn2, 100)(1, 2) // rejected: Превышен лимит времени исполнения
// asyncLimit(fn2, 150)(1, 2) // resolved: 3
*/
const fn = async (n) => {
  await new Promise(res => setTimeout(res, 100))
  
  return n * n
}

const fn2 = async (a, b) => {
  await new Promise(res => setTimeout(res, 120))
  
  return a + b;
}

const asyncLimit = (func, delay) => {
  
  return async (...args) => {
    const funcPromise = func(...args);
    
    const timeoutPromise = new Promise((_, reject)=>  {
      setTimeout(() => reject("Превышен лимит"), delay)
    })
    
    try {
      const result =  await Promise.race([funcPromise, timeoutPromise]);
      return `resolved: ${result}`
    } catch (e) {
      return `rejected: ${e}`
    }

  }
  
}

(async () => {
  const result1 = await asyncLimit(fn, 50)(5);
  //console.log(result1);  // rejected: Превышен лимит времени исполнения

  const result2 = await asyncLimit(fn, 150)(5);
  //console.log(result2); // resolved: 25

  const result3 = await asyncLimit(fn2, 100)(1, 2);
  //console.log(result3); // rejected: Превышен лимит времени исполнения

  const result4 = await asyncLimit(fn2, 150)(1, 2);
  //console.log( result4); // resolved: 3
})();

/* Реализовать стэк с условием реализации сложности за константное время O(1) */
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
  
    pop() {
        const pop = this.stack.pop();
      
        if(pop === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
    }
    
    push(value) {
        this.stack.push(value)
        
        if(this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value)
        }
    }
    
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}

const stack = new MinStack();
stack.push(1)
stack.push(2)
stack.push(0)
//console.log(stack.getMin())
