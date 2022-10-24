import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
const container = document.getElementById("app");
const root = createRoot(container);
const store = configureStore();

root.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>
);
