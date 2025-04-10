import { useContext } from "react"
import { AppContext } from "../context/AppContext"








const Header = () => {
  const {currentUser} = useContext(AppContext);
  return (
    <header className=" bg-stone-800 text-white text-end px-4 py-2 text-2xl shadow">
      Hola {currentUser.name}
      </header>
  )
}

export default Header