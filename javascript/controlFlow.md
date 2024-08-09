# Control Flow in Javascript 

## What is Control Flow?

Order of events that occur in our code

"The execution sequence of instructions in a program determined at run time with the use of control structures"

### Basic Types of Control Flow 

Sequence: statements execute one at a time in sequence

```
let name = prompt('Enter your name: ');
```

```
let num = 10;
console.log(num);

num += 5;
console.log(15);
```

**Branching**: different code paths/branches are executed based upon a conditional expression. 

```
// conditional (truthy or falsy) expression

if (num > 20) {
  console.log("this num is greater than 20");
} else {
    console.log("number is less than")
}
```

**Looping**: code is repeatedly executed while a condition is truthy

```
while (points < 100) {
  let move = getPlayerMove();
  points += getPoints(move);
}
```

## Conditional Expressions

Both branching and looping depend on **conditional expression**.

Conditional Expressions are a piece of code that evaluates to a single value / thing (object). Every single value / thing is **truthy** or **falsy**

Examples:
```
(word === secretWord)
```
```
(numWrongGuesses > MAX_WRONG_GUESSES)
```
```
(winner)
```

### What is `true` (Truthy) / What is `false` (Falsy)

In Javascript values are considered **"truthy"** when the value is `true` when used in a conditional expression such as that used in an if statement.

A **"falsy"** value is a value that is considered to be false.

Using "truthy" and "falsy" values allow for concise and expressive code because it gives use the ability to use non-boolean expressions (`true` or `false`).

Example: 
```
if (true) {
  console.log('truthy!');
} else {
  console.log('falsy!');
}
```

⚠️ Everything in JS is truthy EXCEPT for the following:
  1. `false` (of course)
  2. The `null` data type
  3. The `undefined` data type
  4. The empty string `''`
  5. The number `0` (zero)
  6. `NaN` (special number)


### The Not(Bang) Operator 

The not operator `!` also known as the "bang" operator, "flips" a true/truthy expression to the boolean value `false` and vice versa.

Examples:

```
!false === true 
=> true

!null === true 
=> true

!3 === false $$
=> true

!'' === true 
=> true

console.log(!0);
=> true
```

a double `!!` operator will force an expression into its actual boolean value `true`/`false`

```
console.log(!!0);
=> false

console.log(!!3)
=> true
```

#### Boolean Logic (Comparison Operators)

Used to compare the values LEFT to RIGHT operands which can be variables, literal values, objects properties, etc:

| Operator | Purpose                                 |
|----------|-----------------------------------------|
| ===      | strict equality - best practice         |
| ==       | performs type conversion (coercion) - not recommended |
| !==      | strict inequality                       |
| !=       | inequality                              |
| <        | less than                               |
| >        | greater than                            |
| <=       | less than or equal                      |
| >=       | greater than or equal                   |
