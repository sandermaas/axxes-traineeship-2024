# Axxes Traineeship 2024 - React

### Exercise 4 (Hooks)

1. Create a custom `useScrollListener` hook

   It should have a callback function as parameter:

   ```
   type ScrollCallback = (scrollY: number, prevScrollY: number) => void;
   ```

   The callback should be triggered when a user scrolls (try to optimize the performance of the hook)

2. Add the custom hook to `App`

3. Write a "You just scrolled up" log to the console when a user scrolled up

4. Write a "You just scrolled down" log to the console when a user scrolled down

##### Useful links

[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
[https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
