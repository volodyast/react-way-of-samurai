import React from "react";
import styles from "./FormsControls.module.css"

const FormalControl = ({input, meta, element, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {props.children}
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormalControl {...props}><textarea {...input} {...restProps}/></FormalControl>
    )
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormalControl{...props}> <input {...input} {...restProps}/></FormalControl>
    )
}