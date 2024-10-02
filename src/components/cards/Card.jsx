import { useEffect, useState } from 'react';
import './styleCard.css'

const Card = ({infoCard, handerDetail, clickDetail, handlerAddMyTeam, handlerRemoveMyTeam, handlerMaxTeam, maxTeam, myTeam})=>{        
  const [button, setButton] = useState(myTeam.some(team => team.displayName == infoCard.displayName))
  
  useEffect(()=>{
    setButton(tmp => tmp = myTeam.some(team => team.displayName == infoCard.displayName))
  },[myTeam])
  
    
  return(
        <div className='card-style group'>
          <div className={`conteiner-img `} >
            <img className='img-card' src={infoCard.fullPortrait || infoCard.fullPortraitV2 || "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png"} alt="" />
            <div className='conteiner-button'>
              <div className='w-3/4'>
              <button className=' btn-yellow' onClick={()=>handerDetail(clickDetail, infoCard)}>
                <p className='text-center font-bold'>READ MORE</p>
              </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className='font-bold text-red-600'>{infoCard.displayName}</h2>
            <p className='font-bold text-red-500'>Role: <span className='font-bold text-red-600'>{infoCard.role ? infoCard.role.displayName: "unknown"}</span></p>
            
            { button ? 
              <button onClick={()=>handlerRemoveMyTeam(infoCard)} className='flex w-full items-center overflow-x-hidden'>
              <div className='bottom-add-remove md:group-hover:animate-moveright'>
                <p className='font-bold text-sm'>Remove to team</p>
              </div>
            </button>
            :
            <button onClick={()=>handlerAddMyTeam(infoCard)} className='flex w-full items-center overflow-x-hidden'>
            <div className=' bottom-add-remove md:group-hover:animate-moveright'>
              <p className='font-bold'>Add to team</p>
            </div>
          </button>  
          }
            
            
          </div>
        </div>
      )
}


export {Card}