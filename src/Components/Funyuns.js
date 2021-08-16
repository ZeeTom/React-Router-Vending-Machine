import { Link } from "react-router-dom";

function Funyuns() {
  return (
    <div className="Funyuns">
      <h1>Funyuns</h1>
      <Link exact to='/'>Home</Link>
    </div>
  )
}

export default Funyuns;
