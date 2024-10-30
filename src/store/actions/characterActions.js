import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

//const setCharacters = createAction("SET_CHARACTERS")
const setCharacters = createAsyncThunk("SET_CHARACTERS", async ()=>{
    const respons = await fetch("https://valorant-api.com/v1/agents?isPlarayable=true")
    const data = await respons.json()
    return data.data
})
const setRoleCharacters = createAction("SET_ROLE_CHARACTERS")
const setMyTeam = createAction("SET_MY_TEAM")
const searchCharacters = createAction("SEARCH_CHARACTERS")
const selectRole = createAction("SELECT_ROLE")
const addMyTeam = createAction("ADD_MY_TEAM")
const removeMyTeam = createAction("REMOVE_MY_TEAM")
const closedMaxTeam = createAction("CLOSED_MAX_TEAM")


export {setCharacters, setMyTeam, setRoleCharacters, closedMaxTeam, searchCharacters, selectRole ,addMyTeam, removeMyTeam}