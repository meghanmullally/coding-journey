# Objects

Objects are a fundamental part of JavaScript, and they are often used to represent real-world entities and their properties. They allow you to store and organize data in `key`: `value` pairs. Each `key` is a string or symbol while the associated `value` can be any data type, including other objects.

:brain: **Note:** In some programming languages, you might encounter developers referring to an object as a ***"hash."*** This term is commonly used in languages like Ruby to describe a key-value data structure. In JavaScript, the more conventional term for such structures is ***"object."***

- **Creating an Object:** The `person` object is created with various properties, including strings, numbers, a boolean, nested objects, an array, and a method.

```
const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Seattle",
    zipCode: "12345"
  },
  hobbies: ["gaming", "coding", "traveling"],
  sayHello: function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  }
};
```

- **Accessing Properties:** Properties of an object can be accessed using dot notation (object.property). Nested properties are accessed using multiple dots.

```
console.log(person.firstName); // Output: Jane
console.log(person.address.city); // Output: Seattle
console.log(person.hobbies[1]); // Output: coding


// Nested prop w/ multiple dots
person.address.city = "Seattle";

// another way to grab data from a nested obj
person['address']['city'] = "Seattle";
```

- **Modifying Properties:** Properties can be modified by assigning new values.

```
person.age = 26;
person.address.city = "Tacoma";

// Another way 
person['address']['city'] = "Tacoma";
```

- **Adding a New Property:** New properties can be added dynamically.

```
person.gender = "Female";
```

- **Calling a Method:** The `sayHello` method is a function property of the object and can be called using dot notation.
```
person.sayHello(); // Output: Hello, my name is Jane Doe
```

### More Examples

In this example I am demonstrating how to add `hash1` into `hash2` using a ***spread*** operator. A spread is commonly used for objects and arrays to create a shallow copy, merge objects or expand arrays. Below I am merging the properties from `hash1` into `hash2`.

he spread operator is commonly used for objects and arrays to create a shallow copy, merge objects, or expand arrays. In this case, it's used to merge the properties of hash1 into hash2.

```
const hash1 = {
  a: 1,
  b: 2,
  c: 3
}

const hash2 = {
  ...hash1,
  d: 4
}

console.log(hash2);
// Output: { a: 1, b: 2, c: 3, d: 4 }
```
This is a concise way to create a new object by combining properties from existing objects. It is especially useful for avoiding manual copying and reducing redundancy in code.