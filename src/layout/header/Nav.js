import Link from "next/link";
import { Accordion } from "react-bootstrap";
import Menu from "./Menu";
const Nav = ({ singleMenu }) => {
  return (
    <nav className="main-menu navbar-expand-lg ">
      <Accordion>
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link legacyBehavior href="/">
              <a>
                {/*//TODO: Change this img for the logo */}
                <img
                  src="assets/images/logos/logo.png"
                  alt="Logo"
                  title="Logo"
                />
              </a>
            </Link>
          </div>
          {/* Toggle Button */}

        </div>
        
      </Accordion>
    </nav>
  );
};
export default Nav;
