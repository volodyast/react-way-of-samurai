import React from 'react';

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.state.status
            })
        }
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <div>
            {this.state.editMode ? <div>
                    <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactiveEditMode}
                           value={this.state.status}/>
                </div>
                :
                <div>
                    <span onDoubleClick={this.activeEditMode}>
                   {this.state.status || '----------'}
               </span>
                </div>}
        </div>
    }
}