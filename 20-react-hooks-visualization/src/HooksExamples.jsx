import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  useDebugValue,
  useId,
  useTransition,
  useDeferredValue,
  useSyncExternalStore,
  createContext,
  forwardRef,
} from "react";
import './HooksExamples.css';  

// Context for useContext example
const MyContext = createContext();

// Initial state and reducer for useReducer example
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Custom hook for useDebugValue example
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  useDebugValue(isOnline ? "Online" : "Offline");
  useEffect(() => {
    const timeout = setTimeout(() => setIsOnline(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  return isOnline;
}
//
let nextId = 0;
let todos = [{ id: nextId++, text: "Todo #1" }];
let listeners = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: "Todo #" + nextId }];
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export const hooksExamples = {
  useState: () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + 1);
    };

    return (
      <div className="useState-example card">
        <p>Count: {count}</p>
        <button className="btn" onClick={handleIncrement}>Increment</button>
        <p>Click the button to increment the count!</p>
        <p>
          This component demonstrates the usage of useState hook to manage
          state. It displays the current count value and provides a button to
          increment it.
        </p>
      </div>
    );
  },

  useEffect: () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      const timer = setTimeout(() => {
        setData("Fetched Data");
      }, 2000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="useEffect-example card">
        <p>Data: {data ? data : "Loading..."}</p>
        <br />
        <p>
          Displays the fetched data if available, otherwise shows "Loading..
        </p>
      </div>
    );
  },
  useContext: () => {
    return (
      <MyContext.Provider value="Hello from Context!">
        <ContextComponent />
      </MyContext.Provider>
    );
  },
  useReducer: () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleIncrement = () => dispatch({ type: "increment" });
    const handleDecrement = () => dispatch({ type: "decrement" });

    return (
      <div className="useReducer-example card">
        <p>Count: {state.count}</p>
        <button className="btn" onClick={handleIncrement}>Increment</button>
        <button className="btn" onClick={handleDecrement}>Decrement</button>
        <p>
          This component demonstrates the usage of useReducer hook to manage
          state in a more complex scenario. It displays the current count value
          and provides buttons to increment and decrement the count.
        </p>
      </div>
    );
  },
  useCallback: () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount(count + 1), [count]);

    return (
      <div className="useCallback-example card">
        <p>Count: {count}</p>
        <p>
          This component demonstrates the usage of useCallback hook to memoize a
          function. The increment function is created using useCallback with the
          count as a dependency, ensuring that the function is only recreated
          when the count value changes.
        </p>
        <button className="btn" onClick={increment}>Increment</button>
      </div>
    );
  },
  useMemo: () => {
    const [count, setCount] = useState(0);
    const doubleCount = useMemo(() => count * 2, [count]);
    const handleIncrement = () => setCount(count + 1);

    return (
      <div className="useMemo-example card">
        <p>Count: {count}</p>
        <p>Double Count: {doubleCount}</p>
        <button className="btn" onClick={handleIncrement}>Increment</button>
        <p>
          This component demonstrates the usage of useMemo hook to memoize a
          value. The doubleCount value is memoized using useMemo, ensuring that
          it is only recomputed when the count value changes.
        </p>
      </div>
    );
  },
  useRef: () => {
    const inputRef = useRef(null);
    const [userInput, setUserInput] = useState("");

    const focusInput = () => {
      inputRef.current.focus();
    };

    const handleChange = (e) => {
      setUserInput(e.target.value);
    };

    return (
      <div className="useRef-example card">
        <input ref={inputRef} type="text" onChange={handleChange} />
        <button className="btn" onClick={focusInput}>Focus Input</button>
        <p>
          This component provides an input field along with a button. When the
          button is clicked, it triggers the focusInput function, which focuses
          on the input field using the useRef hook.
        </p>
        <p>The text entered in the input field is: {userInput}</p>
      </div>
    );
  },
  useImperativeHandle: () => {
    const inputRef = useRef(null);
    const FancyInput = forwardRef((props, ref) => {
      useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        },
      }));
      return <input ref={inputRef} type="text" />;
    });
    const inputElement = useRef(null);
    const handleFocusInput = () => inputElement.current.focus();

    return (
      <div className="useImperativeHandle-example card">
        <FancyInput ref={inputElement} />
        <button className="btn" onClick={handleFocusInput}>Focus Input</button>
        <p>
          This component renders an input field with a button. The input field
          is encapsulated within the FancyInput component, which utilizes
          useImperativeHandle to expose a custom focus method. Clicking the
          button triggers the focus method, focusing on the input field.
        </p>
      </div>
    );
  },
  useLayoutEffect: () => {
    const [color, setColor] = useState("red");
    const handleColorChange = (newColor) => setColor(newColor);

    return (
      <div className="useLayoutEffect-example card">
        <button className="btn" onClick={() => handleColorChange("blue")}>Blue</button>
        <button className="btn" onClick={() => handleColorChange("red")}>Red</button>
        <div className="color-box" style={{ backgroundColor: color }}>
          This div's background color will change
        </div>
      </div>
    );
  },
  useDebugValue: () => {
    const isOnline = useFriendStatus(1);

    return (
      <div className="useDebugValue-example card">
        <p>Friend is {isOnline ? "Online" : "Offline"}</p>
        <p>
          This component demonstrates a custom hook useFriendStatus, which
          simulates fetching the online status of a friend. It initially sets
          the status to null, then after a 1-second delay, updates it to true
          (online). The useDebugValue hook provides a label for debugging
          purposes. Finally, the component renders the friend's status as either
          "Online" or "Offline".
        </p>
      </div>
    );
  },
  useId: () => {
    const id = useId();

    return (
      <div className="useId-example card">
        <label htmlFor={id}>Label </label>
        <input id={id} type="text" />
        <p>
          Generated ID: {id}
          <br />
          This component demonstrates the use of a custom hook, useId, which
          generates a unique ID for an HTML element. The generated ID is used as
          both the 'id' attribute of an input element and the 'for' attribute of
          a label element. This ensures that the label is associated with the
          input field for accessibility purposes.
        </p>
      </div>
    );
  },

  useTransition: () => {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    const handleClick = () => {
      startTransition(() => {
        setCount(count + 1);
      });
    };

    return (
      <div className="useTransition-example card">
        <p>Count: {count}</p>
        <button className="btn" onClick={handleClick}>Increment</button>
        {isPending && <p>Loading...</p>}
        <p>
          This component demonstrates the use of the useTransition hook. When
          the button is clicked to increment the count, a transition is started
          to indicate a pending state.
        </p>
      </div>
    );
  },

  useDeferredValue: () => {
    const [value, setValue] = useState("");
    const deferredValue = useDeferredValue(value);

    return (
      <div className="useDeferredValue-example card">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <p>Deferred Value: {deferredValue}</p>
        <p>
          This component demonstrates the use of the useDeferredValue hook. It
          allows the input value to be deferred, meaning that the displayed
          value may be different from the current input value, especially in
          situations where there's a lag or delay before rendering the updated
          value.
        </p>
      </div>
    );
  },
  useSyncExternalStore: () => {
    const todos = useSyncExternalStore(
      todosStore.subscribe,
      todosStore.getSnapshot
    );
    return (
      <div className="useSyncExternalStore-example card">
        <button className="btn" onClick={() => todosStore.addTodo()}>Add todo</button>
        <hr />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        <p>
          The <code>useSyncExternalStore</code> hook is used for reading and
          subscribing to external store updates in a way that supports
          concurrent rendering. It takes two arguments: a subscription function
          and a snapshot function. The subscription function is used to
          subscribe to changes in the store, while the snapshot function
          retrieves the current state from the store. When the store's state
          changes, the component will re-render with the new state.
        </p>
      </div>
    );
  },
};

const ContextComponent = () => {
  const value = useContext(MyContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Value:", value); // Log the value after the timer expires
    }, 3000); // Timer set to 3 seconds
    return () => clearTimeout(timer); // Clean up the timer
  }, [value]);
  return (
    <div className="useContext-example card">
      <p>{value}</p>
      <p>
        This component demonstrates the usage of useContext hook to access the
        value provided by the MyContext context. It renders the value obtained
        from the context.
      </p>
    </div>
  );
};
