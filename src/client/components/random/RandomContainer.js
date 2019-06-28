import React from 'react';
import ApiClient from "../../ApiClient";


class RandomContainer extends React.Component {

    state = {
        uuid: 'aaa'
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
                    <div className="input-group">
                        <button className="btn btn-primary" onClick={this.getUUID}>UUIDv4</button>
                        <TextBox value={uuid}/>
                    </div>
                </div>
            </div>
        );
    }
}

function TextBox(props) {
    const {value} = props;

    return <span
        className="form-control"
        title="Copy to clipboard"
        readOnly={true}>{value}</span>
}

export default RandomContainer;