# hooks

Collection of hooks

- [useFocusOnMount](##useFocusOnMount)

## useFocusOnMount

Returns a `ref` to be used on an element which will receive focus on mount.

```js
import { useFocusOnMount } from '@nath-green/hooks';

const focusRef = useFocusOnMount();

<button ref={focusRef}>Focused</button>
```

### Use case

When a modal has opened and the focus should be set to the close button.
