import {CREATE_EVENT,DELETE_EVENT,DELETE_ALL_EVENTS} from '../actions'

//action = {
//   type: 'CREATE_ENENT',
//    title: '五輪延期のお知らせ',
//    body:'2020年→2021年開催　新型コロナ影響'
//}
//
//#before
//state =[]
//
//#after
//state = [
//    {
//    id: 1,
//    title: '五輪延期のお知らせ'
//    body:'2020年→2021年開催　新型コロナ影響' 
//    }
//]
//
//#before
//state = [
//    {id: 1, title:'タイトル１', body:'ボディ1'},
//    {id: 2, title:'タイトル2', body:'ボディ2'},
//    {id: 3, title:'タイトル3', body:'ボディ3'},
//]
//#after
//state = [
//    {id: 1, title:'タイトル１', body:'ボディ1'},
//    {id: 2, title:'タイトル2', body:'ボディ2'},
//    {id: 3, title:'タイトル3', body:'ボディ3'},
//    {
//  id: 4,
//    title: '五輪延期のお知らせ',
//    body:'2020年→2021年開催　新型コロナ影響'
//    }
//]
//


const events = (state = [], action) => {
    switch(action.type) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body }
            const length = state.length
            let id
            if (length === 0) {
                id = 1
            }else{
                id = state[length - 1].id + 1
            }
            return [...state, { id: id, ...event}]
        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id)
        case DELETE_ALL_EVENTS:
            return []
        default:
            return state
    }
}
export default events