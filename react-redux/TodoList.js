import React, {Component} from 'react';
import { connect } from 'react-redux';

//此时TodoList是一个UI组件，并不包含任何的函数逻辑，同时他只有一个render函数
//可以把它写为无状态组件
//此时TodoList是一个UI以及无状态组件

const TodoList =(props)=>{
    //结构赋值使得代码更加精简化，const {inputValue}=this.props 等价于 this.props.inputValue
    const {inputValue,changeInputValue,handleClick,handleDelete,list} =props;
    
    return(
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>submit</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return <li onClick={handleDelete} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>

    )
}



const mapStateToProps=(state)=>{
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}
//connect意思是让TodoList和store做连接
//mapStateToProps把store里面的数据映射给组件作为props，state代表store的数据,代表了TodoList和store连接的规则
//所以store里面inputValue的值直接映射给todolist里的inputValue的值，作为props储存起来
const mapDispatchToProps=(dispatch)=>{
    return{changeInputValue(e){
        const action={
            type:'change_input_value',
            value:e.target.value
        }
        dispatch(action)
    },
    handleClick(){
        const action={
            type:'add_item'
        }
        dispatch(action)
    },
    handleDelete(){
        const action={
            type:'delete_item'
        }
        dispatch(action)
    }
}
}

//store.dispatch映射到props,所以可以通过this.props来调用dispatch方法
//前两个参数代表连接的规则，最后一个参数代表需要连接的组件名称
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
//TodoList是个UI组件，当connect把UI组件和逻辑组件相结合返回的时候，返回的是一个容器组件
