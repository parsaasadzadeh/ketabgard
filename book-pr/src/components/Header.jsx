import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-indigo-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <i data-feather="book" className="w-8 h-8"></i>
              <h1 className="text-2xl font-bold">کتاب‌گرد</h1>
            </div>

            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition hover:text-indigo-200 ${isActive ? "bg-red-500 text-white px-3 py-1 rounded" : ""}`
                }
              >
                خانه
              </NavLink>


              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `transition hover:text-indigo-200 ${isActive ? "bg-red-500 text-white px-3 py-1 rounded" : ""}`
                }
              >
                درباره ما
              </NavLink>
              <NavLink
                to="/Books"
                className={({ isActive }) =>
                  `transition hover:text-indigo-200 ${isActive ? "bg-red-500 text-white px-3 py-1 rounded" : ""}`
                }
              >
                کتاب ها
              </NavLink>

              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `transition hover:text-indigo-200 ${isActive ? "bg-red-500 text-white px-3 py-1 rounded" : ""}`
                }
              >
                تماس با ما
              </NavLink>
              <NavLink
                to="/Questions"
                className={({ isActive }) =>
                  `transition hover:text-indigo-200 ${isActive ? "bg-red-500 text-white px-3 py-1 rounded" : ""}`
                }
              >
                سوالات متداول
              </NavLink>
            </nav>

            <div className="flex items-center space-x-4 space-x-reverse">
              <button className="p-2 rounded-full hover:bg-indigo-500 transition">
                <i data-feather="shopping-cart"></i>
              </button>
              <button className="p-2 rounded-full hover:bg-indigo-500 transition">
                <i data-feather="user"></i>
              </button>
              <button className="md:hidden p-2">
                <i data-feather="menu"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
