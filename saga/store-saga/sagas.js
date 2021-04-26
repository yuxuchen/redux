import { takeEvery,put } from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionType';
import {InitListAction} from './actionCreator'
import axios from 'axios';


function* getInitList(){
    try {const res= yield axios.get('/list.json');
    const action=InitListAction(res.data);
    yield put(action)}
    catch(e){
        console.log('网络请求失败')
    }
    
}
//generator函数
function* mySaga(){
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;