import { useDispatch } from 'react-redux'
import { closedMaxTeam } from '../../store/actions/characterActions'
import './maxTeamStyle.css'

const MaxTeam = ()=>{
    const dispatch = useDispatch()
    return(
        <div className='fixed top-16 flex flex-col justify-between w-[50vw] h-[30vh] bg-slate-900'>
            <div>
                <div className='container-button'>
                    <button className="button-red" onClick={() => dispatch(closedMaxTeam())}>x</button>
                </div>
                <p className='font-bold text-2xl text-red-500'>Please note that only 5 agents can be added to form your dream team, please remove an agent to add this new agent.</p>
            </div>
        </div>
    )
}
export {MaxTeam}