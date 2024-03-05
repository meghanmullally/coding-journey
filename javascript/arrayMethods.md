# :memo: Javascript Notes

###  <ins>Array Methods</ins>

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

