import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputContainer = styled.div`
    display: flex;
    width: 100%;
    ${(props) => {
        if (props.type !== 'checkbox') {
            return `
                flex-direction: column;
                text-align: left;
                margin-bottom: 1rem;
            `
        }
    }}
`
const InputLabel = styled.label`
    display: flex;
    font-weight: bold;
    margin: 10px 0;
    font-size: 1.1rem;
    ${(props) => {
        if (props.type === 'checkbox') {
            return `margin-left: 0.25rem;
            order:2`
        }
    }}
`

const InputElement = styled.input`
    ${(props) => {
        if (props.type === 'checkbox') {
            return `
                margin: auto 0;
            `
        } else {
            return `
                padding: 10px;
                font-size: 1rem;
                border-radius: 3px;
                border: 1px solid lightgrey;
                color: dimgray;
            `
        }
    }}
    ${(props) => {
        if (props.isInvalid) {
            return `
                color: red;
                border: 1px solid red;
                box-shadow: 0px 0px red;
                z-index: 1;
                &:focus{ 
                    outline-color: red ;
                }
            `
        }
    }}
`

const InputInvalidText = styled.span`
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
`

export default function Input({
    inputId,
    inputType,
    inputName,
    inputLabel,
    onChange,
    onClick,
    inputDefaultValue,
    inputValue,
    inputPlaceholder,
    isInvalid,
    isInvalidText,
    required,
    disabled,
    innerRef
}) {
    return (
        <InputContainer type={inputType}>
            <InputLabel type={inputType} htmlFor={inputId}>
                {inputLabel}
            </InputLabel>
            <InputElement
                type={inputType}
                id={inputId}
                name={inputName}
                onChange={onChange}
                onClick={onClick}
                defaultValue={inputDefaultValue}
                value={inputValue}
                defaultChecked={inputValue}
                autoComplete="on"
                placeholder={inputPlaceholder}
                required={required}
                disabled={disabled}
                isInvalid={isInvalid}
                ref={innerRef}
            />
            {isInvalid && <InputInvalidText className="inputError">{isInvalidText}</InputInvalidText>}
        </InputContainer>
    )
}

Input.propTypes = {
    inputId: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputLabel: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    inputValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    isInvalid: PropTypes.bool,
    isInvalidText: PropTypes.string,
    inputPlaceholder: PropTypes.string,
}

Input.defaultProps = {
    onChange: function() {},
    onClick: function() {},
    isInvalid: false,
    isInvalidText: 'Invalid value',
    inputPlaceholder: '',
}
