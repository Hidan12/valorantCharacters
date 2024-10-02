import './myTeam.css'

const CharacterTeam = ({character, handlerRemoveMyTeam})=>{
    return(
        <div className='grid grid-cols-4 justify-items-center items-center'>
            <img src={character.displayIconSmall} className='w-8 h-7 object-cover'  alt="" />
            <h2 className='text-red-500 font-bold'>{character.displayName}</h2>
            <p className='text-red-500 font-bold'>{character.role ? character.role.displayName: "Unknown"}</p>
            <button onClick={()=> handlerRemoveMyTeam(character)} className='bg-red-500 m-3 p-2'>
                Remove
            </button>
        </div>
    )
}


const MyTeamModal = ({handlerCLickMyTeam, myTeam, handlerRemoveMyTeam})=>{
    return(
        <div className='container-my-team w-[80vw]'>
            <div className='my-team w-full'>
                <div className='w-full'>
                    <div className='container-button'>
                        <button className="button-red" onClick={() => handlerCLickMyTeam()}>x</button>
                    </div>
                    <div className="container-title">
                        <h2 className={`font-bold text-red-500`}>Dream team</h2>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='grid grid-cols-4 justify-items-center my-3'>
                        <p className='font-bold text-red-500'>Photo</p>
                        <p className='font-bold text-red-500'>Name</p>
                        <p className='font-bold text-red-500'>Role</p>
                        <p className='font-bold text-red-500'>remove Team</p>
                    </div>
                    <div className='overflow-y-auto h-[45vh] md:h-[70vh]'>
                        {myTeam.length > 0 ? myTeam.map((team, index) => (<CharacterTeam key={index} character={team} handlerRemoveMyTeam={handlerRemoveMyTeam}/>)) : 
                        <p className='font-bold text-red-500 text-center text-2xl'>There are no saved characters</p>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
    

}

export {MyTeamModal}