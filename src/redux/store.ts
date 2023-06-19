import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from "redux-persist";

import formDataReducer from "./slices/formSlice";
import progressBarReducer from "./slices/progressBarSlice";
import { formApi } from "../shared/api/formSend";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  formData: formDataReducer,
  progressBar: progressBarReducer,
  [formApi.reducerPath]: formApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(formApi.middleware),
});
export const persistor = persistStore(store);

export default store;

setupListeners(store.dispatch);
