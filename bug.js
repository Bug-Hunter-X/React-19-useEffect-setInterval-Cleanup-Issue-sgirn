```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. It should return a cleanup function.
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```