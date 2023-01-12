# NSW Design System React Library

This is adapted from the original [NSW Design System React Library](https://github.com/digitalnsw/nsw-design-system-react) but re-written in TypeScript and removed the global client side JavaScript.

## Install

```bash
npm install @shadowsonata/nsw-ds-react
```

Add the styles separately in your main app file entry:

```js
import "nsw-design-system/dist/css/main.css";
```

## Usage

Storybook coming soon... In the meantime you can use the storybook code in the repository.
Refer to individual components' usage in [Storybook](https://digitalnsw.github.io/nsw-design-system-react)

Here's how you import the component:

```tsx
import React from "react";

import { Callout } from "nsw-ds-react";

function Example() {
  return (
    <Callout title="Title of callout">
      <p>Description of callout</p>
    </Callout>
  );
}
```

## API Update

(Coming soon)

## License

MIT
