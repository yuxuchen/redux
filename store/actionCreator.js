
import {INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ITEM} from './actionType';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: INPUT_VALUE,
    value
})
export const getAddItemAction =() =>({
    type: ADD_TODO_ITEM
});
export const getDeleteItemAction =(index) =>({
    type: DELETE_TODO_ITEM,
    index
});
export const InitListAction =(data) =>({
    type: INIT_LIST_ITEM,
    data
});
//redux-thunder 可以返回一个函数
export const getTodoList=()=>{
    return(dispatch)=>{
            axios.get('/list.json').then((res)=>{
            const data=res.data;
            const action=InitListAction(data)
            dispatch(action);
    })
}
}
