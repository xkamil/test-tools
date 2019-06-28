import React from 'react';
import Encoding from "./Encoding";

function EncodeDecodeView(props) {
    const {output, input, status, encoding} = props;
    const {copyOutputToInput, encode, decode, setEncoding, onInputChange} = props;

    return (
        <>
        <div className="row mt-2">
            <div className="col-12">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <EncodingBtn currentEncoding={encoding}
                                 encoding={Encoding.BASE_64}
                                 setEncoding={setEncoding}/>
                    <EncodingBtn currentEncoding={encoding}
                                 encoding={Encoding.SHA_256}
                                 setEncoding={setEncoding}/>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12">
                <b>Input</b>
                <textarea className="form-control mt-1"
                          onChange={onInputChange}
                          style={{height: 150}}
                          value={input}/>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-12">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={encode}
                            className={'btn btn-primary mr-1'}
                            style={{display: encoding.encode ? 'block' : 'none'}}
                    ><b>ENCODE</b></button>
                    <button onClick={decode}
                            className={'btn btn-primary mr-1'}
                            style={{display: encoding.decode ? 'block' : 'none'}}
                    ><b>DECODE</b></button>
                    <button data-toggle="tooltip"
                            data-placement="bottom"
                            title="Copy output to input"
                            className={'btn btn-primary mg-1'}
                            onClick={copyOutputToInput}
                    >^</button>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12">
                <span><b>Output </b> {status}</span>
                <textarea className="form-control mt-1"
                          readOnly={true}
                          style={{height: 150}}
                          value={output}/>
            </div>
        </div>
        </>
    );
}

function EncodingBtn(props) {
    const {currentEncoding, encoding, setEncoding} = props;

    return <button className={`btn btn-${currentEncoding === encoding ? 'success' : 'secondary'}`}
                   onClick={() => setEncoding(encoding)}>{encoding.name}</button>;
}

export default EncodeDecodeView;