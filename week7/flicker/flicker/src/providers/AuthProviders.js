import React, {Component} from 'react'

const AuthContext = React.createContext()

class AuthProvider extends Component{
    
    constructor(){
        super()
        this.state={
            inTestState: 'hi'
        //    userName:'',
        //    password:'',


        }
    }

   handleSubmit = () => {
    console.log('fun run')
}

    render(){
        return(
            <AuthContext.Provider
                value={
                    {
                    ...this.state,
                   handleSubmit: this.handleSubmit
                }
            }
            
            
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

