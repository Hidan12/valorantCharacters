import { useEffect, useState } from 'react'
import './buttonStyle.css'


const ButtonPagination = ({quantityButtons, handlePagePrev, handlerNumber, handlePageNext, page})=>{
    const buttons = Array.from({ length: quantityButtons })
       
    return(
        <>
            <div className="container-buttons-pagination">
                <div className='flex items-center'>
                    <button className="button-yellow-left text-red-500" onClick={()=>handlePagePrev()}>prev</button>
                </div>
                <div className='container-numbers'>
                    {buttons.map((_, index) => (<button className={`p-4 ${page == index ? "bg-yellow-500": "" } hover:bg-yellow-500`} key={index} onClick={()=> handlerNumber(index)} >{index + 1}</button>))}
                </div>
                <button className="button-yellow-right" onClick={()=>handlePageNext()}>next</button>
            </div>
        </>
    )
}
export {ButtonPagination}