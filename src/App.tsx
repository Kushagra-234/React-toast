import "./App.css";
import useToast from "./hooks/use-toast";

function App() {
  const { ToastComponent, showToast } = useToast("top-right", 5);

  const showSuccess = () => {
    showToast({
      type: "success",
      message: "Action completed",
      description: "Your changes have been saved successfully.",
      theme: "dark",
      duration: 4000,
    });
  };

  const showInfo = () => {
    showToast({
      type: "info",
      message: "New update available",
      description: "Check out the latest version of your dashboard.",
      theme: "light",
      duration: 5000,
    });
  };

  const showWarning = () => {
    showToast({
      type: "warning",
      message: "Storage almost full",
      description: "Free up some space to avoid interruptions.",
      theme: "colored",
      duration: 5000,
    });
  };

  const showError = () => {
    showToast({
      type: "error",
      message: "Something went wrong",
      description: "We couldn't complete your request. Please try again.",
      theme: "dark",
      duration: 5000,
    });
  };

  const showCustom = () => {
    showToast({
      type: "success",
      message: "Custom themed toast",
      description: "You can fully control colors and sizes.",
      theme: "custom",
      customStyles: {
        bgColor: "#0f172a",
        timerColor: "#22c55e",
        timerHeight: "6px",
        titleColor: "#e5e7eb",
        titleSize: "18px",
        descriptionColor: "#9ca3af",
        descriptionSize: "14px",
        closeButtonColor: "#f97316",
        closeButtonSize: "18px",
      },
      duration: 6000,
    });
  };

  return (
    <div className="bt-root">
      <div className="bt-page">
        <header className="bt-header">
          <div className="bt-logo">Beautiful Toast</div>
          <nav className="bt-nav">
            <a href="#features">Features</a>
            <a href="#examples">Examples</a>
            <a
              href="https://www.npmjs.com/package/beautiful-toast"
              target="_blank"
              rel="noreferrer"
            >
              npm
            </a>
          </nav>
        </header>

        <main className="bt-main">
          <section className="bt-hero">
            <div className="bt-hero-text">
              <h1>Effortless, beautiful toast notifications.</h1>
              <p>
                Drop-in React hook for delightful toasts with themes, progress
                bar, icons and full customization.
              </p>
              <div className="bt-hero-actions">
                <button className="bt-btn bt-btn-primary" onClick={showSuccess}>
                  Show success toast
                </button>
                <button
                  className="bt-btn bt-btn-secondary"
                  onClick={showCustom}
                >
                  Show custom toast
                </button>
              </div>
              <code className="bt-code">
                {`const { ToastComponent, showToast } = useToast("top-right", 5);`}
              </code>
            </div>
            <div className="bt-hero-card">
              <h2>Quick install</h2>
              <code>$ npm i beautiful-toast</code>
              <p>Then import the hook and start firing toasts in seconds.</p>
            </div>
          </section>

          <section id="features" className="bt-section bt-section-grid">
            <div className="bt-section-title">
              <h2>Why Beautiful Toast?</h2>
              <p>Everything you need for modern, polished notifications.</p>
            </div>
            <div className="bt-grid">
              <div className="bt-card">
                <h3>Multi theme support</h3>
                <p>
                  Light, dark, colored and fully custom themes out of the box.
                </p>
              </div>
              <div className="bt-card">
                <h3>Position & limits</h3>
                <p>
                  Control screen position and maximum visible toasts easily.
                </p>
              </div>
              <div className="bt-card">
                <h3>Progress bar</h3>
                <p>
                  Built-in timer bar gives users clear feedback on duration.
                </p>
              </div>
              <div className="bt-card">
                <h3>Custom icons</h3>
                <p>Bring your own icons or use the defaults for each state.</p>
              </div>
            </div>
          </section>

          <section id="examples" className="bt-section">
            <div className="bt-section-title">
              <h2>Play with toasts</h2>
              <p>Trigger different variants and see how they behave.</p>
            </div>
            <div className="bt-button-row">
              <button className="bt-btn bt-success" onClick={showSuccess}>
                Success
              </button>
              <button className="bt-btn bt-info" onClick={showInfo}>
                Info
              </button>
              <button className="bt-btn bt-warning" onClick={showWarning}>
                Warning
              </button>
              <button className="bt-btn bt-error" onClick={showError}>
                Error
              </button>
              <button className="bt-btn bt-custom" onClick={showCustom}>
                Custom theme
              </button>
            </div>
          </section>
        </main>

        {ToastComponent}

        <footer className="bt-footer">
          <span>Made with React & Vite • beautiful-toast</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
