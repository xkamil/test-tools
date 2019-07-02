import React from 'react';
import DataInput from "../../components/DataInput";
import TextUtils from "./TextUtils";

class TransformContainer extends React.Component {

    state = {
        input: '',
        output: '',
        transform: TextUtils.toUpperCase
    };

    setTransform = (transform) => {
        this.setState({transform}, this.transform)
    };

    onInputChange = (input) => {
        this.setState({input}, () => this.transform())
    };

    transform = () => {
        this.setState(prevState => ({output: prevState.transform(prevState.input)}))
    };

    render() {
        const {input, output, transform} = this.state;

        return (
            <div className="row">
                <div className="col-12">

                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <SetTransformBtn name={'to upper case'}
                                         currentTransform={transform}
                                         setTransform={this.setTransform}
                                         transform={TextUtils.toUpperCase}/>
                        <SetTransformBtn name={'to lower case'}
                                         currentTransform={transform}
                                         setTransform={this.setTransform}
                                         transform={TextUtils.toLowerCase}/>
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

function SetTransformBtn(props) {
    const {setTransform, transform, currentTransform, name} = props;

    return (
        <label className={`btn btn-secondary ${currentTransform === transform ? 'active' : ''}`}
               onClick={() => setTransform(transform)}>
            <input type="radio" onChange={() => true}/>{name}
        </label>
    )
}

export default TransformContainer;