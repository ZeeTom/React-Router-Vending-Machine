import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./Components/VendingMachine";
import Funyuns from "./Components/Funyuns";
import Cheetos from "./Components/Cheetos";
import SourPatch from "./Components/SourPatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path ="/">
          <VendingMachine />
        </Route>
        <Route exact path ="/funyuns">
          <Funyuns />
        </Route>
        <Route exact path ="/cheetos">
          <Cheetos />
        </Route>
        <Route exact path ="/sourpatch">
          <SourPatch />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
