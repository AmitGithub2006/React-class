import { Component } from 'react';

class Unmounting extends Component {
    constructor() {
        console.log("Constructor Called");
        super();
        this.state = {
           data: "Hello World",
        };
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        console.log("Render Called");
        return (
            <>
                <h1>{this.state.data}</h1>
            </>
        );
    }
}

export default Unmounting;