import React from 'react';
import ApiClient from "../../ApiClient";
import Encoding from "./Encoding";
import EncodeDecodeView from "./EncodeDecodeView";
import {addSuccessNotification} from "../../redux/actions/notificationActions";

class EncodeDecodeContainer extends React.Component {

    state = {
        input: '',
        output: '',
        encoding: Encoding.BASE_64
    };

    onInputChange = (value) => {
        this.setState({input: value});
    };

    setEncoding = (encoding) => {
        this.setState({encoding})
    };

    encode = () => {
        const {input, encoding} = this.state;

        ApiClient.encode(encoding.name, input)
            .then(res => {
                addSuccessNotification('Encoded to ' + encoding.name);
                this.setState({output: res.data})
            });
    };

    decode = () => {
        const {input, encoding} = this.state;

        ApiClient.decode(encoding.name, input)
            .then(res => {
                addSuccessNotification('Decoded from ' + encoding.name);
                this.setState({output: res.data})
            });
    };

    render() {
        return <EncodeDecodeView {...this.state}
                                 encode={this.encode}
                                 decode={this.decode}
                                 setEncoding={this.setEncoding}
                                 onInputChange={this.onInputChange}/>
    }

}


export default EncodeDecodeContainer;