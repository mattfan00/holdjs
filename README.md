# hold.js

hold.js is a Javascript library that brings the feel of a native application to the web.
Traditionally, when you hold down a key in the browser, the operating system 
chooses the repeat speed of the character. However, hold.js gives the developer 
the freedom of setting the repeat speed in an easy to use library. hold.js is 
ideal for creating browser games.

## How to use it
1. Include the `main.js` script on your page using the `<script>` tag.
1. Use `hold.add()` to start listening for a specific key. Additionally, include
the repeat speed (in milliseconds) and the function associated with that key.

    ```js
    hold.add('f', 1000, () => {
      console.log('Holding down the f-key will press the f-key once every second');
    }));
    ```

1. Use `hold.remove()` to stop listening for that key.

    ```js
    hold.remove('f');
    ```

## Features?
- Works for keys commonly used in browser games! 

    ```js
    hold.add('left', 100, () => { console.log('Left arrow key!') });
    hold.add('right', 100, () => { console.log('Right arrow key!') });
    hold.add('up', 100, () => { console.log('Up arrow key!') });
    hold.add('down', 100, () => { console.log('Down arrow key!') });
    hold.add('space', 100, () => { console.log('Spacebar key!') });
    ```

- Chain keys together! 

    ```js
    hold.add('a b c', 200, () => {
      console.log('Listen to a, b, and c');
    }));
    ```

## See it in action
This section is coming soon!


