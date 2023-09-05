import { configureStore } from "@reduxjs/toolkit";

import { sliceCompteur } from "./compteurStore";

import { sliceUser } from "./userStore";

//exportation des actions
export const { plus,moins } = sliceCompteur.actions ;
///export const { fonction1,fonction2 } = monSlice.actions ;

export const {initUser , resetUser } = sliceUser.actions
//exportation du store
export const store = configureStore({
    reducer: {
        compteur: sliceCompteur.reducer,
        ///monreducer: monSlice.reducer,
        user: sliceUser.reducer,
    }
})