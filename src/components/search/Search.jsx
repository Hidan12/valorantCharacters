import './styleSearch.css'


function SearchNav ({handerSearchOnChange}){
    return (
      <div className='container-search'>
        <input type="text" className='input-search' onChange={(e)=> handerSearchOnChange(e.target.value)} name='search' placeholder='search' />
        
      </div>
    )
  }


  export {SearchNav}