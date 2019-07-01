import React from 'react';
import {connect} from 'react-redux'
import './CopyToClipboardBtn.css';
import NotificationView from "./NotificationView";

class NotificationContainer extends React.Component {

    constructor(){
        super();
    }

    render() {
        const {notifications} = this.props;

        const notificationsView = notifications.map(n=> <NotificationView notification={n} key={n.id} onDispose={this.dispose}/>);

        const style = {
            position: 'absolute',
            top: 5,
            right: '10%'
        };

        return <div style={style}>{notificationsView}</div>

    }
}

const mapStateToProps = (state) => ({
    notifications: state.notifications
});

export default connect(mapStateToProps)(NotificationContainer);
