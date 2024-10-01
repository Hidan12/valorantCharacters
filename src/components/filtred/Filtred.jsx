import { SearchNav } from "../search/Search";
import './filtredStyle.css'

const ButtonImage = ({arrayButton, handlerRole, rolSelect})=>{
    return(
        <div className="button-image">
            {arrayButton.map(rol => (
                <button key={rol.displayName} onClick={()=>{handlerRole(rol)}} className={`container-button-rol ${rolSelect == rol ?"from-pink-500 to-orange-500" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full " viewBox="0 0 100 100">
                        <image href={rol.displayIcon} className="w-full h-full  object-contain "/>
                    </svg>
                    <span className="font-semibold text-xs text-red-600">{rol.displayName}</span>
                </button>
                ))}
        </div>
    )
}



const Filtred = ({infoButton, handerSearchOnChange, handlerRole, rolSelect})=>{
    if (infoButton!= undefined) {
        return(
            <div className="container-filters">
                <ButtonImage arrayButton={infoButton} handlerRole={handlerRole} rolSelect={rolSelect}></ButtonImage>
                <SearchNav handerSearchOnChange={handerSearchOnChange}></SearchNav>
            </div>
        )
    }
}

export {Filtred}