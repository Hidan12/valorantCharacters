import { useState } from 'react'
import './detail.css'


const ButtonImage = ({info, handerButton})=>{
    return(
        <button onClick={()=>handerButton(info)} className='w-1/5'>
            <img src={info.displayIcon} className='w-full' alt="" />
        </button>
    )
}


const DetailCard = ({info,  handerDetail, clickDetail}) =>{
const [abilitie, setAbilitie] = useState(info.abilities[0])
const handerAbilitie = (abilitie)=>{
    console.log(abilitie);
    
    setAbilitie((ab)=> ab = abilitie)
}
 return(
    <div className="container-detail">
        <div className="container-detail-yellow">
            <div className="w-full">
                <div className="container-button">
                    <button onClick={()=> handerDetail(clickDetail, {}, "modal")} className="button-red">X</button>
                </div>
            <div className="container-title">
                <h2 className={`font-bold text-[#${info.backgroundGradientColors[0].substring(0, 6)}]`}>{info.displayName}</h2>
                <p className="text-red-500">Anime</p>
            </div>
            </div>
            <div className="container-img-description"> 
                <div className=" flex flex-col gap-y-2 w-2/5 h-[90%]">
                    <div className='w-full h-4/5'>
                        <img src={info.fullPortrait || info.fullPortraitV2} className="img-detail" alt="" />
                    </div>
                    <div className='w-full h-1/5 '>
                        {info.abilities.map(abilitie => <ButtonImage key={abilitie.displayName} info={abilitie} handerButton={handerAbilitie}/> )}
                    </div>
                </div>
                <div className='flex flex-col gap-y-2 w-2/5 h-[90%] '>
                    <div className="container-description">
                        <p className="">{info.description}</p>
                    </div>
                    <div className='flex flex-col gap-y-2 w-full h-[25%]'>
                        <h3>ABILITIE: <span className='font-bold'>{abilitie.displayName}</span></h3>
                        <div className='w-full h-full overflow-y-auto'>
                            <p>{abilitie.description || "No description"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
 )
}

export {DetailCard}