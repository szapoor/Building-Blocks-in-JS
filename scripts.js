function printNumTill(number) {
  for (let i = 1; i <number+1; i++) {
    console.log(i);
  };
};
console.log(printNumTill(20))
console.log(printNumTill(15))

function greetingEx(Mark) {
  let greeting = "Hello Mark!"; 
  console.log(greeting);
}
greetingEx();

let printValues = (array) => {
  for (let i = 0; i <array.length; i++) {
    console.log(array[i]);
  }
};
printValues([0, 3, 6, 7, 9,])

let myNumbers = [10, 20, 30, 50, 12];
myNumbers.forEach((number) => {
  console.log(20);
});

let printValues2 = [0 , 3, 6, 7, 9];
printValues2.forEach((number) => {
  console.log(10);
});