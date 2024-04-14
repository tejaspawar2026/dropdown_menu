import { useState } from "react";
import profile from "../assets/images/profile.jpg";
import { useRef } from "react";
import { useEffect } from "react";

const App = () => {
  const menus = ["Profile", "Settings", "Support", "Logout"];

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && imgRef.current) {
        if (
          !menuRef.current.contains(e.target) &&
          !imgRef.current.contains(e.target)
        ) {
          setOpen(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen justify-center bg-gray-200 pt-16">
      <div className="relative">
        <img
          ref={imgRef}
          onClick={() => setOpen(!open)}
          src={profile}
          alt="profile"
          className="h-20 w-20 cursor-pointer rounded-full border-4 border-gray-300 object-cover"
        />

        {open && (
          <div className="absolute -left-14 top-24 w-52 bg-white p-4 shadow-lg">
            <ul>
              {menus.map((menu) => (
                <li
                  ref={menuRef}
                  onClick={() => setOpen(false)}
                  key={menu}
                  className="cursor-pointer rounded p-2 text-lg hover:bg-gray-200"
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
