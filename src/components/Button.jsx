import React from 'react';

const Button = (props) => {
    const enableDisable = !props.isDisabled ? "btn-enable" : "btn-disabled"


    return(
       <button
       id={props.id}
       className={`btn ${enableDisable} btn-${props.variant} boxShadow-${props.shadow} btn-${props.size}`}
       type={props.type}
       disabled={props.isDisabled}
       >
        <span className={`material-symbols-outlined icon icon-${props.iconPosition}`}>{props.icon}</span>
        {props.children}
       </button> 
    )
}

Button.defaultProps = {
    type: "button",
    disabled: false,
    variant: "default",
    size: "md",
    iconVariant: 'outlined'
}

export default Button