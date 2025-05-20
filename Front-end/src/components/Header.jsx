import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-dark  fw-bold">
        <NavLink to="/" className="navbar-brand">
          <h3 className="text-warning  mx-4 fw-bold">Frontend User</h3>
        </NavLink>

        <ul className="nav navbar m-auto">
          <li className="nav-item mx-4">
            <NavLink className="nav-link text-light" to="/">
              UserForm
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink className="nav-link text-light" to="/userlist">
              UserList
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
