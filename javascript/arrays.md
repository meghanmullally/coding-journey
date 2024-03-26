# :memo: Javascript Notes

## Arrays 

- An array is a data structure used to store an ordered "list" of data. 
- Arrays can contain zero or more items called **elements**
- Each element in the array can hold any data type including objects, functions and arrays
  ```
  const myArray = ['a', 12, [true], 1, 'e'];
  ```

### Why should you use an Array?
- Arrays would be the **BEST** choice when holding **ordered lists** of data 
- Arrays are a great way to store "collections" of data 

### Creating Arrays
There are two ways to create an array 

**Array Literal Notation:** This is the recommended best practice and involves directly defining the array's elements within square brackets.
```
const nums1 = [2, 4, 18];
```
**Using the Array class:** Although less common, you can also create arrays using the Array constructor.
```
const nums2 = new Array(2, 4, 18);
```

It's important to note that while both methods achieve the same result, the class approach behaves differently when you pass only one argument. Therefore, the best practice is to use Array Literal Notation for its simplicity and consistency.

### Accessing/Updating the Elements in an Array

To access and update elements in an array, you can use square bracket notation, specifying the index position of the element you want to access or modify.

#### Accessing Elements
To access the value of an element, specify the index within square brackets after the array name.
```
const movies = ["Grease", "Spirited Away", "Howl's Moving Castle"];

const firstMovie = movies[0];

console.log(firstMovie);
=> Grease
```

#### Updating Elements
To update the value of an element, use square bracket notation along with the index of the element you want to update.
```
const movies = ["Grease", "Spirited Away", "Howl's Moving Castle"];

movies[2] = 'Clueless';

console.log(movies);
=> [ 'Grease', 'Spirited Away', 'Clueless' ];
```
By using square bracket notation, you can easily retrieve and modify specific elements within an array based on their index positions.

💡 The first element of an array is `0`.

#### Accessing the Last Element of an Array

To access the last element of an array, you can utilize the array's length property along with square bracket notation. Since array indices start from 0, you'll need to subtract 1 from the length to access the last element.

By subtracting `-1` from the length of the array, you ensure that you're accessing the correct index of the last element, regardless of the array's length. 

```
const movies = ["Grease", "Spirited Away", "Howl's Moving Castle"];

// Access the last element of the array
let lastMovie = movies[movies.length - 1];

console.log(lastMovie); 
=> Howl's Moving Castle
```

You can also access the last element of an array inside a two-dimensional array 

```
const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

const numList = numArrays[numArrays.length - 1];
console.log(numList);
=>[7, 81, 90]
```

---

### Adding Elements to an Array

#### .push()

adds one or more elements to the end of an array and returns the new length of the array.

```
const myArray = ['a', 'b', 'c', 'd', 'e'];

myArray.push('f');
console.log(myArray); 
=> ['a', 'b', 'c', 'd', 'e', 'f']
```

#### .unshift()
adds one or more elements to the beginning of an array and returns the new length of the array.

```
const myArray = ['b', 'c', 'd', 'e'];

myArray.unshift('a');
console.log(myArray); 
=> ['a', 'b', 'c', 'd', 'e']
```

### Removing Elements from an Array

#### .pop()
removes the last element from an array and returns that element. This method changes the length of the array.

```
const myArray = ['a', 'b', 'c', 'd', 'e'];

const removedElement = myArray.pop();

console.log(myArray); 
=> ['a', 'b', 'c', 'd']
console.log(removedElement); 
=> 'e'
```

#### .shift()
removes the first element from an array and returns that removed element. This method changes the length of the array.

```
const myArray = ['a', 'b', 'c', 'd', 'e'];

const removedElement = myArray.shift();
console.log(myArray); 
=> ['b', 'c', 'd', 'e']
console.log(removedElement); 
=> 'a'
```
### Add/Remove Elements To/From Anywhere in the Array

#### .splice()

Extracts elements from an array and/or inserts new elements into the array.

`splice` syntax - all but the first parameter is optional.

```
array.splice(start, deleteCount, newItem1, newItem2...)
```

```
const longArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const extracted = longArray.splice(5, 2, '111', '222', '333', '444', '555');
console.log(longArray); 
=> ['a', 'b', 'c', 'd', 'e', '111', '222', '333', '444', '555', 'h', 'i', 'j']
console.log(extracted); 
=> ['f', 'g']
```

### Iterating Over All of the Elements in an Array

#### forEach

`forEach` is used when you want to iterate over all of the elements in the array. 

```
const movies = ['Grease', 'Iron Man 1', 'Spirited Away', 'Clueless'];

// The variable 'movie' is scoped to this function and represents each individual movie in the 'movies' array
movies.forEach(function (movie) {
// For each movie in the array, we log a message indicating our love for it
  console.log(`I love this movie ${movie}!`);
});

=> I love this movie Grease!
=> I love this movie Iron Man 2!
=> I love this movie Star Wars!
```

#### Adding the Index in forEach
You can also access the index of each element by providing a second parameter to the callback function passed to `forEach`.

```
movies.forEach(function(movie, idx) {
  console.log(idx + ' - ' + movie);
});

=> 0 - Grease
=> 1 - Iron Man 2
=> 2 - Star Wars
```

#### Using a `for...of` Loop
`for` loops are used when you want to iterate over an array and can be exited by using the `break` statement.

In this example the loop will stop at Iron Man 2

```
const movies = ['Grease', 'Iron Man 2', 'Star Wars'];

// Iterating through each movie in the array using a for...of loop
for (let movie of movies) {
  // Breaking the loop if the movie is 'Iron Man 2'
  if (movie === 'Iron Man 2') break;
  // Outputting each movie until 'Iron Man 2' is found
  console.log(movie);
}
```

##### == vs ===

Strict equality `===`

Best convention to use `===` 

```
123 === '123'
=> false
```

Loose equality `==`

this is more risky since the code is not the same data. 

```
123 == '123'
=> true
```


### Create a Single String from an Array of Strings
#### .join()
method creates and returns a new string by concatenating all the elements in an array. It joins the elements using a specified separator.

```
const animeTitles = ["Dragon Ball", "Attack on Titan", "Sailor Moon", "Inuyasha", "Jujutsu Kaisen"];

// Join the array elements into a single string separated by commas
const animeList = animeTitles.join(', ');

console.log(animeList);
=> "Dragon Ball, Attack on Titan, Sailor Moon, Inuyasha, Jujutsu Kaisen"
```
---
### Making Copies of an Array
#### .split()

This method divides a string into an ordered list of substrings and returns them as an array. It takes a delimiter as an argument, which specifies where to divide the string.

```
const sentence = 'This is a sample sentence.';
const words = sentence.split(' ');
console.log(words); => ['This', 'is', 'a', 'sample', 'sentence.']
```
Another example 

```
const list = "apple,banana,orange";
const fruit = list.split(',');
console.log(fruit);
=> ["apple", "banana", "orange"]
```

---
### Additional Methods 

#### .reverse()
method reverses the order of the elements in an array. The first array element becomes the last, and the last array element becomes the first.

```
const animeTitles = ["Dragon Ball", "Attack on Titan", "Sailor Moon", "Inuyasha", "Jujutsu Kaisen"];

// Reverse the order of elements in the array
animeTitles.reverse();

console.log(animeTitles);
=> ["Jujutsu Kaisen", "Inuyasha", "Sailor Moon", "Attack on Titan", "Dragon Ball"]
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

#### .indexOf() and .lastIndexOf()
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
=> 2
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
=> 2
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

=> true
=> false
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

#### .fill()

placeholder for more notes

#### .sort()

placeholder for more notes
