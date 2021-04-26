import {INPUT_VALUE,ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ITEM } from './actionType'

const defaultState={
    inputValue:'todoList',
    list:['water flowers', 'running']
}
//reducer可以接受state，但是绝对不能修改state
//纯函数指的是，给定固定定输入，就绝对会有固定定输出，而且绝对不会有副作用
export default(state=defaultState, action)=>{
    if(action.type===INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState
    }
    if(action.type===ADD_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue=''
        return newState
    }
    if(action.type===DELETE_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState
    }
    if(action.type===INIT_LIST_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        return newState
    }
    return state
}
