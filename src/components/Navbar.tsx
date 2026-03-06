import Button1 from "./Button1";

const Navbar = () => {
  return (
    <nav className="max-w-4xl lg:max-w-5xl mx-auto mb-4">
      <div
        className="bg-white rounded-2xl shadow-sm border border-gray-200
        hover:shadow-md transition px-4 py-3"
      >
        <div className="flex items-center justify-between gap-3">
          {/* Navigation links */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <button
              className="px-4 py-2 rounded-lg bg-gray-100 border border-gray-200
              text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition"
            >
              Journal
            </button>

            <button
              className="px-4 py-2 rounded-lg bg-gray-100 border border-gray-200
              text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition"
            >
              Crypto
            </button>
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
