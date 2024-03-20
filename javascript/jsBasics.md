# Javascript

## What is Javascript?

JavaScript, often shortened to JS, is a versatile programming language widely used for creating interactive web pages. It conforms to the ECMAScript standard and is known for its dynamic nature and prototype-based object orientation. JS is lightweight and supports multiple programming styles, including object-oriented and functional programming. 

It can be used both in front end (web browsers) and back end (server environments). With JavaScript, developers can enhance user experience on websites by adding interactivity and dynamic content, as well as interact with databases to retrieve and manipulate information.

## Data Types 

:rotating_light: To find which type you are using in Javascript use `typeof()`.

Examples
```
typeof(123);
// Output: number

typeof('hello world!');
// Output: string
```

### Primitive data types

#### Number

In other programming languages like Python, numbers are divided into two class or objects: Integers or Floats (decimal numbers). 

In Javascript all numbers are **"double-precision 64-bit format IEEE 754 values"** ... basically there are no such thing has integers in js.

![Giphy Math Thinking](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG41bXA4bmwwZWh2aG5icXZvOTFxNzZhanU0Zmt3aHF2aDRibGE2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/APqEbxBsVlkWSuFpth/giphy-downsized-large.gif)


##### Arithmetic Operators

These operators would be addition, subtraction, modulus (or remainder) arithmetic and so forth. Numeric operators are `+`, `-`, `*`, `/` and `%`.
```
// Addition - Adds two numbers together.
1 + 2
=> 3

// Subtraction - Subtracts the second number from the first.
2 - 5
=> -3

// Division - Divides the first number by the second.
5 / 2
=> 2.5

// Multiplication - Multiplies two numbers.
6 * 2
=> 12

// Modulus - Returns the remainder of a division operation.
15%4 
=> 3
```

This example is called an expression.

```
200 + 4000 + -20000 
// Output: -15800
```

##### Special Number Operators

Exponents example: 

```
3**2
// Output: 9
```
Another way to implement exponents would be using the `Math` object.

Take a number to some power use `Math.pow` 
```
// 3^2 becomes
Math.pow(3,2)
=> 9
// 2^4 becomes
Math.pow(2,4)
=> 16
```

Square root - `Math.sqrt`

```
// √4 becomes
Math.sqrt(4)
=> 2
```

Create a random number - `Math.random`

```
// The following only returns a random decimal
Math.random()
=> .229375290430
/**
  The following will return a
  random number between 0 and 10
*/
Math.random()*10
```

Since `Numbers` in JS can be either Floats or Integers (but they are still only called Numbers)...if you want to get rid of remaining decimals places - we can use `Math.floor`, `Math.ceil` or `Math.round`

```
// round down to the nearest integer
Math.floor(3.14)
=> 3
Math.floor(3.9999)
=> 3

// round up to the nearest integer
Math.ceil(3.14)
=> 4
Math.ceil(3.9999)
=> 4

// Mathematically round to the nearest integer
Math.round(3.14)
=> 3
Math.round(3.9999)
=> 4
```

----------------------
#### String

Strings are collection of characters such as letters and symbols. We use these to deal with words and text in Javascript. 

There are **three** ways to ways to write a string.

###### Backticks
 Double quotes
```
"hello world";
```
###### Backticks
 Single quotes
```
'hello world';
```
###### Backticks
These allow you to inject javascript into a string using **string interpolation** 
```
`hello world`;
```
##### String helper methods

Use the `length` property if you want to find the length of a string

```
"elephant".length
=> 8
```

Strings have a variety of [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods) that allow a dev to manipulate the string and access info.

A few examples

###### charAt()
```
'hello'.charAt(2);
=> "l"
```

###### replace()

```
'hello, world'.replace('hello', 'goodbye');
=> "goodbye, world"
```

###### toUpperCase()

```
'hello'.toUpperCase();
=> "HELLO"
```

##### String Concatenation
Creating expressions with strings using the addition operator
```
'Welcome' + 'Spring!';
=> 'Welcome Spring!'
```
the 'plus' binary operator is said to be **"overloaded"**— meaning that it behaves differently depending on what's on either side of it. Consider the following expressions. What do they output, and why?

```
 1 + 2 + '3'
 => '33'

 vs

'1' + 2 + 3
=> '123'
```

##### Converting Strings to Integers

###### parseInt()

