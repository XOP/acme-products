import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { FlexUnit, Support } from "choom-react";

import AppRouter from "../routes/AppRouter";
import store from "../redux/configure";

import { Header } from "../components/features/header/Header";
import { Footer } from "../components/features/footer/Footer";
import { Shell } from "../components/shared/shell/Shell";

import { ThemeProvider } from "choom-react/lib/theme";

import theme from "choom-theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider value={{ ...theme, ...{ borderSizeRegular: "5px" } }}>
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
      </ThemeProvider>
    </Provider>
  );
};

export default App;
