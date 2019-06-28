import React from 'react';
import ApiClient from "../../ApiClient";
import Encoding from "./Encoding";
import EncodeDecodeView from "./EncodeDecodeView";

class EncodeDecodeContainer extends React.Component {

    state = {
        input: '',
        output: '',
        status: '',
        encoding: Encoding.BASE_64
    };

    onInputChange = (e) => {
        this.setState({input: e.target.value});
    };

    setEncoding = (encoding) => {
        this.setState({encoding})
    };

    encode = () => {
        const {input, encoding} = this.state;

        this.setState({status: ' - ENCODING IN PROGRESS'});
        ApiClient.encode(encoding.name, input)
            .then(res => this.setState({output: res.data, status: ` - ${encoding.name} encoded`}));
    };

    decode = () => {
        const {input, encoding} = this.state;

        this.setState({status: ' - DECODING IN PROGRESS'});
        ApiClient.decode(encoding.name, input)
            .then(res => this.setState({output: res.data, status: ` - ${encoding.name} decoded`}));
    };

    copyOutputToInput = () => {
        this.setState(prevState => ({input: prevState.output, output: ''}))
    };

    render() {
        return <EncodeDecodeView {...this.state}
                                 encode={this.encode}
                                 decode={this.decode}
                                 setEncoding={this.setEncoding}
                                 copyOutputToInput={this.copyOutputToInput}
                                 onInputChange={this.onInputChange}/>
    }

}


export default EncodeDecodeContainer;