import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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
    margin-bottom: 1rem;
`

export default function Datepicker({ id, name, label, selected, onChange, required }) {
    return (
        <DatePickerContainer>
            <DatePickerLabel htmlFor={id}>{label}</DatePickerLabel>
            <DatePickerElement
                type={'text'}
                id={id}
                name={name}
                selected={selected}
                onChange={onChange}
                required = {required}
            />
        </DatePickerContainer>
    )
}
