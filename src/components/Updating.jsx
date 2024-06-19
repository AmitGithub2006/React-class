import { Component } from "react";

class Updating extends Component {
    constructor() {
        super();
        this.state = {
            fname: "Gayatri",
        };
        console.log("Constructor Called");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps Called");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate Called");
        return true;
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log("getSnapshotBeforeUpdate Called");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate Called");
    }

    updateName = () => {
        this.setState({
            fname: "Sangeeta"
        });
    }

    render() {
        console.log("Render Called");
        return (
            <>
                <h1>My name is {this.state.fname}</h1>
                <button onClick={this.updateName}>Click</button>
            </>
        );
    }
}

export default Updating;