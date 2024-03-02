# let vs const

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

console.log(person); // Output: { name: 'Meghan', age: 29 }
```

This demonstrates that `const` ensures the reference to the object remains the same (immutable), but the internal content can still be changed.