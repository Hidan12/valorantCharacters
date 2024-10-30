import { useDispatch } from 'react-redux'
import { searchCharacters } from '../../store/actions/characterActions'
import './styleSearch.css'


function SearchNav (){
    const dispatch = useDispatch()
    return (
      <div className='container-search'>
        <input type="text" className='input-search' onChange={(e)=> dispatch(searchCharacters(e.target.value))} name='search' placeholder='search' />
      </div>
    )
  }


  export {SearchNav}