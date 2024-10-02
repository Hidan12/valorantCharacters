import { ContainerCard } from './components/containerCard/ContainerCard' 
import { HeaderNav } from './components/header/Header'
import { Filtred } from './components/filtred/Filtred'
import { Loading } from './components/loading/Loading'
import { MyTeamModal } from './components/myTeamModal/MyTeamModal'
import { MaxTeam } from './components/maxTeam/MaxTeam'
import './App.css'
import { useEffect, useState } from 'react'

const filterRol = (info)=>{
  let rolSaved = {}
  let rolFilter = info.reduce((tmp, rol) =>{
    if (rol.role != undefined && rolSaved[rol.role.displayName ] == undefined) {
      rolSaved[rol.role.displayName] = ""
      tmp.push({
        displayName:rol.role.displayName,
        displayIcon: rol.role.displayIcon,
        description: rol.role.description
      })
    }
    return tmp
  },[] )
  return rolFilter
}


const myTeamPersisted = (info)=>{
  let localMyTeam = JSON.parse(localStorage.getItem('myTeam'))
  if (localMyTeam && localMyTeam.length > 0) {
    localMyTeam = info.filter(dataInfo => localMyTeam.some(local => dataInfo.uuid == local ))
  }else{
    localMyTeam = []
  }
  return localMyTeam
  
}
const paginationByWidth = (width)=>{
  if(width > 768 ){
    return 6
  }
  return 4
}

function App() {
  const [infoArray, setInfoArray] = useState([])
  // const [width, setWidth] = useState(window.innerWidth)
  // const [amountCard, setAmountCard] = useState(paginationByWidth(width))
  const [copyInfo, setCopyInfo] = useState([])
  const [clickMyTeam, setClickMyTeam] = useState(false)
  const [myTeam, setMyTeam] = useState([])
  const [maxTeam, setMaxTeam] = useState(false)
  const [rol, setRol] = useState([])
  const [rolSelect, setRolSelect] = useState({}) 
  const [search, setSearch] = useState('')
  
  // useEffect(()=>{
  //   setAmountCard(paginationByWidth(window.innerWidth))
  // },[window.innerWidth])
  
  useEffect(()=>{
   const test = async ()=>{
      try {
        let tmpData = await fetch("https://valorant-api.com/v1/agents?isPlarayable=true")
        const data = await tmpData.json()
        const tmpRol = filterRol(data.data)
        
        setMyTeam(team => team = myTeamPersisted(data.data))
        setRol((tmprol) => tmprol = tmpRol)
        setInfoArray(tmp => tmp = data.data)
        setCopyInfo(tmp => tmp = data.data)
          
      } catch (error) {
        console.log(error);
      }
     
   }
  test()
   
 },[])

 const handlerCLickMyTeam = ()=>{ 
  setClickMyTeam((click) => click = !clickMyTeam)
 }
 //manejador del boton my team
  const handlerAddMyTeam = (characters)=>{
  if (myTeam.length < 5) {
    setMyTeam(ch => ch = [...ch,characters])
    let tem = [...myTeam, characters]
    localStorage.setItem('myTeam', JSON.stringify(tem.map(ch => (ch.uuid) )))
  }else{
    setMaxTeam(tmp => tmp = true)
  }
 }
  const handlerRemoveMyTeam = (character)=>{
    const tmp = myTeam.filter(ch => ch !=character )
    setMyTeam(ch => ch = tmp)
    localStorage.setItem('myTeam', JSON.stringify(tmp.map(ch => (ch.uuid))))
 }
  //manejador de max team (cambia a falso)
  const handlerMaxTeam =()=>{
    setMaxTeam(tmp => tmp = false)
 }
 
 //manejador del seteo de rol y filtrado
  const handlerRole = (selectRol)=>{
  if (selectRol != rolSelect) {
    setRolSelect(rl => rl = selectRol)
    filter(search, selectRol)
  }
  else{
    console.log("entro al else");
    setRolSelect(rl => rl = {})
    filter(search, {})
  }

 }
 // manejador del buscador y filtrado
  const handerSearchOnChange = (value)=>{
   //haciendo esta funcion dentro del set obliga que el set se ejecute y renderice con el nuevo valor  
   setSearch((vl)=> vl = value)
   filter(value, rolSelect)
 }


 //filtra por rol y buscador de texto
  const filter = (search, rolSelect)=>{
    let temp = []
    if (rolSelect.displayName) {
      temp = infoArray.filter((info) => info.displayName.toLowerCase().includes(search.toLowerCase()) && info.role && info.role.displayName == rolSelect.displayName)
    }else{
      temp = infoArray.filter((info) => info.displayName.toLowerCase().includes(search.toLowerCase()))
    }
    setCopyInfo(py => py = temp)
  }
  
  
  return (
    <div className='container-main '>
      <HeaderNav handlerCLickMyTeam={handlerCLickMyTeam}/>
      <h1 className='font-bold text-2xl text-red-500 text-center'>Filter characters by:</h1>
      <Filtred infoButton={rol} handlerRole={handlerRole} handerSearchOnChange={handerSearchOnChange} rolSelect={rolSelect}/>      
      {infoArray.length == 0 ? <Loading cardAmount={6}/> : <ContainerCard cardAmount={6} infoArray={copyInfo} handlerAddMyTeam={handlerAddMyTeam} 
        handlerRemoveMyTeam={handlerRemoveMyTeam} handlerMaxTeam={handlerMaxTeam} maxTeam={maxTeam} myTeam={myTeam}/>}
      {clickMyTeam ? <MyTeamModal handlerCLickMyTeam={handlerCLickMyTeam} myTeam={myTeam} handlerRemoveMyTeam={handlerRemoveMyTeam}></MyTeamModal> : ""}
      {maxTeam ? <MaxTeam handlerMaxTeam={handlerMaxTeam} /> : ""}
    </div>
  )
}

export default App
