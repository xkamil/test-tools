import React from 'react';
import {connect} from 'react-redux'
import './CopyToClipboardBtn.css';
import NotificationView from "./NotificationView";

class NotificationContainer extends React.Component {

    render() {
        const {notifications} = this.props;

        const notificationsView = notifications.map(n=> <NotificationView notification={n} key={n.id} onDispose={this.dispose}/>);

        const style = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            opacity: 0.9,
            marginTop:  -50,
            marginLeft: -150,
        };

        return <div style={style}>{notificationsView}</div>

    }
}

const mapStateToProps = (state) => ({
    notifications: state.notifications
});

export default connect(mapStateToProps)(NotificationContainer);
