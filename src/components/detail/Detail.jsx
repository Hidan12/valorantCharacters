import { useState } from 'react'
import './detail.css'


const ButtonImage = ({info, handerButton, abilitie})=>{
    return(
        <button onClick={()=>handerButton(info)} className={`container-button-ability ${abilitie == info ? "from-pink-500 to-orange-500":""}`}>
            <img src={info.displayIcon} className='w-full' alt="" />
        </button>
    )
}


const DetailCard = ({info,  handerDetail, clickDetail}) =>{
const [abilitie, setAbilitie] = useState(info.abilities[0])
const handerAbilitie = (abilitie)=>{
    setAbilitie((ab)=> ab = abilitie)
}
 const tmpColor = `text-[#${info.backgroundGradientColors[0].substring(0, 6)}]`

 
 return(
    <div className="container-detail">
        <div className="container-detail-yellow">
            <div className="w-full">
                <div className="container-button">
                    <button onClick={()=> handerDetail(clickDetail, {}, "modal")} className="button-red">X</button>
                </div>
            <div className="container-title">
                <h2 className={`font-bold text-red-500  ${tmpColor}`}>{info.displayName}</h2>
                <p className="text-red-500">{info.role ? info.role.displayName: "Unknown" }</p>
            </div>
            </div>
            <div className="container-img-description"> 
                <div className=" flex flex-col gap-y-2 w-2/5 h-[90%]">
                    <div className='w-full h-1/2 md:h-4/5'>
                        <img src={info.fullPortrait || info.fullPortraitV2} className="img-detail" alt="" />
                    </div>
                    <div className='w-full h-1/3 md:h-1/5 '>
                        {info.abilities.map(abilities => <ButtonImage key={abilities.displayName} abilitie={abilitie} info={abilities} handerButton={handerAbilitie}/> )}
                    </div>
                </div>
                <div className='flex flex-col gap-y-4 w-2/5 h-[90%] '>
                    <div className="container-description">
                        <p className="text-red-500">{info.description}</p>
                    </div>
                    <div className='flex flex-col gap-y-1 w-full h-[40%] md:h-[45%]'>
                        <h3 className='text-red-500'>{abilitie.slot}: <span className='font-bold text-red-500'>{abilitie.displayName}</span></h3>
                        <div className='w-full h-[70%] md:h-full overflow-y-auto no-scrollbar'>
                            <p className='text-red-500'>{abilitie.description || "No description"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
 )
}

export {DetailCard}