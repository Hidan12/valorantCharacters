import { useContext, useEffect, useState } from "react";
import { Card } from "../cards/Card";
import { DetailCard } from "../detail/Detail";
import { ButtonPagination } from "../buttonPagination/ButtonPagination";
import { PaginationAndDetailState, PaginationAndDetailDispatch } from "../../context/PaginationContext";
import './styleContainer.css'
import { useSelector } from "react-redux";

const pagination = (infoArray, cardXpag)=>{
    let tmpArray = []
    let ban = 0
    infoArray.forEach((_, index) => {   
        if (index % cardXpag == 0 && ban != index){
            ban = index
            tmpArray.push(infoArray.slice(index - cardXpag, index))
        }else if ((infoArray.length - 1) == index) {
            tmpArray.push(infoArray.slice(ban, (index + 1)))
        }
    });
    return tmpArray
}

const filter = (search, rolSelect, character)=>{
    let temp = []
    if (rolSelect.displayName) {
      temp = character.filter((info) => info.displayName.toLowerCase().includes(search.toLowerCase()) && info.role && info.role.displayName == rolSelect.displayName)
    }else{
      temp = character.filter((info) => info.displayName.toLowerCase().includes(search.toLowerCase()))
    }
    return temp
  }

const ContainerCard = ({cardAmount})=> {
    //info de redux
    const {characters, searchCharacters, roleSelect} = useSelector(state => state.charactersStore)
    //info context
    // const {pages, currentPages, currentPageArray,} = useContext(PaginationAndDetailState)
    // const dispatch = useContext(PaginationAndDetailDispatch)

    const [page, setPage] = useState(0)
    const [copyInfo, setCopyInfo] = useState(pagination(characters, cardAmount))    
    const [cards, setCards] = useState(copyInfo[0])
    const [sizeArray, setSizeArray]= useState(copyInfo.length)
    const [clickDetail, setClickDetail] = useState(false)
    const [detail, setDetail] = useState({})
    
    
    const handlePageNext = ()=>{
        const tmp = page + 1
        if (tmp < copyInfo.length) {
            setPage(pag => pag = tmp)
            setCards(copyInfo[tmp])
        }
        
      }
    const handlePagePrev = ()=>{
        let tempPage = page - 1
        if (tempPage >= 0) {
            setPage(pag => pag = tempPage)
            setCards(copyInfo[tempPage])    
        }
      }
    const handlerNumber = (index)=>{
        setCards(num => num = copyInfo[index])
        setPage(pag => pag = index)
      }

    const handerDetail = (click, infoDetail, location)=>{
        if (!click && location != "modal") {
          setClickDetail(!click)
        }else if (location == "modal") {
          setClickDetail(!click)
        }
        setDetail(infoDetail)
      }

    useEffect(()=>{
        setPage(page => page = 0)
        
        const characterFilter = filter(searchCharacters, roleSelect, characters)
        const tmp = pagination(characterFilter, cardAmount)
        setSizeArray(size => size = tmp.length)
        setCopyInfo((copy) => copy = tmp)
        setCards(card => card = tmp[0])
    },[roleSelect, searchCharacters])

    
    if (sizeArray > 0) {
        return(
            <div className="main-container-card">
                <h2 className='font-bold text-xl text-red-500 py-6'>Characters</h2>
                <div className='container-card'>
                    {cards.map((info) => 
                    <Card key={info.uuid} infoCard={info} handerDetail={handerDetail} clickDetail={clickDetail} /> )}
                </div>
                <ButtonPagination quantityButtons={sizeArray} handlePagePrev={handlePagePrev} 
                    handlerNumber={handlerNumber} handlePageNext={handlePageNext} page={page}/>
                {clickDetail ? <DetailCard info={detail} handerDetail={handerDetail} clickDetail={clickDetail}/>: ""}
            </div>
          )
    }
    return (
        <div className="min-h-[80vh]">
            <p className="font-bold text-2xl text-red-500 text-center">Character not found, try again</p>
            <img src="https://www.icegif.com/wp-content/uploads/2023/04/icegif-667.gif" alt="" />
        </div>
    )
}


export {ContainerCard}