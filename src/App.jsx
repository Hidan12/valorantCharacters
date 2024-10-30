import { ContainerCard } from './components/containerCard/ContainerCard' 
import { HeaderNav } from './components/header/Header'
import { Filtred } from './components/filtred/Filtred'
import { Loading } from './components/loading/Loading'
import { MyTeamModal } from './components/myTeamModal/MyTeamModal'
import { MaxTeam } from './components/maxTeam/MaxTeam'
import { PaginationAndDetailProvider } from './context/PaginationContext'
import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCharacters, setRoleCharacters, setMyTeam } from './store/actions/characterActions'


function App() {
 // obtener estados
  const {characters, maxMyTeam} = useSelector(state => state.charactersStore)
  const dispatch = useDispatch()

  const [clickMyTeam, setClickMyTeam] = useState(false)
  
  

 const handlerCLickMyTeam = ()=>{ 
  setClickMyTeam((click) => click = !clickMyTeam)
 }
 
  
  
  return (
    <div className='container-main '>
      <HeaderNav handlerCLickMyTeam={handlerCLickMyTeam}/>
      <h1 className='font-bold text-2xl text-red-500 text-center'>Filter characters by:</h1>
      <Filtred />      
      {characters.length == 0 ? <Loading cardAmount={6}/> : 
        <PaginationAndDetailProvider>
          <ContainerCard cardAmount={6} />
        </PaginationAndDetailProvider>
      }
      {clickMyTeam ? <MyTeamModal handlerCLickMyTeam={handlerCLickMyTeam}></MyTeamModal> : ""}
      {maxMyTeam ? <MaxTeam /> : ""}
    </div>
  )
}

export default App
