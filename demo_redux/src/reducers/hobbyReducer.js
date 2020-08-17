//declare all state
const initialState ={
    list: [],
    activeId: null,
}
// hobbyReducer const is a function that set new state base on action
const hobbyReducer=(state = initialState, action) =>{
    switch (action.type){
        case 'ADD_HOBBY':{
            const newList =[...state.list];
            newList.push(action.payload);

            return{
                ...state,
                list: newList,
            };
        }

        case 'SET_ACTIVE_HOBBY':{
            const newActiveId = action.payload.id;
            return {
                ...state,
                activeId: newActiveId,
            };
        }

        default:
            return state;
    }
}
export default hobbyReducer;