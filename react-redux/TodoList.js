import React, {Component} from 'react';
import {connect} from 'react-redux'

class TodoList extends Component{

    render(){
        return(
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button>submit</button>
                </div>
                <ul>
                    <li>dell</li>
                </ul>
            </div>
        )
    }
}
//connect意思是让TodoList和store做连接
//mapStateToProps把store里面的数据映射给组件作为props，state代表store的数据
//所以store里面inputValue的值直接映射给todolist里的inputValue的值，作为props储存起来
const mapStateToProps=(state)=>{
    return{
        inputValue:state.inputValue
    }
}
//store.dispatch映射到props,所以可以通过this.props来调用dispatch方法
const mapDispatchToProps=(dispatch)=>{
    return{
        changeInputValue(e){
            const action={
                type:'change_input_value',
                value:e.target.value
            }
            dispatch(action);
        }

    }
}
//前两个参数代表连接的规则，最后一个参数代表需要连接的组件名称
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);