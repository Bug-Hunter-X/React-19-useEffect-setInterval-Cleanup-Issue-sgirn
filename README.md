# React 19 useEffect setInterval Cleanup Issue

This repository demonstrates a common mistake when using `setInterval` within a `useEffect` hook in React 19.  Failure to include a cleanup function in the `useEffect` leads to memory leaks and unexpected behavior.

## Bug
The bug lies in the `MyComponent`'s `useEffect` hook.  `setInterval` is called without a way to stop it when the component unmounts, resulting in an active interval even after the component is no longer needed.

## Solution
The solution involves using the return value of the `useEffect` to add a cleanup function that calls `clearInterval` to stop the interval when the component unmounts.