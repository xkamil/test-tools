import React from 'react';
import DataInput from "../../components/DataInput";


class TransformContainer extends React.Component {

    state = {
        input: '',
        output: ''
    };

    capitalize = () => {
        const {input} = this.state;
        this.setState({output: input.toUpperCase()})
    };

    toLowerCase = () => {
        const {input} = this.state;
        this.setState({output: input.toLowerCase()})
    };

    onInputChange = (input) => {
        this.setState({input})
    };

    render() {
        const {input, output} = this.state;

        return (
            <div className="row">
                <div className="col-12">
                    <DataInput placeholder={'Input'} value={input} onChange={this.onInputChange}/>
                    <div className={'m-1'} style={{textAlign: 'right'}}>
                        <span className={'mr-2'}><b>Characters:</b> {input.length}</span>
                        <span className={'mr-2'}><b>Words:</b> {input.split(/\s/).filter(w => w.trim().length > 0).length}</span>
                        <span className={'mr-2'}><b>Lines:</b> {input.split(/\n/).length}</span>
                    </div>
                    <div className={'mb-2'}></div>
                    <button className="btn btn-primary mr-1" onClick={this.capitalize}>capitalize</button>
                    <button className="btn btn-primary mr-1" onClick={this.toLowerCase}>to lower case</button>
                    <div className={'mb-2'}></div>
                    <DataInput placeholder={'Output'} readOnly={true} value={output} copyToClipboardBtn={true}/>
                </div>
            </div>
        );
    }
}

export default TransformContainer;