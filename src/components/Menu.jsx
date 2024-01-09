import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
function Menu()
{
  const cartlength = useSelector (state=>state.carts.value.length)
  return<>
   <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="#">ShoppingApp</Link>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/">Home &nbsp;<span className="glyphicon glyphicon-log-in"></span></Link></li>
      <li><Link to="/cart">cart:{cartlength}&nbsp;&nbsp;<span className="glyphicon glyphicon-user"></span></Link></li>
    </ul>
  </div>
</nav>
  </>
}
export default Menu