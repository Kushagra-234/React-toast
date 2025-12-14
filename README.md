# Beautiful Toast

Effortlessly create beautiful, customizable toast notifications for your React applications.

**NPM:** https://www.npmjs.com/package/beautiful-toast-kg

## Installation

```bash
npm i beautiful-toast-kg
```

## Features

- **Simple API** – just a single `useToast` hook.
- **Multiple positions** – `top-right`, `top-left`, `bottom-right`, `bottom-left`.
- **Themes** – `light`, `dark`, `colored`, and fully `custom`.
- **Progress bar** – built‑in timer bar for each toast.
- **Max toast limit** – control how many toasts can be visible at once.
- **Custom icons & styles** – override icon and theme details when needed.

## Quick start

**1. Import the hook**

```ts
import useToast from "beautiful-toast";
```

**2. Initialize in your component**

```tsx
function App() {
  const { ToastComponent, showToast } = useToast("bottom-right", 5);

  return (
    <div>
      {/* mount the toast container once */}
      {ToastComponent}

      {/* trigger toasts from anywhere in this component tree */}
      <button
        onClick={() =>
          showToast({
            type: "success",
            message: "Result successful",
            description: "Data from API was fetched",
            theme: "dark",
            duration: 5000,
          })
        }
      >
        Show success toast
      </button>
    </div>
  );
}
```

## Examples

All examples assume:

```ts
const { ToastComponent, showToast } = useToast("bottom-right", 5);
```

**Success toast**

```tsx
showToast({
  type: "success",
  message: "Result successful",
  description: "Data from API was fetched",
  theme: "dark",
  duration: 5000,
});
```

**Info toast**

```tsx
showToast({
  type: "info",
  message: "This is an info toast",
  theme: "light",
  duration: 5000,
});
```

**Warning toast**

```tsx
showToast({
  type: "warning",
  message: "This is a warning toast",
  theme: "colored",
  duration: 5000,
});
```

**Error toast**

```tsx
showToast({
  type: "error",
  message: "This is an error toast",
  theme: "dark",
  duration: 5000,
});
```

**Custom themed toast**

```tsx
showToast({
  type: "success",
  message: "This is a customised toast",
  description: "Data from API is being fetched",
  theme: "custom",
  customStyles: {
    bgColor: "beige",
    timerColor: "red",
    timerHeight: "15px",
    titleColor: "blue",
    titleSize: "18px",
    descriptionColor: "blue",
    descriptionSize: "16px",
    closeButtonColor: "red",
    closeButtonSize: "20px",
  },
  duration: 5000,
});
```

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome in the issues section.
