import React from 'react';
import DataInput from "../../components/DataInput";
import TextUtils from "../TextUtils";

class TransformContainer extends React.Component {

    state = {
        input: '',
        output: '',
        transforms: [TextUtils.toUpperCase]
    };

    setTransform = (transform) => {
        this.setState(prevState => {
            let transforms = [...prevState.transforms];

            if (transforms.indexOf(transform) === -1) {
                transforms.push(transform);
            } else {
                transforms.splice(transforms.indexOf(transform), 1);
            }
            
            return {transforms}
        }, this.transform)
    };

    onInputChange = (input) => {
        this.setState({input}, () => this.transform())
    };

    transform = () => {
        const {transforms, input} = this.state;

        let output = input;
        transforms.forEach(t => output = t(output));
        this.setState({output})
    };

    render() {
        const {input, output, transforms} = this.state;

        return (
            <div className="row">
                <div className="col-12">
                    <b>Transform</b> - transform text
                    <hr/>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <SetTransformBtn name={'to upper case'}
                                         activeTransforms={transforms}
                                         setTransform={this.setTransform}
                                         transform={TextUtils.toUpperCase}/>
                        <SetTransformBtn name={'to lower case'}
                                         activeTransforms={transforms}
                                         setTransform={this.setTransform}
                                         transform={TextUtils.toLowerCase}/>
                        <SetTransformBtn name={'to snake case'}
                                         activeTransforms={transforms}
                                         setTransform={this.setTransform}
                                         transform={TextUtils.toSnakeCase}/>
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
    const {setTransform, transform, activeTransforms, name} = props;

    return (
        <label className={`btn btn-${activeTransforms.indexOf(transform) > -1 ? 'primary' : 'secondary'}`}
               onClick={() => setTransform(transform)}>
            <input type="radio" onChange={() => true}/>{name}
        </label>
    )
}

export default TransformContainer;