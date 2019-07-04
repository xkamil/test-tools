import React from 'react';
import CopyToClipboardBtn from "./CopyToClipboardBtn";

class DataInput extends React.Component {

    state = {
        height: null,
        target: null
    };

    componentDidMount() {
        this.setState({target: this.refs.textarea});
        this.calculateHeight();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.calculateHeight();
        }
    }

    //TODO calculate height basing on number of lines
    calculateHeight = () => {
        const {maxHeight} = this.props;

        const {textarea} = this.refs;
        const currentHeight = textarea.clientHeight;
        const scrollHeight = textarea.scrollHeight;

        if (currentHeight < scrollHeight) {
            const height = scrollHeight > maxHeight ? maxHeight : scrollHeight;
            this.setState({height})
        }
    };

    render() {
        const {readOnly, value, initHeight, copyToClipboardBtn, onChange, placeholder, className} = this.props;
        const {height, target} = this.state;

        const style = {
            height: height || initHeight,
        };

        return (
            <div style={{position: 'relative'}}>
                <textarea ref="textarea"
                          placeholder={placeholder}
                          className={'form-control mt-1 ' + className}
                          readOnly={readOnly}
                          onChange={e => onChange(e.target.value)}
                          style={style}
                          spellCheck={false}
                          value={value}/>

                {copyToClipboardBtn &&
                <CopyToClipboardBtn target={target}/>
                }
            </div>
        )
    }

}

DataInput.defaultProps = {
    readOnly: false,
    value: '',
    onChange: () => {},
    style: {},
    initHeight: 40,
    maxHeight: 150,
    copyToClipboardBtn: false
};

export default DataInput;