import React, { createContext, useContext, useState } from 'react';


const CounterContext = createContext();


const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};


const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};


const CounterDisplay = () => {
  const { count } = useCounter();
  return <div>Count: {count}</div>;
};

const CounterControls = () => {
  const { increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


const App = () => {
  return (
    <CounterProvider>
      <div>
        <h1>Counter App</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
};

export default App;
