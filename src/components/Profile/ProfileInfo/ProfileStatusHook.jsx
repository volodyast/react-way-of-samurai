import React, {useState, useEffect} from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        return () => {
            setStatus(props.status);
        };
    }, [props.status]);


    let activeEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (<div>
        {editMode ? <div>
                <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            :
            <div>
                    <span onDoubleClick={activeEditMode}>
                   {props.status || '----------'}
               </span>
            </div>}
    </div>)
}

export default ProfileStatus;