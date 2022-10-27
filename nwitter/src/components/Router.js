
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "router/Auth";
import Home from "router/Home";

const AppRouter = ({isLoggeIn}) => {
return (
    <Router>
        <Switch>
            {isLoggeIn ?( 
            <>
            <Route exact path="/">
                <Home />    
            </Route> 
            </>) :  (
            <Route exact path="/">
                <Auth />
            </Route>
                )}
        </Switch>
    </Router>
);
};

export default AppRouter;