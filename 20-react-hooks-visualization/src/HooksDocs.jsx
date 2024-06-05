const HooksDocs = {
  useState: {
    description:
      "useState is a Hook that allows you to have state variables in functional components.",
    code: `
const [count, setCount] = useState(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-state.html",
  },
  useEffect: {
    description:
      "useEffect is a Hook that allows you to perform side effects in functional components.",
    code: `
const [data, setData] = useState(null);

useEffect(() => {
  const timer = setTimeout(() => {
    setData("Fetched Data");
  }, 2000);
  return () => clearTimeout(timer);
}, []);

return (
  <div>
    <p>Data: {data ? data : "Loading..."}</p>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-effect.html",
  },
  useContext: {
    description:
      "useContext is a Hook that lets you subscribe to React context without introducing nesting.",
    code: `
const MyContext = createContext();

const MyComponent = () => {
  return (
    <MyContext.Provider value="Hello from Context!">
      <ContextComponent />
    </MyContext.Provider>
  );
};

const ContextComponent = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>;
};
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#usecontext",
  },
  useReducer: {
    description:
      "useReducer is a Hook that is usually preferable to useState when you have complex state logic.",
    code: `
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

return (
  <div>
    <p>Count: {state.count}</p>
    <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#usereducer",
  },
  useCallback: {
    description: "useCallback is a Hook that returns a memoized callback.",
    code: `
const [count, setCount] = useState(0);
const increment = useCallback(() => setCount(count + 1), [count]);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#usecallback",
  },
  useMemo: {
    description: "useMemo is a Hook that returns a memoized value.",
    code: `
const [count, setCount] = useState(0);
const doubleCount = useMemo(() => count * 2, [count]);

return (
  <div>
    <p>Count: {count}</p>
    <p>Double Count: {doubleCount}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#usememo",
  },
  useRef: {
    description:
      "useRef is a Hook that returns a mutable ref object whose .current property is initialized to the passed argument.",
    code: `
const inputRef = useRef(null);
const focusInput = () => {
  inputRef.current.focus();
};

return (
  <div>
    <input ref={inputRef} type="text" />
    <button onClick={focusInput}>Focus Input</button>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#useref",
  },
  useImperativeHandle: {
    description:
      "useImperativeHandle is a Hook that customizes the instance value that is exposed when using ref.",
    code: `
const inputRef = useRef(null);
const FancyInput = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} type="text" />;
});
const inputElement = useRef(null);

return (
  <div>
    <FancyInput ref={inputElement} />
    <button onClick={() => inputElement.current.focus()}>Focus Input</button>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#useimperativehandle",
  },
  useLayoutEffect: {
    description:
      "useLayoutEffect is a Hook that is identical to useEffect, but it fires synchronously after all DOM mutations.",
    code: `
const [color, setColor] = useState('red');
useLayoutEffect(() => {
  document.body.style.backgroundColor = color;
}, [color]);

return (
  <div>
    <button onClick={() => setColor('blue')}>Blue</button>
    <button onClick={() => setColor('red')}>Red</button>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#uselayouteffect",
  },
  useDebugValue: {
    description:
      "useDebugValue is a Hook that can be used to display a label for custom hooks in React DevTools.",
    code: `
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  useDebugValue(isOnline ? 'Online' : 'Offline');
  useEffect(() => {
    const timeout = setTimeout(() => setIsOnline(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  return isOnline;
}

const isOnline = useFriendStatus(1);

return (
  <div>
    <p>Friend is {isOnline ? 'Online' : 'Offline'}</p>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#usedebugvalue",
  },
  useId: {
    description: "useId is a Hook that returns a stable unique ID.",
    code: `
const id = useId();

return (
  <div>
    <label htmlFor={id}>Label</label>
    <input id={id} type="text" />
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#useid",
  },
  useTransition: {
    description:
      "useTransition is a Hook that lets you update the state without blocking the UI.",
    code: `
const [isPending, startTransition] = useTransition();
const [count, setCount] = useState(0);

const handleClick = () => {
  startTransition(() => {
    setCount(count + 1);
  });
};

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={handleClick}>Increment</button>
    {isPending && <p>Loading...</p>}
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#usetransition",
  },
  useDeferredValue: {
    description:
      "useDeferredValue is a Hook that lets you defer re-rendering a non-urgent part of the UI.",
    code: `
const [value, setValue] = useState('');
const deferredValue = useDeferredValue(value);

return (
  <div>
    <input value={value} onChange={(e) => setValue(e.target.value)} />
    <p>Deferred Value: {deferredValue}</p>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#usedeferredvalue",
  },
  useSyncExternalStore: {
    description:
      "useSyncExternalStore is a Hook that lets you subscribe to an external store.",
    code: `
const store = {
  state: 0,
  listeners: new Set(),
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },
  increment() {
    this.state++;
    this.listeners.forEach(listener => listener());
  }
};

const useStore = () => {
  return useSyncExternalStore(
    store.subscribe.bind(store),
    () => store.state
  );
};

const state = useStore();

return (
  <div>
    <p>State: {state}</p>
    <button onClick={() => store.increment()}>Increment</button>
  </div>
);
    `,
    link: "https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore",
  },

};

export default HooksDocs;
