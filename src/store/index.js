import {configureStore} from "@reduxjs/toolkit";
import {countReducer} from "../store/reducer/counter"

export default configureStore ({reducer:{
  Sample : countReducer
}})

