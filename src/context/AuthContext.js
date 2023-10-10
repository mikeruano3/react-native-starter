import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customNavigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return {
        ...state,
        errorMessage: action.payload
      }
    case "signup":
      return {
        ...state,
        errorMessage: '',
        token: action.payload
      }
    default:
      return state
  }
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signup', payload: response.data.token })
      customNavigate('MainFlow')
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
      //console.error(err.data ?? err.response?.data)
    }
}

const signin = (dispatch) => ({ email, password }) => {
}

const signout = (dispatch) => {

}


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
)