import React from 'react';
import ApiClient from "../../ApiClient";
import DataInput from "../../components/DataInput";


class RandomContainer extends React.Component {

    state = {
        uuid: ''
    };

    getUUID = () => {
        ApiClient.getRandomUUID()
            .then(res => this.setState({uuid: res.data}));
    };

    render() {
        const {uuid} = this.state;

        return (
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary mb-2" onClick={this.getUUID}>UUIDv4</button>
                    <DataInput placeholder={'Output'} readOnly={true} value={uuid} copyToClipboardBtn={true}/>
                </div>
            </div>
        );
    }
}

export default RandomContainer;