
# 🧠 React Interview Preparation Notes

## 1. Difference between Class Component and Functional Component

| Feature           | Class Component                        | Functional Component        |
| ----------------- | -------------------------------------- | --------------------------- |
| Syntax            | ES6 Class                              | JavaScript Function         |
| State             | Uses `this.state`                      | Uses `useState` Hook        |
| Lifecycle Methods | Uses predefined lifecycle methods      | Uses Hooks like `useEffect` |
| Performance       | Slightly slower due to binding         | Faster and simpler          |
| Example           | `class MyComp extends React.Component` | `function MyComp() {}`      |

---

## 2. What is a Higher-Order Component (HOC)?

A **Higher-Order Component** is a function that takes a component and returns a new component with additional functionality.

```jsx
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
};
```

Usage:

```jsx
const EnhancedComponent = withLogger(MyComponent);
```

---

## 3. Lifecycle of a React Component

### Class Component Lifecycle:

1. **Mounting:** `constructor()` → `render()` → `componentDidMount()`
2. **Updating:** `shouldComponentUpdate()` → `render()` → `componentDidUpdate()`
3. **Unmounting:** `componentWillUnmount()`

### Functional Component:

* Uses **Hooks**:

  * `useEffect(() => {}, [])` → acts like `componentDidMount`
  * `useEffect(() => {})` → acts like `componentDidUpdate`
  * Cleanup function in `useEffect` → acts like `componentWillUnmount`

---

## 4. Difference between useEffect and useLayoutEffect

| Hook              | Timing                | Use Case                               |
| ----------------- | --------------------- | -------------------------------------- |
| `useEffect`       | Runs **after** render | Side effects like API calls            |
| `useLayoutEffect` | Runs **before** paint | DOM measurements, synchronizing layout |

---

## 5. Difference between Context API & Redux

| Feature    | Context API                             | Redux                             |
| ---------- | --------------------------------------- | --------------------------------- |
| Purpose    | Pass data deeply without props drilling | State management across app       |
| Complexity | Simple                                  | More structured and scalable      |
| Setup      | Minimal                                 | Requires store, reducers, actions |
| Use Case   | Light theme/language context            | Complex app state handling        |

---

## 6. Context API Example

### Create Context

```jsx
const ThemeContext = React.createContext();
```

### Provide Context

```jsx
function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}
```

### Use Context

```jsx
function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}
```

---

## 7. Generator Function

A **Generator function** returns an iterator object using the `function*` syntax.

```js
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = counter();
console.log(gen.next().value); // 1
```

---

## 8. How do you optimize React?

* Use **React.memo** for component memoization.
* Use **useCallback / useMemo** for functions and computed values.
* Implement **lazy loading** with `React.lazy`.
* Avoid **inline functions** and unnecessary re-renders.
* Use **key** props efficiently in lists.

---

## 9. What is an Error Boundary?

A component that **catches JavaScript errors** in its child tree and displays a fallback UI.

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children; }
}
```

---

## 10. What are Props?

Props are **inputs** passed to components to make them dynamic.

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

---

## 11. What is useState?

A Hook to manage component **state**.

```jsx
const [count, setCount] = useState(0);
```

---

## 12. What is useMemo & useCallback?

| Hook          | Purpose                    |
| ------------- | -------------------------- |
| `useMemo`     | Caches **computed values** |
| `useCallback` | Caches **functions**       |

Example:

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedFn = useCallback(() => handleClick(id), [id]);
```

---

## 13. What is a Pure Component?

A component that re-renders **only when props/state change** (shallow comparison).

```jsx
class MyComponent extends React.PureComponent {}
```

---

## 14. Handling Forms in React

```jsx
const [value, setValue] = useState("");
<form onSubmit={(e) => e.preventDefault()}>
  <input value={value} onChange={(e) => setValue(e.target.value)} />
</form>
```

---

## 15. Making an API Request

```jsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(setData);
}, []);
```

---

## 16. What is Redux & Why is it used?

Redux is a **state management library** for predictable state handling using **actions, reducers, and store**.

---

## 17. What is useSelector & useReducer?

* `useSelector`: Access Redux store state.
* `useReducer`: Local alternative to Redux for state logic.

