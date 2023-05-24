import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import pageReducer from './pageSlice'
import videoReducer from './videoSlice'

const persistConfig = {
  key : 'root',
  storage
}

const rootReducer = combineReducers({
  page: pageReducer,
  video : videoReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store =  configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);