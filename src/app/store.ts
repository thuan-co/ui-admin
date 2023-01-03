import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import productsReducer from '../features/redux-saga/productSlice';
import brandReducers from '../features/redux-saga/brand/brandSlice';
import messageReducers from '../features/redux-saga/message/messageSlice';
import listBrandsReducers from '../features/redux-saga/brand/listBrandSlice';
import batteryReducers from '../features/redux-saga/battery/batterySlice';
import connectReducers from '../features/redux-saga/connect/connectSlice';
import loginReducer from '../features/redux-saga/auth/loginSlice';
import cpuReducer from '../features/redux-saga/cpu/cpuSlice';
import listCpusReducer from '../features/redux-saga/cpu/listCpusSlice';
import listGpusReducer from '../features/redux-saga/gpu/listGpuSlice';
import gpuReducer from '../features/redux-saga/gpu/gpuSlice';
import cameraReducers from '../features/redux-saga/camera/cameraSlice';
import screenReducer from '../features/redux-saga/screen/screenSlice';
import phoneReducer from '../features/redux-saga/phone/phoneSlice';
import { imagePhoneReducers } from '../features/redux-saga/img/imgSlice';
import updatingPhoneReducer from '../features/redux-saga/phone/updateSlice';
// import counterReducer from '../features/counter/counterSlice';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    product: productsReducer,
    brand: brandReducers,
    // message: messageReducers,
    listBrands: listBrandsReducers,
    phone: phoneReducer,
    battery: batteryReducers,
    connect: connectReducers,
    login: loginReducer,
    cpu: cpuReducer,
    cpus: listCpusReducer,
    gpus: listGpusReducer,
    gpu: gpuReducer,
    camera: cameraReducers,
    screen: screenReducer,
    img_phone: imagePhoneReducers,
    update_phone: updatingPhoneReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   thunk: true,
  //   serializableCheck: false,
  //   immutableCheck: false,
  // }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: true
    }
  }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
