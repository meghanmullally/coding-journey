## let vs const

### let - mutable value (changeable)

`let` is used when you are declaring a variable whos values can change. 

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
```

### const - immutable value (unchangeable)

`const` is used for declaring variables whose values should not change. 

**Example:** `PI` is assigned a const value, and attempting to reassign it will result in an error.
```
const PI = 3.14;
```

**Real-world Example:** You're birthdate does not change.
```
const birthdate = '1990-01-01';
```

