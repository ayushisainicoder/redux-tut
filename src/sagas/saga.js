import { delay } from '@redux-saga/core/effects';
import {takeLatest, put} from 'redux-saga/effects'

function* incrementUpAsync(){
    yield delay(3000)
    yield put({type:"ADD_TO_CART_INCREMENT", value:1 })
}

export function* incrementUp(){
    yield takeLatest('ADD_TO_CART', incrementUpAsync);
}

// export function* helloSaga() {
//     console.log('Hello Sagas!')
//   }