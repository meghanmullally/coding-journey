# HTML Basics

HTML also known as HyperText Markup Language is used to create the structure of a web page. It uses a set of tags to define different parts of the page. 

### HTML Structure

- `<!DOCTYPE html>`: This defines the document type and version of HTML being used (for example HTML5). It helps browsers understand how to interpret the code.
- `<html>`: This is the root element of an HTML document. It wraps all the content on the page and is the outermost layer.

- `<head>`: This element contains meta-information about the document which works behind the scenes. This information could be the page title, linked stylesheets, and scripts. It doesn't display any visible content on the page.

- `<title>`: The title tag sets the title of the web page, which appears in the browser tab or window.
- `<body>`: This element shows what is visible on the web page. This will contain all the main content such as text, images, links, etc.

  - `<!-- Content goes here -->`: This is an HTML comment. This is good for adding notes for yourself or as a placeholder for the actual content. No one will be able to see the comments unless they have access to your code.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>

```

### Headings and Paragraphs
- `(<h1> to <h6>)` are header tags.
- `<p>` tags are used to define paragraphs, separating blocks of text.

```
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
```
### Formatting

With HTML special tags you will be able to format and structure your text. 

`<strong>` tags enclose text to make it **bold** which add importance to the text.

```
<p><strong>Bold</strong> 
```
Output: <p><strong>Bold</strong></p>

`<em>` tags enclose text to make it italic which adds an emphasis to the text.

``` 
<em>italic</em> text.</p>
```
Output: <em>italic</em> text.</p>

`<br>` tags are inserted when someone wants to create a line break causing the following content to move to a new line.

```
<p>This is a line<br>break.</p>
```
Output: <p>This is a line<br>break.</p>

`<hr> ` tags are a horizontal line that are often used to separate sections or content on a page.

```
<hr>
```
Output: <hr>

### Document Object 

#### querySelector()

This method enables you to grab anything in HTML, such as an element name, class name, or id.

**For example:**

1. Selecting an element by its tag name:
```
document.querySelector("div");
```

2. Selecting an element by its class name:
```
document.querySelector(".container");
```

3. Selecting an element by its id:
```
document.querySelector("#header");
```
4. Selecting nested elements using CSS selectors:
```
document.querySelector("div.container > p");
```
5. Combining multiple selectors to target specific elements:
```
document.querySelector("ul.navbar > li.active > a");
```

