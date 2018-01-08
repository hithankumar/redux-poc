
//state is the state this reducer is responsible for which is modified based on action.
export default function(state =null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }   
    return state;
}