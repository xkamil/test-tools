import React from 'react';
import './CopyToClipboardBtn.css';
import {removeNotification} from "../redux/actions/notificationActions";

class NotificationView extends React.Component {

    componentDidMount() {
        setTimeout(this.dispose, 1000);
    }

    dispose = () => {
        const {notification} = this.props;
        removeNotification(notification);
    };

    render() {
        const {notification} = this.props;

        return (
            <div ref="alert"
                 className={'alert alert-dismissible fade show alert-' + notification.type}
            >{notification.message}</div>
        )
    }
}

export default NotificationView;