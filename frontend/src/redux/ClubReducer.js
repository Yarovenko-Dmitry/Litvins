import {clubApi} from "../api/api";


export const SET_INFO_CLUB = 'RECENTCOMMENTS::SET_INFO_CLUB'
export const SET_INFO_YEAR = 'RECENTCOMMENTS::SET_INFO_YEAR'


const initState = {
    infoForClub: null,
    infoYear:[]
}


const ClubReducer = (state=initState, action)=>{
    switch (action.type) {
        case SET_INFO_CLUB: {
            return{
                ...state,
                infoForClub: action.data
            }
        }
        case SET_INFO_YEAR: {
            return{
                ...state,
                infoForClub: action.data
            }
        }
        default:{
            return {...state}
        }
    }
}

const setInfoClub = (data) =>{
    return{
        type: SET_INFO_CLUB,
        data
    }
}
const setInfoYear = (data) =>{
    return{
        type: SET_INFO_YEAR,
        data
    }
}

export const getInfoClubPage = () =>  async (dispatch) =>{
    const data = await clubApi.getInfoClub()
    dispatch(setInfoClub(data))
}
export const getInfoYear = (id) =>  async (dispatch) =>{
    const data = await clubApi.getInfoYear(id)
    dispatch(setInfoYear(data))
}

export default ClubReducer