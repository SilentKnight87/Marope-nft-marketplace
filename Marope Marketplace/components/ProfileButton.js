class ProfileButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            authState: false,

        }
    }
    render() {
        return (
            
            <div>
                <button onClick={login}>Hey</button>               
            </div>
        )
    }
}


