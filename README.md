# React + Vite

# Customer Support Zone
## Live Link: [https://custimer-suppport-zone.mdhanjala016pc.workers.dev/](https://custimer-suppport-zone.mdhanjala016pc.workers.dev/)

### Related Questions and Answers

1. **What is JSX, and why is it used?**
   **ANS:** JSX is a syntax extension for JavaScript that allows you to write HTML-like structures directly within your code. It is primarily used in React to make UI development more intuitive by visually representing the component hierarchy.

2. **What is the difference between State and Props?**
   **ANS:** Props are read-only inputs passed from a parent component to a child, acting like function arguments to configure the component. State is internal data managed within the component itself that can change over time, usually in response to user actions or events. When props or state change, React automatically re-renders the component to keep the UI in sync with the new data.

3. **What is the useState hook, and how does it work?**
   **ANS:** `useState` is a React Hook that adds a local state variable to a functional component to track data that changes over time. It returns an array containing the current state value and a setter function, which triggers a re-render whenever the state is updated.

4. **How can you share state between components in React?**
   **ANS:** You can share state by "lifting state up"—moving the state to the closest common parent and passing it down to children via props.

5. **How is event handling done in React?**
   **ANS:** In React, event handling uses camelCase syntax (like `onClick`) and passes a function instead of a string to the event listener. We must explicitly call `e.preventDefault()` to stop default browser actions, as returning `false` does not work in JSX.
