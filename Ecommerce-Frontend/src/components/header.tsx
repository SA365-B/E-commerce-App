import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag, FaSignInAlt,FaSignOutAlt,FaUser } from 'react-icons/fa';
import { useState } from 'react';

const user = { _id: "gdgf", role :"admin"}; // Simulate logged-out user

const Header = () => {


  const [isOpen,setIsOpen] = useState<boolean>(false);
  return (
    <nav className="header-nav">
      <Link to="/">Home</Link>
      <Link to="/search"><FaSearch /></Link>
      <Link to="/cart"><FaShoppingBag /></Link>

      {user?._id ? (
        <> 
        {/* /* You can add a Profile or Logout link here for logged-in users */}
        <button onClick={()=>setIsOpen((prev)=>!prev)}>
          <FaUser/>
           </button>

           <dialog open={isOpen}>
            <div>
              {
                user.role === "admin" && (
                  <Link to= "/admin/dashboard">Admin</Link>
                )
              }
            <Link to = "/orders">
            Orders</Link>
            <button>
              <FaSignOutAlt/>
            </button>


            </div>
           </dialog>
           </>
      ) : (
        <Link to="/login">
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
