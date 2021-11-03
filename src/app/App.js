import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "../routes/AppRouter";

import styles from "./app.module.css";

const App = () => {
  return (
    <Router>
      <div className={styles.root}>
      <AppRouter />
      </div>
    </Router>
  );
};

export default App;
