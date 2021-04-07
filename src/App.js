import './App.css';
import LoadingPage from './LoadingPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  TableDetail  from "./TableDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/tableDetail" component={TableDetail}></Route>
          <Route path="/" component={LoadingPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
export default App;
