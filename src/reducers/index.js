//action = {
//   type: 'CREATE_ENENT'
//    title: '五輪延期のお知らせ'
//    body:'2020年→2021年開催　新型コロナ影響'
//}

const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT'
            return state
        case 'DELETE_EVENT'
            return state
        case 'DELETE_ALL_EVENTS'
            return []
        default:
            return state
    }
}
export default events