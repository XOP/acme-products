import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "../routes/AppRouter";
import store from "../redux/configure";

import styles from "./app.module.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.root}>
          <AppRouter />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
