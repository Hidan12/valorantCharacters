import { SearchNav } from "../search/Search"
import './styleHeader.css'
  
  
  function TitleSubTitle (){
    return(
      <div className='flex flex-col flex-wrap items-start w-2/5'>
        <h5 className='text-red-500'>anime</h5>
        <h1 className='font-bold text-xl'>DISCOVER ALL ANIME</h1>
      </div>
    )
  }
  
  function HeaderNav ({handerSearchOnChange}){
    return(
      <>
        <div className='container-header'>
          <TitleSubTitle />
          <SearchNav handerSearchOnChange={handerSearchOnChange}/> 
        </div>
      </>
    )
  }

  export {HeaderNav}