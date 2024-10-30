import { useDispatch, useSelector } from "react-redux";
import { SearchNav } from "../search/Search"
import { selectRole } from "../../store/actions/characterActions";
import './filtredStyle.css'

const ButtonImage = ()=>{
    const {roleCharacters, roleSelect} = useSelector(state => state.charactersStore)
    const dispatch = useDispatch()
    return(
        <div className="button-image">
            {roleCharacters.map(rol => (
                <button key={rol.displayName} onClick={()=>{dispatch(selectRole(rol))}} className={`container-button-rol ${roleSelect == rol ?"from-pink-500 to-orange-500" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full " viewBox="0 0 100 100">
                        <image href={rol.displayIcon} className="w-full h-full  object-contain "/>
                    </svg>
                    <span className="font-semibold text-xs text-red-600">{rol.displayName}</span>
                </button>
                ))}
        </div>
    )
}



const Filtred = ()=>{
    const {roleCharacters} = useSelector(state => state.charactersStore)
    if (roleCharacters != undefined) {
        return(
            <div className="container-filters">
                <ButtonImage />
                <SearchNav />
            </div>
        )
    }
}

export {Filtred}