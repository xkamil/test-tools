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
                    <div className={'mb-2'}></div>
                    <button className="btn btn-primary" onClick={this.capitalize}>capitalize</button>
                    <button className="btn btn-primary" onClick={this.toLowerCase}>to lower case</button>
                    <div className={'mb-2'}></div>
                    <DataInput placeholder={'Output'} readOnly={true} value={output} copyToClipboardBtn={true}/>
                </div>
            </div>
        );
    }
}

export default TransformContainer;