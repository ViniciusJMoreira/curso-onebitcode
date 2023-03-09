function sum(x, y, ...rest){
  const X = x * 5
  const Y = y * 2
  const Rest = rest.reduce((acc, num) => acc + num , 1) 
  return {X, Y, Rest}
}

console.log(sum(2, 5 , 7, 8, 9 , 10))