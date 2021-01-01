import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { About } from "./containers/About/About.container";
import { Contacts } from "./containers/Contacts/Contacts.container";
import { Home } from "./containers/Home/Home.container";
import { Projects } from "./containers/Projects/Projects.container";
import { References } from "./containers/References/References.container";
import { WorkExp } from "./containers/WorkExp/WorkExp.container";

export function Routing() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/projects" component={Projects} />
      <Route path="/references" component={References} />
      <Route path="/workexp" component={WorkExp} />
      <Route path="/certs" component={Home} />
      <Route path="/technologies" component={Home} />
      <Route path="/books" component={Home} />

      <Route path="*">
        <h1>
          <b>
            <i>404 NOT FOUND</i>
          </b>
        </h1>
        <NavLink to="/">Вернуться на главную</NavLink>
      </Route>
    </Switch>
  );
}
