import React from 'react';
import ApiClient from "../../ApiClient";

const BASE_64 = 'base64';
const SHA_256 = 'sha256';

const ENCODE = 1;
const DECODE = 2;
const ENCODE_DECODE = 3;

function getSupportedAction(encoding) {
    switch (encoding){
        case BASE_64: return ENCODE_DECODE;
        case SHA_256: return ENCODE;
        default: return 0
    }
}

class EncodeDecodeContainer extends React.Component {

    state = {
        input: '',
        output: '',
        status: '',
        encoding: BASE_64
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

        ApiClient.encode(encoding, input)
            .then(res => this.setState({output: res.data, status: ` - ${encoding} encoded`}));
    };

    decode = () => {
        const {input, encoding} = this.state;
        this.setState({status: ' - DECODING IN PROGRESS'});

        ApiClient.decode(encoding, input)
            .then(res => this.setState({output: res.data, status: ` - ${encoding} decoded`}));
    };

    setStatus = (status) => {
        this.setState({status})
    };

    render() {
        const {output, input, status, encoding} = this.state;

        return (
            <>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <EncodingBtn currentEncoding={encoding} encoding={BASE_64} setEncoding={this.setEncoding}/>
                        <EncodingBtn currentEncoding={encoding} encoding={SHA_256} setEncoding={this.setEncoding}/>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button
                            onClick={this.encode}
                            className={'btn btn-success'}
                            disabled={(getSupportedAction(encoding) & ENCODE) === 0 }
                        ><b>ENCODE</b></button>
                        <button
                            onClick={this.decode}
                            className={'btn btn-danger'}
                            disabled={(getSupportedAction(encoding) & DECODE) === 0 }
                        ><b>DECODE</b></button>
                    </div>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <b>Input</b>
                    <textarea
                        className="form-control mt-1"
                        onChange={this.onInputChange}
                        style={{height: 150}}
                        value={input}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <span><b>Output </b> {status}</span>
                    <textarea
                        className="form-control mt-1"
                        readOnly={true}
                        style={{height: 150}}
                        value={output}
                    />
                </div>
            </div>
            </>
        );
    }
}

function EncodingBtn(props) {
    const {currentEncoding, encoding, setEncoding} = props;

    return <button className={`btn btn-${currentEncoding === encoding ? 'primary' : 'light'}`}
                   onClick={() => setEncoding(encoding)}>{encoding}</button>;
}

export default EncodeDecodeContainer;