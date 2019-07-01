import React from 'react';
import './CopyToClipboardBtn.css';

class CopyToClipboardBtn extends React.Component {

    copyToClipboard = () => {
        const {target} = this.props;

        target.select();
        document.execCommand('copy');
    };

    render() {
        return (
            <div className={'copyToClipboardBtn btn btn-success btn-sm'}
                 title={'Copy to clipboard'}
                 onClick={this.copyToClipboard}>copy</div>
        )
    }
}

export default CopyToClipboardBtn;


class StatusPopup extends React.Component {

    componentDidMount() {
        setInterval(()=>{}, 500)
    }

    render() {
        return (<span>aaa</span>)
    }
}