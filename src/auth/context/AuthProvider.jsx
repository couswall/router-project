import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        // SI el user es undefined, con la doble negación el valor booleano será false
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch ] = useReducer( authReducer, {}, init );

    //Login Function
    const login = ( user = {} ) => {

        const action = {
            type: types.login,
            payload: user
        }

        // Añadido a local storage
        localStorage.setItem('user', JSON.stringify( user ) );

        dispatch( action );
    }
    
    const logout = () => {
        //Elimina el user de local storage
        localStorage.removeItem('user');
        const action = { 
            type: types.logout 
        }
        dispatch( action );
    }

  return (
    <AuthContext.Provider value={{ ...authState, login: login, logout: logout}}>
        { children }
    </AuthContext.Provider>
  )
}
