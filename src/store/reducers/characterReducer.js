import { createReducer } from "@reduxjs/toolkit"

import { setCharacters,  setRoleCharacters, setMyTeam, searchCharacters, selectRole ,addMyTeam, removeMyTeam, closedMaxTeam } from "../actions/characterActions"

const myTeamPersisted = (info)=>{
    let localMyTeam = JSON.parse(localStorage.getItem('myTeam'))
    if (localMyTeam && localMyTeam.length > 0) {
    localMyTeam = info.filter(dataInfo => localMyTeam.some(local => dataInfo.uuid == local ))
    }else{
    localMyTeam = []
    }
    return localMyTeam  
}

const addCharactersMyTeam = (characters, myTeam)=>{
    let myCharcters = [...myTeam, characters]
    localStorage.setItem('myTeam', JSON.stringify(myCharcters.map(ch => (ch.uuid) )))
    return myCharcters
}

const removeCharacterMyTeam = (character, myTeam)=>{
    const newTeam = myTeam.filter(ch => ch.uuid != character.uuid )
    localStorage.setItem('myTeam', JSON.stringify(newTeam.map(ch => (ch.uuid))))
    return newTeam
}


const filterRol = (info)=>{
    let rolSaved = {}
    if (info.length > 0) {
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
    return []    
}
    


const initialState = {
    error:"",
    loading: true,
    characters: [],
    searchCharacters: "",
    roleCharacters:[],
    roleSelect: {},
    myTeam: [],
    maxMyTeam: false
}

export const characterReducer = createReducer(initialState, (builder)=>{
    builder.addCase(setCharacters.pending, (state, action)=> {
        state.loading = true
    })
    .addCase(setCharacters.fulfilled, (state, action) =>{
        state.characters = action.payload
        state.loading = false
    })
    .addCase(setCharacters.rejected, (state) =>{
        state.error = ""
    })
    .addCase(setRoleCharacters, (state, action) => {
        state.roleCharacters = filterRol(action.payload)
    })//preguntar
    .addCase(setMyTeam, (state, action) =>{
        if (state.myTeam.length < 5) {
            state.myTeam = myTeamPersisted(action.payload)
        }else{
            state.maxMyTeam = true
        }
    })
    .addCase(searchCharacters, (state, action)=> {
        state.searchCharacters = action.payload
    })
    .addCase(addMyTeam, (state, action) => {
        if(state.myTeam.length < 5){
            state.myTeam = addCharactersMyTeam(action.payload, state.myTeam)
        }else{
            state.maxMyTeam = true
        }
    })
    .addCase(closedMaxTeam, (state, action) =>{
        state.maxMyTeam = false
    })
    .addCase(removeMyTeam,(state, action) => {
        state.myTeam = removeCharacterMyTeam(action.payload, state.myTeam)
        state.maxMyTeam = false
    })
    .addCase(selectRole, (state, action) => {
        if (action.payload.displayName === state.roleSelect.displayName) {    
            state.roleSelect = {}
        }else{
            state.roleSelect = action.payload
        }          
    })
})