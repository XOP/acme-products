import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "../routes/AppRouter";
import store from "../redux/configure";

import styles from "./app.module.css";

import { Header } from "../components/features/header/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className={styles.root}>
          <AppRouter />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
