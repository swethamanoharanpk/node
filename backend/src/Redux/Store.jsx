// import {configureStore} from '@reduxjs/toolkit'
// import userinfos from './Userslice'
// export default configureStore({
//     reducer:{loginInfo:userinfos}
// }
// )


//redux-persist


import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginpage from './Userslice'




const persistConfig = {
  key: 'NEWPROJECT',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, loginpage)

export const store = configureStore({
  reducer: {
    loginInfo:persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

