import React from 'react';
import './CopyToClipboardBtn.css';
import {addSuccessNotification} from "../redux/actions/notificationActions";

class CopyToClipboardBtn extends React.Component {

    copyToClipboard = () => {
        const {target} = this.props;

        target.select();
        document.execCommand('copy');
        addSuccessNotification('Copied text to clipboard');
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