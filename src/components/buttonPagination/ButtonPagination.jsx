import { useEffect, useState } from 'react'
import './buttonStyle.css'


const ButtonPagination = ({quantityButtons, handlePagePrev, handlerNumber, handlePageNext, page})=>{
    const buttons = Array.from({ length: quantityButtons })
       
    return(
        <>
            <div className="container-buttons-pagination">
                <div className='flex items-center'>
                    <button className="button-gradient-left text-red-500" onClick={()=>handlePagePrev()}>prev</button>
                </div>
                <div className='container-numbers'>
                    {buttons.map((_, index) => (<button className={`p-4 bg-gradient-to-t ${page == index ? "from-red-700 to-[#a5a5a5]": "" } hover:from-red-600 hover:to-[#a5a5a5]`} key={index} onClick={()=> handlerNumber(index)} >{index + 1}</button>))}
                </div>
                <button className="button-gradient-right" onClick={()=>handlePageNext()}>next</button>
            </div>
        </>
    )
}
export {ButtonPagination}