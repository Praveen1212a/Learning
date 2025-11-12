````markdown
# React & React Native Interview Questions

---

## 🧠 React (Core Concepts)

### 1. Difference between Class Component and Functional Component
- **Class Component** uses ES6 classes, `this` keyword, and lifecycle methods.
- **Functional Component** uses plain JavaScript functions with React Hooks (`useState`, `useEffect`, etc.).
- **Example:**

```jsx
// Class Component
class Example extends React.Component {
  state = { count: 0 };
  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>;
  }
}

// Functional Component
function Example() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
````

---

### 2. What is a Higher-Order Component (HOC)?

A **Higher-Order Component** is a function that takes a component and returns a new component with additional props or functionality.

```jsx
const withLogger = (WrappedComponent) => (props) => {
  console.log("Props:", props);
  return <WrappedComponent {...props} />;
};
```

---

### 3. Lifecycle of a React Component

* **Mounting:** `constructor`, `getDerivedStateFromProps`, `render`, `componentDidMount`
* **Updating:** `shouldComponentUpdate`, `getDerivedStateFromProps`, `render`, `componentDidUpdate`
* **Unmounting:** `componentWillUnmount`

---

### 4. Difference between `useEffect` and `useLayoutEffect`

| Feature   | useEffect                    | useLayoutEffect                 |
| --------- | ---------------------------- | ------------------------------- |
| Execution | After paint (asynchronously) | Before paint (synchronously)    |
| Use case  | Fetching data, side effects  | DOM measurement, layout updates |

---

### 5. Difference between Context API & Redux

| Feature        | Context API            | Redux                              |
| -------------- | ---------------------- | ---------------------------------- |
| Purpose        | Prop drilling solution | State management library           |
| Data Flow      | One-way                | One-way                            |
| Boilerplate    | Minimal                | High                               |
| Async handling | No built-in support    | Uses middleware like `redux-thunk` |

---

### 6. What is `useRef`?

`useRef` creates a mutable object to store values across renders (commonly used to access DOM elements).

```jsx
const inputRef = useRef(null);
useEffect(() => inputRef.current.focus(), []);
```

---

### 7. Have you created a custom hook?

Custom hooks allow logic reuse across components.

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  return data;
}
```

---

### 8. Generator Function

A generator function yields multiple values using `yield` and can be paused/resumed.

```js
function* counter() {
  let i = 0;
  while (true) yield i++;
}
```

---

### 9. How do you optimize React?

* Use `React.memo` and `useMemo`
* Lazy load components
* Avoid anonymous functions in JSX
* Split code via dynamic imports
* Minimize re-renders using keys and dependency arrays

---

## 📱 React Native

### 1. What is AppState and why we use it?

Used to detect the app’s state (`active`, `background`, `inactive`).

```js
import { AppState } from 'react-native';
AppState.addEventListener('change', nextState => console.log(nextState));
```

---

### 2. How does the React Native bridge work?

* JavaScript runs in a separate thread.
* Communication happens via an **asynchronous bridge** (JS <-> Native).
* New architecture replaces it with **JSI (JavaScript Interface)** for direct access — faster and more efficient.

---

### 3. Styling in React Native vs CSS

* Uses **Flexbox** for layout but lacks selectors and pseudo-classes.
* No cascading — styles are JS objects.
* Units are **density-independent pixels (dp)**.

---

### 4. Role of `FlatList`

Efficiently renders large lists using lazy loading and recycling views.

Use `FlatList` instead of `ScrollView` when you have:

* Large datasets
* Dynamic item rendering
* Infinite scroll or pagination

---

### 5. Handling Navigation

Popular libraries:

* `react-navigation`
* `react-native-navigation`
* `react-native-router-flux`

---

### 6. Platform-specific Code

* Use `Platform.OS` (`'ios'` or `'android'`)
* Use file extensions like `Component.ios.js` or `Component.android.js`

---

### 7. What is GestureHandler?

A performant gesture system (`react-native-gesture-handler`) to handle complex gestures like swipes, pan, and pinch without blocking UI thread.

---

### 8. What is SafeAreaView?

Prevents UI elements from overlapping with notches, status bars, and home indicators.

---

### 9. What is AppDelegate?

iOS entry point for app lifecycle methods written in Swift/Objective-C.

---

### 10. FlatList Optimization

* Set `initialNumToRender`
* Use `keyExtractor`
* Implement `getItemLayout`
* Avoid inline functions
* Use `PureComponent` or `React.memo`
* Paginate data on scroll

---

### 11. How do you optimize a mobile app?

* Minimize re-renders
* Use Hermes engine for JS performance
* Optimize images
* Cache API responses
* Compress bundle size
* Use native modules for heavy tasks

---

### 12. Securely Storing Credentials

Use:

* `react-native-keychain`
* `SecureStore` (Expo)
* Platform Keychain/Keystore

---

### 13. What is Debounce and Throttle?

* **Debounce:** Executes after a delay since last call.
* **Throttle:** Executes at fixed intervals.

---

### 14. Can ScrollView handle nested scrollable elements?

No, not efficiently. You must use `nestedScrollEnabled={true}`.

---

### 15. TensorFlow in React Native

