import React,{Component} from 'react';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList} from './store/actionCreator';
import TodoListUI from './TodoListUI';



class TodoList extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnChange=this.handleBtnChange.bind(this);
        this.handleItemClick=this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
//使用redux-thunk，action可以返回函数
    componentDidMount(){
        const action= getInitList();
        store.dispatch(action);
        // axios.get('/list.json').then((res)=>{
        //     const data=res.data;
        //     const action=InitListAction(data);
        //     store.dispatch(action);
        // })
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange(){
        this.setState(store.getState());
    }
    handleBtnChange(){
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemClick(index){
        let action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    render(){
        return (<TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnChange={this.handleBtnChange}
            handleItemClick={this.handleItemClick}
            />) 
    }
    
}

export default TodoList;