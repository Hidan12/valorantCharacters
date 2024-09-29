import { Card } from "../cards/Card";
import './styleContainer.css'


const ContainerCard = ({ infoArray, handerDetail, clickDetail, handlePageNext, handlePagePrev, initialIndex})=> {
    console.log("en el contenedor",infoArray);
    console.log("comprobacion ", infoArray.length == 0);
    
    //????????????????????????? desaparece una propiedad del objeto al hacer slice
    const copyInfo = [...infoArray.slice(initialIndex, (initialIndex + 10))]
    console.log("dentro dcontencard", infoArray);
    
    const sizeArray = copyInfo.length
    if (sizeArray <= 10 && sizeArray > 0) {
        return(
            <div className="main-container-card">
                <div className='container-card'>
                    {copyInfo.map((info) => 
                    <Card key={info.uuid} infoCard={info} handerDetail={handerDetail} 
                        clickDetail={clickDetail}/> )}
                </div>
                <div className="container-buttons-pagination">
                    <button className="button-yellow-left" onClick={()=>handlePagePrev()}>prev</button>
                    <button className="button-yellow-right" onClick={()=>handlePageNext()}>next</button>
                </div>
            </div>
          )
    }
    return (
        <>
            <p>There is no item to display</p>
        </>
    )
}


export {ContainerCard}