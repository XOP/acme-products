import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Support from "choom/lib/components/layout/Support";

import AppRouter from "../routes/AppRouter";
import store from "../redux/configure";

import { Header } from "../components/features/header/Header";
import { Footer } from "../components/features/footer/Footer";
import { Shell } from "../components/shared/shell/Shell";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Support>
          <Header />
          <FlexUnit fluid>
            <Shell space="1" as="main">
              <AppRouter />
            </Shell>
          </FlexUnit>
          <Footer />
        </Support>
      </Router>
    </Provider>
  );
};

export default App;
