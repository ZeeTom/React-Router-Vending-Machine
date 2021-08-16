import { Link } from "react-router-dom";

function VendingMachine() {


  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      <ul>
        <li><Link exact to="/funyuns">Funyuns</Link></li>
        <li><Link exact to="/cheetos">Cheetos</Link></li>
        <li><Link exact to="/sourpatch">Sour Patch</Link></li>
      </ul>
    </div>
  )
}

export default VendingMachine;
