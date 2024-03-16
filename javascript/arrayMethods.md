# :memo: Javascript Notes

###  Array Methods

#### .push()

adds one or more elements to the end of an array and returns the new length of the array.

```
const myArray = ['a', 'b', 'c', 'd', 'e'];

myArray.push('f');
console.log(myArray); 
// Output: ['a', 'b', 'c', 'd', 'e', 'f']
```


#### .pop()
removes the last element from an array and returns that element. This method changes the length of the array.

```
const myArray = ['a', 'b', 'c', 'd', 'e'];

const removedElement = myArray.pop();
console.log(myArray); 
// Output: ['a', 'b', 'c', 'd']
console.log(removedElement); 
// Output: 'e'
```

#### .shift()
removes the first element from an array and returns that removed element. This method changes the length of the array.

```
const myArray = ['a', 'b', 'c', 'd', 'e'];

const removedElement = myArray.shift();
console.log(myArray); 
// Output: ['b', 'c', 'd', 'e']
console.log(removedElement); 
// Output: 'a'
```

#### .unshift()
adds one or more elements to the beginning of an array and returns the new length of the array.

```
const myArray = ['b', 'c', 'd', 'e'];

myArray.unshift('a');
console.log(myArray); 
// Output: ['a', 'b', 'c', 'd', 'e']
```

#### .split() 

This method divides a string into an ordered list of substrings and returns them as an array. It takes a delimiter as an argument, which specifies where to divide the string.

```
const sentence = 'This is a sample sentence.';
const words = sentence.split(' ');
console.log(words); // Output: ['This', 'is', 'a', 'sample', 'sentence.']
```
Another example 

```
const list = "apple,banana,orange";
const fruit = list.split(',');
console.log(fruit);
// output: ["apple", "banana", "orange"]
```

#### .join()
method creates and returns a new string by concatenating all the elements in an array. It joins the elements using a specified separator.

```
const animeTitles = ["Dragon Ball", "Attack on Titan", "Sailor Moon", "Inuyasha", "Jujutsu Kaisen"];

// Join the array elements into a single string separated by commas
const animeList = animeTitles.join(', ');

console.log(animeList);
// Output: "Dragon Ball, Attack on Titan, Sailor Moon, Inuyasha, Jujutsu Kaisen"
```

#### .reverse()
method reverses the order of the elements in an array. The first array element becomes the last, and the last array element becomes the first.

```
const animeTitles = ["Dragon Ball", "Attack on Titan", "Sailor Moon", "Inuyasha", "Jujutsu Kaisen"];

// Reverse the order of elements in the array
animeTitles.reverse();

console.log(animeTitles);
// Output: ["Jujutsu Kaisen", "Inuyasha", "Sailor Moon", "Attack on Titan", "Dragon Ball"]
```

### .splice()

Extracts elements from an array and/or inserts new elements into the array.

```
const longArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const extracted = longArray.splice(5, 2, '111', '222', '333', '444', '555');
console.log(longArray); // Output: ['a', 'b', 'c', 'd', 'e', '111', '222', '333', '444', '555', 'h', 'i', 'j']
console.log(extracted); // Output: ['f', 'g']
```

### .concat()

method is used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.

```
const firstArray = ['a', 'b', 'c']
const secondArray = ['d', 'e', 'f']
const thirdArray = ['g', 'h', 'i'];
const finalArray = firstArray.concat(secondArray, thirdArray);


console.log('Value of finalArray = ', finalArray);
```

#### .indexOf()
Finding the *index* of a specific element inside of the array 

```
const animeList = [
    "Dragon Ball Z",
    "Jujutsu Kaisen",
    "Sailor Moon",
    "Inuyasha",
    "Attack On Titan"
]

console.log(animeList.indexOf("Sailor Moon"));

// Output:2
```
If the `animeList` doesn't have the value we are looking for then a -1 will be returned instead.

Additionally, if the array has multiple elements with the same value example Sailor Moon twice then the first occurrence will be returned first:

```
const animeList = [
    "Dragon Ball Z",
    "Jujutsu Kaisen",
    "Sailor Moon",
    "Sailor Moon",
    "Inuyasha",
    "Attack On Titan"
]

console.log(animeList.indexOf("Sailor Moon"));

// Output:2
```

#### .includes()

Using this method we will be able to find a specific element inside of an array. If the element is in the `animeList` it will return a boolean true and if not - false. 


```
const animeList = [
    "Dragon Ball Z",
    "Jujutsu Kaisen",
    "Sailor Moon",
    "Inuyasha",
    "Attack On Titan"
]

console.log(animeList.includes("Sailor Moon"));
console.log(animeList.includes("Maid Sama"));

// Output: true
// Output: false
```

An example of using both of these methods together with an if statement. 

If our `animeCharacters` array includes an element with the value "Usagi", do this: 
- Save the index to the "Usagi" element in a new variable called `usagiIndex`.
- Then use console.log() to display "Found Usagi at index {indexNumber}!"

```
const animeCharacters = [
  "Tooru Oikawa",
  "Yona",
  "Goku",
  "Levi",
  "Usagi", 
  "Vegeta",
  "Inuyasha"
];


if (animeCharacters.includes( "Usagi")) {
  const characterIndex = animeCharacters.indexOf( "Usagi");
  console.log(`Found Usagi at index ${characterIndex}!`);
} else {
  console.log("Not Found");
}

// Output: Found Usagi at index 4!
```

