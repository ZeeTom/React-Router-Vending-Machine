import { Link } from "react-router-dom";

function Cheetos() {
  return (
    <div className="Cheetos">
      <h1>Cheetos</h1>
      <Link exact to='/'>Home</Link>
    </div>
  )
}

export default Cheetos;
