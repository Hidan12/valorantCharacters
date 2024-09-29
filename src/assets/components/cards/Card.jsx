import './styleCard.css'

const Card = ({infoCard, handerDetail, clickDetail})=>{
  console.log(infoCard);
  
        
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
            <h2 className='font-bold'>{infoCard.displayName}</h2>
            <div className='relative'>
              <div className='red-dot '></div>
            </div>
          </div>
        </div>
      )
}


export {Card}