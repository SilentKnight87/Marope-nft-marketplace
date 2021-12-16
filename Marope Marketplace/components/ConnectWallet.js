class ConnectWallet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            authState: false,

        }
    }
     getDerivedStateFromProps(props, state) {
        if(!props.login.user){
            return{authState: true}
        }
    }

    render() {
        return (
            
            <div>
                <button onClick={login}>{!this.state.authState ? 'Connect Wallet' : 'Profile'}</button>
               
            </div>
        )
    }
}
console.log('this is user',login.user);


