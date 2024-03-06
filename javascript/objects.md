# Objects

Objects are a fundamental part of JavaScript, and they are often used to represent real-world entities and their properties. They allow you to store and organize data in `key`: `value` pairs. Each `key` is a string or symbol while the associated `value` can be any data type, including other objects.

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
```

- **Modifying Properties:** Properties can be modified by assigning new values.

```
person.age = 26;
person.address.city = "Seattle";
```

- **Adding a New Property:** New properties can be added dynamically.

```
person.gender = "Female";
```

- **Calling a Method:** The `sayHello` method is a function property of the object and can be called using dot notation.
```
person.sayHello(); // Output: Hello, my name is Jane Doe
```