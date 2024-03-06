# Combining HTML, CSS AND JS

When adding Javascript to your website, we used the `<script>` element into the HTML file. There are two places this  `<script>` element can be add... see examples below

1. Adding the `<script>` inside the `<head>`:

```
<!DOCTYPE html>
<html>
  <head>
    <script>
      console.log("Hello World 👋!");
    </script>
  </head>
</html>

```

❗ **Important note:** If you plan to write more JS code, it is recommended to link an external JS file via `src`. Make sure the **index.js** file is in the same directory as your HTML file:

```
<!DOCTYPE html>
<html>
  <head>
    <script src="index.js"></script>
  </head>
</html>

```

2. Another option is adding the `<script>` inside the `<body>` at the bottom:
```
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <script>
      console.log("Hey look at me 👋!");
    </script>
  </body>
</html>

```
