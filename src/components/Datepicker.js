import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`
const DatePickerLabel = styled.label`
    display: flex;
    font-weight: bold;
    margin: 10px 0;
    font-size: 1.1rem;
    text-align: left;
    width: 100%;
`

const DatePickerElement = styled(DatePicker)`
    padding: 10px 0px 10px 10px;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid lightgrey;
    color: dimgray;
    width: calc(100% - 10px);
    ${(props) => {
        if (props.isInvalid) {
            return `
                {
                    color: red;
                    border: 1px solid red !important;
                    box-shadow: 0px 0px red;
                    z-index: 1;
                    &:focus{ 
                        outline-color: red ;
                    }
                }
            `
        }
    }}
`

const InputInvalidText = styled.span`
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
    text-align: left;
`

export default function Datepicker({ id, name, label, value, onChange, required, isInvalid, isInvalidText }) {
    return (
        <DatePickerContainer>
            <DatePickerLabel htmlFor={id}>{label}</DatePickerLabel>
            <DatePickerElement
                type={'text'}
                id={id}
                name={name}
                selected={value || ''}
                onChange={onChange}
                required = {required}
                isInvalid = {isInvalid}
            />
            {isInvalid && <InputInvalidText>{isInvalidText}</InputInvalidText>}

        </DatePickerContainer>
    )
}
