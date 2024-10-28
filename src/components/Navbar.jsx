import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className=" max-w-[1300px] mx-auto bg-green-200">Test</div>
    </div>
  );
};

export default Navbar;
