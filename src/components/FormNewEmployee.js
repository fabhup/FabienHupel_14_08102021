import styled from 'styled-components'
import colors from '../utils/style/color'
import Button from './Button'
import Input from './Input'
import Datepicker from './Datepicker'
import Select from './Select'
import { states, departments } from '../data/formData'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addEmployee} from '../features/employees'

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vh 3vh 1.5vh;
    max-width: 400px;
    border-radius: 3px;
`

const SubmitButton = styled(Button)`
    width: 60%;
    height: 2rem;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 2rem;
`

const FieldSet = styled.fieldset`
    width: 100%;
    padding: 12px;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 1rem 0;
    border: solid 2px ${colors.primary};
    border-radius: 3px;
    position: relative;

    & legend {
        padding: 0 6px;
    }
`

export default function FormNewEmployee() {
    const [newEmployee, setNewEmployee] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
    })
    const [startDate, setStartDate] = useState(null)
    const [dateOfBirth, setBirthDate] = useState(null)

    // get Redux state for employes
    const dispatch = useDispatch()

    function handleChangeInput(e) {
        const { name, value } = e.target
        setNewEmployee((newEmployee) => ({ ...newEmployee, [name]: value }))
    }

    function handleChangeDateOfBirth(date) {
        const dateValue = date.toLocaleDateString('en-CA')
        setBirthDate(date)
        setNewEmployee((newEmployee) => ({ ...newEmployee, dateOfBirth: dateValue }))
    }

    function handleChangeStartDate(date) {
        const dateValue = date.toLocaleDateString('en-CA')
        setStartDate(date)
        setNewEmployee((newEmployee) => ({ ...newEmployee, startDate: dateValue }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newEmployee)
        dispatch(addEmployee(newEmployee))
    }

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Input
                    inputType="text"
                    inputId="firstName"
                    inputLabel="First Name"
                    inputName="firstName"
                    onChange={handleChangeInput}
                    required
                    ></Input>
                <Input
                    inputType="text"
                    inputId="lastName"
                    inputLabel="Last Name"
                    inputName="lastName"
                    onChange={handleChangeInput}
                    required
                ></Input>
                <Datepicker
                    id="dateOfBirth"
                    label="Date of Birth"
                    name="dateOfBirth"
                    selected={dateOfBirth}
                    onChange={(date) => handleChangeDateOfBirth(date)}
                    required
                />
                <Datepicker
                    id="startDate"
                    label="Start date"
                    name="startDate"
                    selected={startDate}
                    onChange={(date) => handleChangeStartDate(date)}
                    required
                />
                <FieldSet className="address">
                    <legend align="left">Address</legend>
                    <Input
                        inputType="text"
                        inputId="street"
                        inputLabel="Street"
                        inputName="street"
                        onChange={handleChangeInput}
                    ></Input>
                    <Input
                        inputType="text"
                        inputId="city"
                        inputLabel="City"
                        inputName="city"
                        onChange={handleChangeInput}
                    ></Input>
                    <Select
                        selectId="state"
                        selectLabel="State"
                        selectName="state"
                        selectOptions={states}
                        onChange={handleChangeInput}
                    />
                    <Input
                        inputType="number"
                        inputId="zipCode"
                        inputLabel="Zip Code"
                        inputName="zipCode"
                        onChange={handleChangeInput}
                    ></Input>
                </FieldSet>
                <Select
                    selectId="department"
                    selectLabel="Department"
                    selectName="department"
                    selectOptions={departments}
                    onChange={handleChangeInput}
                    required
                />
                <SubmitButton
                    style={{ position: 'relative' }}
                    buttonType="submit"
                    buttonText="Save"
                />
            </Form>
        </FormContainer>
    )
}
