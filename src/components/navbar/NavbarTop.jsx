import { useEffect } from "react";
import { useState } from "react"
import Navbarcss from "./Navbarcss"
import NavbarBS from "./NavbarBS"

const Navbar = () => {
  const [mob, setMob] = useState(false);
  const isMob = () => {
    window.innerWidth < 991 ? setMob(true) : setMob(false);

  }
  useEffect(() => {
    window.addEventListener("resize", isMob);
    return () => {
      window.removeEventListener("resize", isMob);
    }
  }, [])

  return (
    <>
      {mob ? <NavbarBS /> : <Navbarcss />}
    </>
  )
}

export default Navbar;
