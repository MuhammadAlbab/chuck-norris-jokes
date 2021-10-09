import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "../router/routes";
import Header from "../components/Header";
import Loading from "../components/Loading";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          {Routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
