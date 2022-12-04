import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import productsReducer from '../features/redux-saga/productSlice';
import brandReducers from '../features/redux-saga/brand/brandSlice';
import messageReducers from '../features/redux-saga/message/messageSlice';
import listBrandsReducers from '../features/redux-saga/brand/listBrandSlice';
// import counterReducer from '../features/counter/counterSlice';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    product: productsReducer,
    brand: brandReducers,
    message: messageReducers,
    listBrands: listBrandsReducers,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   thunk: true,
  //   serializableCheck: false,
  //   immutableCheck: false,
  // }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
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
