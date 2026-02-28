// WICHTIG: Hier importieren wir deinen Counter
import AppComp1 from "./AppComp1";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full px-8 py-4 flex justify-between items-center">
      {/* 1. Bereich: Logo */}
      <div className="text-2xl font-black text-purple-600 cursor-pointer">
        MeinLogo.
      </div>

      {/* 2. Bereich: Navigation-Links */}
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        <li className="hover:text-purple-600 cursor-pointer transition-colors">
          Home
        </li>
        <li className="hover:text-purple-600 cursor-pointer transition-colors">
          Features
        </li>
      </ul>

      {/* 3. Bereich: Aktion (Hier ist jetzt dein Counter!) */}
      <div className="flex items-center gap-6">
        {/* Hier rufen wir einfach deine Komponente auf */}
        <AppComp1 />

        <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700 active:scale-95 transition-all">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