Convert a string to an integer using `parseInt()` function

```
parseInt('123');
=> 123

parseInt('010')
=> 10
```

###### parseFloat()

Parse a floating point number by using `parseFloat()` function

```
parseFloat('11.2');
=> 11.2
```

Another way to convert values to numbers would be using the unary `+` operator

```
+'42';
=> 42
```

##### NaN 

Not a Number (NaN) is a special value in JS that indicates an invalid or unrepresentable numeric value. This often happens when there are failed numeric operations or parsing operations.

**Parsing Strings:** `parseInt()` or `parseFloat()` are used to convert a string to a number. If the string contains any non-numeric characters the result will return NaN.

```
parseInt('hello', 10);
=> NaN
```

**Mathematical Operations:** When NaN is involved in a mathematical operation, the result will always return NaN.

```
NaN + 9;
=> NaN
```
**Testing NaN:** You can use the built-in `isNaN()` function to test whether a value is NaN. It returns `true` if the argument is NaN, and `false` otherwise.

```
isNaN(NaN);
=> True
```

#### Boolean
```
true 
false
```
#### Null
```
const favFood = null;
```
#### Undefined
```
placeholder for undefined example
```
#### Symbol

Rare data type, often used as parts of an object

```
placeholder for Symbol example
```

### Reference Types
#### Object
most important data type - they are the way js runs. Object oriented program (Js is an OOP language). underneath the hood, everything that js shows us, everything in js is an object.

----------------------

# Variables and Keywords

In JS, variables are used to store data types into the memory of the computer so they can be later referenced. In Javascript the variables we use are `let` and `const` and need to use `lowerCamelCase`.

💡 If you declare a variable without assigning any value, its type is `undefined`.

```
let x;
=> undefined
```

Now lets see an example where we are assigning a value to variable.
```
const name = 'Meghan';
=> undefined

name
=> Meghan
```

### Assignment Operators

When assigning values we use `=`, and  compound assignment statements:  `+=` and `-=` 

```
let a = 2;
=> 2

a += 10;
=> 11

a -= 5;
=> 4
```

If you want to increment and decrement you can use `++` and `--` which can also be used as prefix or postfix operators.

###### toString()

Turn a number into a string

```
(1).toString()
=> "1"
/**
  be careful though,
  since numbers can be floats
  javascript might
  misunderstand you.
*/
1.toString()
=> Float Error
// but the following works
1..toString()
```

## let vs const

### let - mutable value (changeable)

`let` is used when you are declaring a variable whose values can change. 

**Example:** the variable `i` is declared with `let` in a for loop. The value `i` changes in each iteration.

```
for (let i = 0; i < 5; i++){
    console.log(i)
}
```
**Real-world Example:** You're age can change over time
```
let age = 25;
age = age + 1; 

console.log(age); // output: 26
```

### const - immutable value (unchangeable)

`const` is used for declaring variables whose values should not change. 

**Example:** `PI` is assigned a const value, and attempting to reassign it will result in an error.
```
const PI = 3.14;
```

**Real-world Example:** You're birthDate does not change.
```
const birthDate = '1990-01-01';
```

#### String Interpolation 

By using a string with backticks you will be able to "inject" JS into the string. See below. 

```
const firstName = 'Meghan';
const favAnimal = 'elephant';
const favNumber = 11;

`My name is ${firstName}` and my fav animal is a ${favAnimal} and my fav number is ${favNumber}`;
```

The alternative to the above example would of been 

```
"My name is " + firstName + " and my fav animal is a " + favAnimal + " and my fav number is " + favNumber;
```

## Key Differences & Best Practices 

### Differences:
- `let` is changeable while `const` is not.
- Using `const` for values that should remain constant helps prevent unintentional changes 

### Best Practices:
- Prefer using `const` by default and only use `let` when reassignment is necessary
- `const` makes the reference immutable, but the content of objects or arrays can still be modified. 

**Example:** const and object
```
const person {
    name: 'Meghan',
    age: 28
};

// Attempting to reassign the entire object will result in an error
// person = {}; // Error: Assignment to a constant variable

// However, the content of the object can be modified
person.age = 29;

// another way to modify
person['age'] = 29;

console.log(person); // Output: { name: 'Meghan', age: 29 }
```

This demonstrates that `const` ensures the reference to the object remains the same (immutable), but the internal content can still be changed.