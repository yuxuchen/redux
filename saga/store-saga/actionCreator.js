
import {INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ITEM,GET_INIT_LIST} from './actionType';


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

export const getInitList=()=>({
    type:GET_INIT_LIST
})
//redux-thunder 可以返回一个函数
//异步函数

