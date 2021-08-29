import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from './Component/Main'

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Main}/>
			</Switch>
		</Router>
	);
}

export default App;
