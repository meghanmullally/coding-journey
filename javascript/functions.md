# Functions

## Function Syntax

In Javascript, a function is a block of code that performs a specific task. To define a function we will be using `function` before the `functionName`. 

```
function functionName(parameters) {
    // code to be executed
    return result; // used to return a value (optional)
}
```

Let's break down the components: 
- `function` - keyword used to declare a function.
- `functionName` - Name of your function written in `camelCase`. When deciding on a functionName, it is important to choose a descriptive name to describe what the function does. 
- `parameters` - A placeholder for values that the function will receive when it is called. These are optional.
- `{}` - Curly braces will contain the code with your instructions or operations that will be performed by the function.
- `return result;` - This is optional and is used to specify the value the function will output. If there is no `return` statement by default it will return `undefined`.

Simple Example:
```
// This function will create a message about a Jujutsu Kaisen character
function describeJJKCharacter(name, cursedTechnique) {
  const message = `In Jujutsu Kaisen, one of my favorite characters is ${name}. They wield the powerful cursed technique known as ${cursedTechnique}.`;
  return message;
}

// Calling the function with specific Jujutsu Kaisen character details
const itadoriMessage = describeJJKCharacter("Yuji Itadori", "Divergent Fist");
console.log(itadoriMessage);

```

This example shows
- `describeJJKCharacter` function takes two params `name` and `cursedTechnique`
- Inside the function it creates a message using a template literal, combining the character's name and their cursed technique
- `return message;` sends the composed message back when the function is called
- When  calling the `itadoriMessage` with `describeJJKCharacter("Yuji Itadori", "Divergent Fist");`, it generates a messages about Itadori and his curse.
- `console.log(itadoriMessage)` outputs the message to the console.

## Parameters

Parameters serve as placeholders within the parentheses of a function declaration, enabling the function to accept input values or arguments. They act as variables that can be customized each time the function is called. Parameters provide a way to make functions dynamic and versatile, allowing them to perform different actions based on the values passed during invocation.


### Syntax 

```
function functionName(para1, para2, ...){
// fx body
}
```

####Types of Parameters
1. **Named Parameters**
     Parameters are variables - the name can be decided by the dev

Example: 
```
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Meghan");

// output would be "Hello, meghan!"
```
2. **Default Parameters**
   Can have default values assigned incase an argument is not provided

Example:

```
function multiply(a, b = 2) { 
    return a * b; 
}

const results = multiply(4);

console.log(results);

// Output: 8 (4 * 2, where b is the default value)
```
3. **Rest Parameters**
   Allows a function to accept an indefinite # of arguments as an array.

Example: 
```
function calculateAverage(...grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;
  return average;
}

// Example:
const ave1 = calculateAverage(90, 85, 92, 88);
console.log(`Average 1: ${ave1}`);

const ave2 = calculateAverage(75, 80, 70, 85, 90);
console.log(`Average 2: ${ave2}`);

```

- `calculateAverage` function takes any number of grades using the rest param `...grades`
- `reduce` method is used to calculate the total sum of the grades
- the average is calculated by dividing the total sum by the number of grades

### Passing Arguments
Actual values passed to the function are called **arguments** and are matched to the params by position. Arguments are used when calling a function.

Example:
```
function add(a, b){
    return a + b;
}

const result = add(3,5);
console.log(result); 
// Output: 8
```

#### Order of Parameters Matters
Parameters are positional and the order they are called in the function matters.

Example:

```
function greetSailorMoon(characterName, sailorTitle) {
  console.log("Hello, Sailor " + sailorTitle + " " + characterName + "!");
}

greetSailorMoon("Usagi", "Moon"); // Output: Hello, Sailor Moon Usagi!
greetSailorMoon("Mars", "Rei"); // Output: Hello, Sailor Rei Mars! (Different result due to the order of arguments)

```

#### Scope of Parameters

Parameters are **not** accessible outside of the function as they are local within the functions scope.

Example:
```
function example(parameter) {
    // inside is the local scope
  console.log(parameter); // Accessible
}

// outside is the global scope
console.log(parameter); // Error: parameter is not defined (outside the function)

```

#### Destructuring Parameters

Allows you to extract values from arrays or properties from objects and assign them to variables. Destructuring is useful when handling complex data structures.

For example in my pokemon app (Bio File)
- These snippets showcase how to use destructuring to extract specific properties from objects and handle potential `null` or `undefined` values using the || operator.

```
export default function Bio({ pokemonDetails, pokemonSpecies, characteristicDetails }) {

const { abilities, height, weight } = pokemonDetails || {};
const { egg_groups, capture_rate, growth_rate, gender_rate, habitat, generation, base_happiness, hatch_counter, flavor_text_entries, genera, shape } = pokemonSpecies || {};
const { characteristicDescription } = characteristicDetails || {};

/// other code
}
```

##### Destructuring Arrays
```
function processArray([first, second, ...rest]) {
  console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);
}

processArray([1, 2, 3, 4, 5]);

```
- the `[first, second, ...rest]` assigns the first two elements `first` and `second` and then the rest of the elements to the array `rest`

##### Destructuring Objects 

```
function processObject({ name, age, country = 'Unknown' }) {
  console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}

// Usage
processObject({ name: 'Meg', age: 28 });

```
- `{ name, age, country = 'Unknown' }` extracts the `name` and `age` properties from the object. It also provides a default value for the `country` property if it is not present.