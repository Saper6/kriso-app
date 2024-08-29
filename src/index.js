import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

// Create the Redux store
const store = configureStore();

// Get the root DOM element
const container = document.getElementById("app");

// Create the root using React 18's createRoot
const root = createRoot(container);

// Render the application with Redux and Router providers
root.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>
);
