import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksMap = links.map(link =>{
    return <a href={"#" + link} key={link}>{link}</a>
  })
    

  return <nav>
    {linksMap}
    {/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
