import { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import "./App.css";

const LoginPage = lazy(() => import("./Components/Login"));
const SignupPage = lazy(() => import("./Components/Signup"));
const Home = lazy(() => import("./Components/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="App">
            <Loader margin />
          </div>
        }
      >
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/signup" exact>
              <SignupPage />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
