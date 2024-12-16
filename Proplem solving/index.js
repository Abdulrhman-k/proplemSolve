function getEvenNumbers(num) {
    return num.filter(number => number % 2 === 0);
  }
  
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = getEvenNumbers(num);
  console.log(evenNumbers);




function GetLargestNumber(numbrs){
    return Math.max(...numbrs);
    }
    const numbers = [1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 11, 50]
        const largestNumber = GetLargestNumber(numbers)
        console.log(largestNumber)
    

function reverseString(str) {
    return str.split("").reverse().join("");
    }
    const str = "Hello, World!";
    const reversedStr = reverseString(str);
    console.log(reversedStr);





function RemoveDuplicates(numberss) {
    const uniqueNumbers = [new Set(numberss)];
    return uniqueNumbers;
    }
    const numberss = [1, 2, 2, 3, 4,
        4, 5, 6, 6, 7, 8,
        8, 9, 10, 10, 11, 50];
        const uniqueNumbers = RemoveDuplicates(numberss);
        console.log(uniqueNumbers);
        

