Yes, with **TensorFlow Lite** or **tfjs-react-native** for on-device ML tasks like image classification.

---

### 16. Local Notifications

React Native supports local notifications via:

* Third-party: `react-native-push-notification`
* Native iOS/Android modules (requires setup)

---

### 17. Custom Native Module for Audio

Yes, can create native modules in Java/Kotlin and Swift to play audio.

---

### 18. Live Push Updates without Store Deployment

Yes, using **CodePush** (via Microsoft App Center) or **Expo OTA updates**.

---

### 19. OpenCV, VideoProcessing, MediaPipe

Possible via native modules or bridging — not part of React Native core.

---

### 20. Expo vs CLI

| Feature        | Expo    | CLI            |
| -------------- | ------- | -------------- |
| Setup          | Easier  | Manual         |
| Native Modules | Limited | Full access    |
| OTA Updates    | Yes     | Requires setup |
| Build Process  | Managed | Customizable   |

---

### 21. New Architecture

* Uses **Fabric (UI layer)** and **TurboModules (Native layer)**.
* Removes bridge bottleneck.
* Direct JS-Native communication via **JSI**.
* Improves performance and memory usage.

---

### 22. Async Storage

Persistent key-value storage system (similar to `localStorage`).

```js
import AsyncStorage from '@react-native-async-storage/async-storage';
await AsyncStorage.setItem('token', 'abc123');
```

---

### 23. Error Identification

* Use `Flipper` for logs
* `Sentry` or `Firebase Crashlytics`
* Try/catch and global error handlers

---

### 24. Monitoring API Requests

* Network tab in Flipper
* Custom interceptors in `axios`
* Charles Proxy or Wireshark

---

### 25. SSL Pinning

Ensures communication only with trusted servers.
Libraries:

* Android: `OkHttp3`
* iOS: `Alamofire`
  Requires embedding certificate and validating during HTTPS handshake.

---

### 26. Implementing Native Methods

* **Android:** Create a native module in Java/Kotlin extending `ReactContextBaseJavaModule`.
* **iOS:** Use Swift/Objective-C bridging header and export using `RCT_EXPORT_METHOD`.

---

## ⚛️ Redux

### 1. What is Redux?

Predictable state management library using single global store.

---

### 2. Core Principles

* Single source of truth
* State is read-only
* Changes via pure functions (reducers)

---

### 3. Redux Flow

`Action → Reducer → Store → UI`

---

### 4. Middleware in Redux

Used for async tasks or logging.
Example: `redux-thunk`, `redux-saga`.

---

### 5. Redux vs Context API

| Aspect      | Redux         | Context API          |
| ----------- | ------------- | -------------------- |
| Use Case    | Complex state | Simple global data   |
| Performance | Optimized     | May cause re-renders |
| Debugging   | DevTools      | Basic                |
| Async       | Supported     | Manual               |

---

### 6. How to Optimize Redux App

* Use `Reselect` for memoized selectors
* Normalize state structure
* Use `useSelector` wisely
* Split reducers
* Lazy load reducers if needed

---

## 🌐 Offline-First App

### 1. Handling Offline Mode

* Use **Redux Persist** or **AsyncStorage** for caching
* Show offline UI indicators
* Queue failed requests and replay when back online

---

### 2. Popular Libraries

* `@react-native-community/netinfo`
* `redux-persist`
* `react-query` with caching

---

### 3. Detecting Connectivity

```js
import NetInfo from '@react-native-community/netinfo';
NetInfo.addEventListener(state => console.log(state.isConnected));
```

---

### 4. Data Sync Strategy

* Maintain local cache
* Detect reconnection
* Sync pending requests to backend

---

### 5. Handling Images & Files Offline

* Cache images using `react-native-fast-image`
* Use file system APIs to store temporary files
---
## Android Specific

### What is the Android Activity Lifecycle?

The Android activity lifecycle consists of several key methods:

- `onCreate`
- `onStart`
- `onResume`
- `onPause`
- `onStop`
- `onDestroy`

These methods are similar to lifecycle hooks in React Native, managing the state and behavior of an activity as it moves through its lifecycle.

---

## Publishing to the Play Store

### What are the key steps in publishing an app to the Play Store?

1. Sign the APK or App Bundle.
2. Set version codes and version names.
3. Upload the build to the Google Play Console.
4. Provide app details (description, screenshots, icons, etc.).
5. Roll out the release to production.
7. key store shoule match always or else playconsole will denay it

---

## Debugging & QA

### How do you debug React Native apps on Android and iOS?

- Use **Logcat** for Android logs.
- Use **Flipper** or **React Native Debugger** for JavaScript inspection, network tracking, and performance profiling.
- Use **Xcode** for iOS debugging.

---

## Memory Leak Detection & Fixes

### How do you detect and fix memory leaks in a React Native app?

**Detection:**

- Use Flipper Memory plugin, React DevTools Profiler, or platform tools like LeakCanary (Android) and Instruments (iOS) to spot increasing memory usage or uncollected objects.

**Fixing:**

- Clean up event listeners, timers, and subscriptions in `useEffect` cleanup functions.
- Cancel ongoing API calls when components unmount.
- Avoid stale closures.
- Ensure screens unmount properly to free memory.

---
