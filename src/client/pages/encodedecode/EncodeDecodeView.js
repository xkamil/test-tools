import React from 'react';
import Encoding from "./Encoding";
import DataInput from "../../components/DataInput";

function EncodeDecodeView(props) {
    const {output, input, encoding} = props;
    const {copyOutputToInput, encode, decode, setEncoding, onInputChange} = props;

    return (
        <>
        <div className="row mt-2">
            <div className="col-12">
                <div className="btn-group" role="group">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <EncodingBtn currentEncoding={encoding} setEncoding={setEncoding}
                                     btnEncoding={Encoding.BASE_64}/>
                        <EncodingBtn currentEncoding={encoding} setEncoding={setEncoding}
                                     btnEncoding={Encoding.SHA_256}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12">
                <DataInput placeholder={'Input'} onChange={onInputChange} value={input}/>
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
                    >^
                    </button>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12">
                <DataInput placeholder={'Output'} readOnly={true} value={output} copyToClipboardBtn={true}/>
            </div>
        </div>
        </>
    );
}

function EncodingBtn(props) {
    const {btnEncoding, currentEncoding, setEncoding} = props;

    return (
        <label className={`btn btn-secondary ${currentEncoding === btnEncoding ? 'active' : ''}`}
               onClick={() => setEncoding(btnEncoding)}>
            <input type="radio" onChange={() => true}/>{btnEncoding.name}
        </label>
    )
}

export default EncodeDecodeView;