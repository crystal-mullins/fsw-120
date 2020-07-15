import React, {Component} from '../node_modules/react'

const AuthContext = React.createContext()

class AuthProvider extends Component{
    
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <AuthContext.Provider
                value={{
                    ...this.state,
                }}
            
            
            >

                {this.props.children}

            </AuthContext.Provider>
        )
    } 
}


export default AuthProvider

 
export const withAuth = C  => props => (
     <AuthContext.Consumer>
         {value => <C {...props} {...value} /> }
     </AuthContext.Consumer>
 )

