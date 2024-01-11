import { Link, Outlet } from "react-router-dom";

const BikeNavBar=()=>{
    return(
        <div>
            
          <nav className="navbar navbar-expand-lg " style={{backgroundColor:'grainsboro', color:'black'}} >
            
            <ul className="navbar-nav ">
                <li className="nav-item"><h2 style={{ fontStyle:'italic',fontWeight:'bold', marginBottom:'none',marginLeft:'10px',color:'#240a5e'  }} className="text-start " >bikerzzzParadise</h2></li>
               
                <li className="nav-item ms-5">
                    <Link className="nav-link"  to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/bikes'>Bikes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/scooters'>Scooters</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to='/evs'>Ev's</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  to='/bestsellers'>Bestseller's</Link>
                </li>
                <li className="nav-item " >
                    <Link className="nav-link" style={{marginLeft:'700px'}} to='/loginform'>Login  /</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link " to='/signup'>Sign-up</Link>
                </li>

            </ul>
          </nav>
          <Outlet/>
        </div>
    )
}
export default BikeNavBar;