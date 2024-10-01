import './loading.css'
//llevar a tro archivo

const BasicCard = ()=>{
    return(
        <div className='card-style group animate-pulse'>
            <div className={`conteiner-img `} >
            
            </div>
            <div className='flex flex-col'>
                <div className="w-24 h-4 border-2  border-slate-400 bg-red-400 rounded-r-lg my-2"></div>
                <div className="w-28 h-4 border-2  border-slate-400 bg-red-400  rounded-r-lg"></div>
            </div>
        </div>        
    )
}
const BasicPagination = ()=>{
    return(
        <div className="container-buttons-pagination h-10 animate-pulse">
                <div className='flex items-center '>
                    <div className="button-yellow-left" ></div>
                </div>
                <div className='container-numbers h-full'>
                    
                </div>
                <div className="button-yellow-right h-full" ></div>
        </div>
    )
}




const Loading = ({cardAmount})=>{
    let cards = Array.from({length:cardAmount})
    return(
        <div className='main-container-card '>
            <h2 className='font-bold text-xl text-red-500 py-6'>Loading...</h2>
            <div className='container-card '>
                {cards.map((_,index) => (<BasicCard key={index}/>))} 
            </div>
            <BasicPagination/>

        </div>
    )
  }
  export {Loading}