import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../public/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const ExploreMenu = () => {
    navigate("/exploreMenu");
  };

  return (
    <>
      <nav className="bg-[#211f20] w-screen">
        <div className="logo">
          <img src={logo} alt="logo" /> {/* Updated logo source */}
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
            <Link to={"/cartadd"}>CART</Link>
          </div>
          <button className="menuBtn" onClick={ExploreMenu}>
            {" "}
            Explore Menu
          </button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { data } from "../restApi.json";
// import { Link } from "react-scroll";
// import { GiHamburgerMenu } from "react-icons/gi";
// // import { AiOutlineShoppingCart } from "react-icons/ai";

// import logo from "../../public/logo.png";

// // logout function using firebase
// import SignIn from "../Pages/Login/SignIn";
// import { app } from "../firebase";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// const auth = getAuth(app);

// const Navbar = () => {
//   const [show, setShow] = useState(false);

//   const navigate = useNavigate();

//   // const [user, setUser] = useState(null);
//   // useEffect(() => {
//   //   onAuthStateChanged(auth, (user) => {
//   //     if (user) {
//   //       setUser(user);
//   //     } else {
//   //       console.log("logged Out");
//   //       setUser(null);
//   //     }
//   //   });
//   // }, []);
//   // if (user === null) {
//   //   navigate("/");
//   // }
//   const ExploreMenu = () => {
//     navigate("/exploreMenu");
//   };

//   return (
//     <>
//       <nav>
//         <div className="logo">
//           <img src="logo.png" alt="logo" />
//         </div>
//         <div className={show ? "navLinks showmenu" : "navLinks"}>
//           <div className="links">
//             {data[0].navbarLinks.map((element) => (
//               <Link
//                 to={element.link}
//                 spy={true}
//                 smooth={true}
//                 duration={500}
//                 key={element.id}
//               >
//                 {element.title}
//               </Link>
//             ))}
//             <Link to="/cartadd">Cart</Link>
//           </div>
//           {/* <AiOutlineShoppingCart /> */}
//           <button className="menuBtn" onClick={() => ExploreMenu}>
//             Explore Menu
//           </button>
//         </div>
//         <div className="hamburger" onClick={() => setShow(!show)}>
//           <GiHamburgerMenu />
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
