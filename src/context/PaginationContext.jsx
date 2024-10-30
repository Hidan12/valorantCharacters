import { createContext, useReducer } from "react"

export const NEXT_PAGE = "NEXT_PAGE"
export const PREV_PAGE = "PREV_PAGE"
export const CLICK_PAGE = "CLICK_PAGE"
export const CLICK_DETAIL = "CLICK_DETAIL"
export const SET_PAGES = "SET_PAGES"

const initialState = {
    pages: 0,
    currentPage: 0,
    allPages:[],
    currentPageArray:[],
    clickDetail: false,
    detail: {}
}

const paginationAndDetailReducer = (state, action)=>{
    switch (action.type) {
        case SET_PAGES:
            return {...state, allPages: action.payload}
        case NEXT_PAGE:
            if (state.currentPage <= state.pages) {
                return {...state, currentPageArray:state.allPages[action.payload], currentPage: action.payload}
            }
            break;
        case PREV_PAGE:
            if (state.currentPage >= 0) {
                return {...state, currentPageArray:state.allPages[action.payload], currentPage: action.payload}
            }
            break;
        case CLICK_PAGE:
            return {...state, currentPageArray: state.allPages[action.payload], currentPage: action.payload}
        case CLICK_DETAIL:
            return {...state, clickDetail: !state.clickDetail}
        default:
            return state
    }
}

export const PaginationAndDetailState = createContext("")
export const PaginationAndDetailDispatch = createContext("")

export const PaginationAndDetailProvider = ({children})=>{
    const [state, dispatch] = useReducer(paginationAndDetailReducer, initialState)
    return (
        <PaginationAndDetailState.Provider value={state}>
            <PaginationAndDetailDispatch.Provider value={dispatch}>
                {children}
            </PaginationAndDetailDispatch.Provider>
        </PaginationAndDetailState.Provider>
    )
}