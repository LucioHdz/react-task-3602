import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Selector = () => {

  const {users,setCurrentUserId}=useContext(AppContext);

  return (
    <ul className="flex flex-wrap justify-center gap-4 mt-4 bg-white shadow-lg rounded p-2">
      {users.map(
        (user,index)=>(
          <li key={index} >

            <button onClick={()=>setCurrentUserId(user.id)} >
              {user.name}
              </button>

          </li>
        )


      )}
    </ul>
  )
}

export default Selector