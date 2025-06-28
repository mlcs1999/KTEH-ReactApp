// rfce - react functional component with export
// rafce - react functional component with export and arrow function
import React from 'react'

interface NavBarProps {
  cartNum: number;
}

// : React.FC<NavBarProps>
function NavBar({cartNum}: NavBarProps) {
  return (
    <div className="navBar">
        <a href="">My Store</a>
        <p className="cart-num">{cartNum}</p>
    </div>
  )
}

export default NavBar