```jsx
const value = useSelector(state => state.counter);
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## 18. Use of Redux Toolkit

Simplifies Redux with built-in utilities like:

* `createSlice`
* `configureStore`
* `createAsyncThunk`

---

## 19. How React App is Bundled

Tools like **Webpack**, **Vite**, or **Parcel** bundle React code into optimized static files (`.js`, `.css`).

---

## 20. What is Virtual DOM? Why is it faster?

A **lightweight copy** of the real DOM stored in memory.
React updates the virtual DOM first, compares (diffs) it with the real DOM, and only updates changed nodes — this is **faster** than updating the entire real DOM.

---

## 21. What is Diffing and Reconciliation?

* **Diffing:** Compares old and new virtual DOM trees.
* **Reconciliation:** Updates only changed parts in the real DOM.

---

## 22. What is React Fabric?

**Fabric** is React Native’s new **concurrent rendering engine**, improving performance, responsiveness, and native interoperability.

---

## 23. Create a Store using Redux Toolkit

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
  },
});

export const { increment } = counterSlice.actions;
export const store = configureStore({ reducer: { counter: counterSlice.reducer } });
```

---

## 24. Handling Themes in React

Using Context:

```jsx
const ThemeContext = createContext();
const App = () => (
  <ThemeContext.Provider value={{ theme: 'dark' }}>
    <Child />
  </ThemeContext.Provider>
);
```

---

## 25. What is SSR & SSG?

| Type                         | Description                            | Example              |
| ---------------------------- | -------------------------------------- | -------------------- |
| SSR (Server-Side Rendering)  | Rendered at request time on the server | `getServerSideProps` |
| SSG (Static Site Generation) | Pre-rendered at build time             | `getStaticProps`     |

---

## 26. Types of Storage in Web Apps

* **LocalStorage:** Persistent storage.
* **SessionStorage:** Clears when tab closes.
* **Cookies:** Small data sent with HTTP requests.
* **IndexedDB:** For structured large data.

---

## 27. What is BEM Methodology in CSS?

**Block Element Modifier** — helps write structured CSS.

```css
/* Block: card, Element: title, Modifier: large */
.card__title--large { font-size: 2rem; }
```


> **“React Router v6 Interview Questions”** (after the previous routing section).

---

## 29. 🚦 React Router v6 Interview Questions

### 1️⃣ What are the key differences between React Router v5 and v6?

| Feature          | v5                            | v6                                                       |
| ---------------- | ----------------------------- | -------------------------------------------------------- |
| Route definition | `<Switch>`                    | `<Routes>`                                               |
| Route component  | `component` or `render` props | `element` prop                                           |
| Redirect         | `<Redirect>`                  | `useNavigate()` or `<Navigate />`                        |
| Nested routes    | Manually configured           | Built-in via `<Outlet>`                                  |
| Route matching   | Partial by default            | Exact by default                                         |
| Hooks            | Limited (`useHistory`)        | Modern hooks (`useNavigate`, `useLocation`, `useParams`) |

---

### 2️⃣ How does the `<Routes>` component work in v6?

* Replaces `<Switch>` from v5.
* It **renders the first matching route exclusively**.
* Must contain only `<Route>` or `<React.Fragment>` elements.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

### 3️⃣ What is the purpose of `<Outlet>` in React Router v6?

Used for **nested routing**, where the parent route renders child components.

```jsx
<Route path="dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

**Dashboard.jsx**

```jsx
import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
}
```

---

### 4️⃣ How do you navigate programmatically in v6?

Use the `useNavigate()` hook instead of `useHistory()`.

```jsx
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>Go to About</button>;
}
```

---

### 5️⃣ How do you implement protected (private) routes in v6?

Use a wrapper that checks authentication and returns `<Navigate />` if unauthorized.

```jsx
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("token");
  return isAuth ? children : <Navigate to="/login" />;
}


// Usage
<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
```

---

### 6️⃣ How do you handle route parameters and query strings in v6?

**Parameters:**

```jsx
<Route path="/user/:id" element={<User />} />
const { id } = useParams();
```

**Query strings:**

```jsx
const [params] = useSearchParams();
const page = params.get("page");
```

---

### 7️⃣ How can you use `Loader` and `Action` in React Router v6.4+?

They allow **data fetching and mutation** to be handled directly in route definitions.

```jsx
<Route
  path="/users"
  loader={async () => fetch("/api/users").then(res => res.json())}
  element={<Users />}
/>
```

Inside component:

```jsx
import { useLoaderData } from "react-router-dom";
const users = useLoaderData();
```

---

### 8️⃣ What is `createBrowserRouter` in React Router v6.4+?

It’s a new **data router API** for defining routes with loaders, actions, and error elements.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

<RouterProvider router={router} />;
```

---

### 9️⃣ How do you handle error pages in v6.4+ routers?

Define an `errorElement` in the route configuration.

```jsx
{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
}
```

---

### 🔟 How do you lazy load routes in v6?

Use `React.lazy()` and `Suspense`.

```jsx
const About = React.lazy(() => import("./About"));

<Routes>
  <Route path="/about" element={
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  } />
</Routes>
```

---

✅ **Key Hooks in React Router v6:**

* `useNavigate()`
* `useParams()`
* `useLocation()`
* `useSearchParams()`
* `useLoaderData()`

---

