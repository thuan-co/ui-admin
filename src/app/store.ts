import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
// import counterReducer from '../features/counter/counterSlice';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
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
