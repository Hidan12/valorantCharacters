import { SearchNav } from "../search/Search"
import logo from "../../assets/images/valorantLogo.png"
import './styleHeader.css'
  
  function HeaderNav ({handlerCLickMyTeam}){
    return(
      <>
        <div className='container-header'>
          <div className="flex w-5/6  h-full justify-between items-center">
            <div className="w-[10%] h-full">
              <img className="w-full h-full object-contain" src={logo} alt="" />
            </div>
            <button onClick={()=> handlerCLickMyTeam()} className="text-red-500">My Team</button> 
          </div>
        </div>
      </>
    )
  }

  export {HeaderNav}