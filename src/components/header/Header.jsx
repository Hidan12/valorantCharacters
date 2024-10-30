import { SearchNav } from "../search/Search"
import logo from "../../assets/images/valorantLogo.png"
import './styleHeader.css'
import { useDispatch, useSelector } from "react-redux"
import { setCharacters, setRoleCharacters, setMyTeam } from "../../store/actions/characterActions"
import { useEffect } from "react"


function HeaderNav ({handlerCLickMyTeam}){
  
  const {characters} = useSelector(state => state.charactersStore)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(setCharacters())  
  },[])

  useEffect (()=>{
    dispatch(setRoleCharacters(characters))
    dispatch(setMyTeam(characters))
  },[characters])


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