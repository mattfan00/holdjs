# HoldJS 

HoldJS is a Javascript library that brings the feel of a native application to the web.
Traditionally, when you hold down a key in the browser, the operating system 
chooses the repeat speed of the character. However, HoldJS gives the developer 
the freedom of setting the repeat speed in an easy to use library. HoldJS is 
ideal for creating browser games. 

## How to use it
1. Include the `main.js` script on your page using the `<script>` tag.
1. Use `hold.add()` to start listening for a specific key. Additionally, include
the repeat speed (in milliseconds) and the function associated with that key.

    ```js
    hold.add('f', 1000, () => {
      console.log('Holding down the f-key will press the f-key once every second');
    }))
    ```

1. Use `hold.remove()` to stop listening for that key.

    ```js
    hold.remove('f');
    ```

## See it in action
This section is coming soon!


