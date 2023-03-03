# This is now depricated

We now offer a PostHog provider and hooks which makes setup easier and more reliable.

We recommend using [the approach outlined in our documentation](https://posthog.com/docs/integrate/third-party/next-js)

<hr/>

## Old notes

### V2.0 breaking changes

In v2.0.0 we moved PostHog to be a peer dependency so you can control which version of PostHog you use without needing changes to this integration.

### Install

`yarn add next-use-posthog`

### Usage

In `pages/_app.js` or `pages/_app.tsx`

#### JavaScript

```typescript
import { usePostHog } from "next-use-posthog";

const App = ({ Component, pageProps }) => {
  usePostHog("API_KEY", {
    api_host: "https://app.posthog.com",
  });

  return <Component {...pageProps} />;
};

export default App;
```

#### TypeScript

```typescript
import { usePostHog } from "next-use-posthog";
import { AppProps } from "next/app";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  usePostHog("API_KEY", {
    api_host: "https://app.posthog.com",
  });

  return <Component {...pageProps} />;
};

export default App;
```

#### Disable in development

```typescript
import { usePostHog } from "next-use-posthog";
import { AppProps } from "next/app";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  usePostHog("API_KEY", {
    api_host: "https://app.posthog.com",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.opt_out_capturing();
    },
  });

  return <Component {...pageProps} />;
};

export default App;
```

### Dependencies

- React
- Next.js
- posthog-js
