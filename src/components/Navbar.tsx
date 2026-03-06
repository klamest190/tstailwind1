import { NavLink } from "react-router-dom";
import Button1 from "./Button1";

const Navbar = () => {
  const navClass =
    "px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition";

  const activeNavClass =
    "px-4 py-2 rounded-lg bg-gray-900 border border-gray-900 text-white transition";

  const getNavClass = (info: { isActive: boolean }) => {
    if (info.isActive) {
      return activeNavClass;
    }
    return navClass;
  };

  return (
    <nav className="max-w-4xl lg:max-w-5xl mx-auto mb-4">
      <div
        className="bg-white rounded-2xl shadow-sm border border-gray-200
        hover:shadow-md transition px-4 py-3"
      >
        <div className="flex items-center justify-between gap-3">
          {/* Navigation links */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <NavLink to="/" end className={getNavClass}>
              Journal
            </NavLink>

            <NavLink to="/crypto" className={getNavClass}>
              Crypto
            </NavLink>
          </div>

          {/* Login rechts */}
          <div className="flex-shrink-0">
            <Button1>Login</Button1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
