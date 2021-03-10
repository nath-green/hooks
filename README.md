# hooks

Collection of hooks

- [useFocus](##useFocus)
- [useFocusOnMount](##useFocusOnMount)

## useFocus

Returns `ref` and `setFocus()` to be used on an element which will receive event based focus.

```js
import { useFocus } from '@nath-green/hooks';

const { ref, setFocus } = useFocus();

<button onClick={() => setFocus()}>Focus heading</button>
<h1 ref={ref} tabIndex="-1">Focus on me</h1>
```

### Use case

When a modal has opened and the focus should be set to the close button.

## useFocusOnMount

Returns a `ref` to be used on an element which will receive focus on mount.

```js
import { useFocusOnMount } from '@nath-green/hooks';

const focusRef = useFocusOnMount();

<button ref={focusRef}>Focused</button>
```

### Use case

When a modal has opened and the focus should be set to the close button.
