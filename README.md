# NSW Design System React Library

This is adapted from the original [NSW Design System React Library](https://github.com/digitalnsw/nsw-design-system-react) but re-written in TypeScript and removed the global client side JavaScript.

## Install

```bash
npm install nsw-ds-react nsw-design-system
```

Add the styles separately in your main `App.js` file

```js
import "nsw-design-system/dist/css/main.css";
```

In your `index.html` document add this line of code inside the `<head>` tag. Or install [icon](https://www.npmjs.com/package/material-icons) and [font](https://www.npmjs.com/package/@fontsource/public-sans) from npm

```
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Usage

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

## License

MIT
