import React from 'react';
import DataInput from "../../components/DataInput";
import TextUtils from "./TextUtils";

class TransformContainer extends React.Component {

    state = {
        input: '',
        output: '',
        transform: TextUtils.toUpperCase
    };

    setTransform = (e) => {
        const name = e.target.id;
        const transform = TextUtils[name];
        if (!transform) {
            console.error('Unsupported transform: ' + name);
        } else {
            this.setState({transform}, this.transform)
        }
    };

    onInputChange = (input) => {
        this.setState({input}, () => this.transform())
    };

    transform = () => {
        this.setState(prevState => ({output: prevState.transform(prevState.input)}))
    };

    render() {
        const {input , output} = this.state;

        return (
            <div className="row">
                <div className="col-12">

                    <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={this.setTransform}>
                        <label className="btn btn-secondary active" id="toLowerCase" onClick={this.setTransform}>
                            <input type="radio" onChange={() => true}/>to lower case
                        </label>
                        <label className="btn btn-secondary" id="toUpperCase" onClick={this.setTransform}>
                            <input type="radio" name="toUpperCase" onChange={() => true}/> to upper case
                        </label>
                    </div>

                    <DataInput placeholder={'Input'} value={input} onChange={this.onInputChange}/>

                    <div className={'m-1 mb-3'} style={{textAlign: 'left'}}>
                        <span className={'mr-2'}><b>Characters:</b> {TextUtils.getNumberOfCharacters(input)}</span>
                        <span
                            className={'mr-2'}><b>Words:</b> {TextUtils.getNumberOfWords(input)}</span>
                        <span className={'mr-2'}><b>Lines:</b> {TextUtils.getNumberOfLines(input)}</span>
                    </div>

                    <DataInput placeholder={'Output'} readOnly={true} value={output} copyToClipboardBtn={true}/>
                </div>
            </div>
        );
    }
}

export default TransformContainer;