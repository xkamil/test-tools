import React from 'react';
import DataInput from "../../components/DataInput";
import TextUtils from "../TextUtils";


class FormatContainer extends React.Component {

    state = {
        format: TextUtils.formatJSON,
        input: ''
    };

    setFormatting = (format) => {
        this.setState({format});
    };

    onChange = (value) => {
        const {format} = this.state;

        const formattedValue = format(value);
        this.setState({input: formattedValue});
    };

    render() {
        const {format, input} = this.state;

        return (
            <div className="row">
                <div className="col-12">
                    <b>Format</b> - format data to more readable form
                    <hr/>

                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <SetFormattingBtn name={'JSON'}
                                          currentFormatting={format}
                                          setFormatting={this.setFormatting}
                                          format={TextUtils.formatJSON}/>
                    </div>

                    <DataInput placeholder={'Input'}
                               value={input}
                               onChange={this.onChange}
                               className={'inputDark lined'}
                               maxHeight={500}
                               copyToClipboardBtn={true}/>
                </div>
            </div>
        );
    }
}

function SetFormattingBtn(props) {
    const {setFormatting, format, currentFormatting, name} = props;

    return (
        <label className={`btn btn-secondary ${currentFormatting === format ? 'active' : ''}`}
               onClick={() => setFormatting(format)}>
            <input type="radio" onChange={() => true}/>{name}
        </label>
    )
}

export default FormatContainer;