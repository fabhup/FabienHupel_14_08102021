import styled from 'styled-components'
import colors from '../utils/style/color'
import Button from './Button'
import Input from './Input'
import Datepicker from './Datepicker'
import Select from './Select'
import { states, departments } from '../data/formData'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../features/employees'
import { openModal } from '../features/modalNewEmployee'

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

const FormNewEmployee = () => {
    const emptyEmployee = {
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        startDate: null,
        street: null,
        city: null,
        state: null,
        zipCode: null,
        department: null,
    }
    const [newEmployee, setNewEmployee] = useState(emptyEmployee)
    const [startDate, setStartDate] = useState('')
    const [dateOfBirth, setBirthDate] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const dateOfBirthRef = useRef()
    const startDateRef = useRef()
    const departmentRef = useRef()

    // get Redux state for employees
    const dispatch = useDispatch()

    useEffect(() => {
        // Focus on first input on first render component
        firstNameRef.current.focus()
    }, [])

    function handleChangeInput(e) {
        const { name, value } = e.target
        setNewEmployee((newEmployee) => ({ ...newEmployee, [name]: value }))
    }

    function handleChangeDateOfBirth(date) {
        const dateValue = date ? date.toLocaleDateString('en-CA') : ''
        setBirthDate(date)
        setNewEmployee((newEmployee) => ({
            ...newEmployee,
            dateOfBirth: dateValue,
        }))
    }

    function handleChangeStartDate(date) {
        const dateValue = date ? date.toLocaleDateString('en-CA') : ''
        setStartDate(date)
        setNewEmployee((newEmployee) => ({
            ...newEmployee,
            startDate: dateValue,
        }))
    }

    function resetForm(e) {
        e.target.reset()
        setNewEmployee(emptyEmployee)
        setStartDate('')
        setBirthDate('')
        setSubmitted(false)
    }

    function focusOnFirstInvalidInput() {
        if (!newEmployee.firstName) {
            firstNameRef.current.focus()
        } else if (!newEmployee.lastName) {
            lastNameRef.current.focus()
        } else if (!newEmployee.dateOfBirth) {
            dateOfBirthRef.current.focus()
        } else if (!newEmployee.startDate) {
            startDateRef.current.focus()
        } else if (!newEmployee.department) {
            departmentRef.current.focus()
        } else {
            firstNameRef.current.focus()
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
        const isValidForm =
            newEmployee.firstName &&
            newEmployee.lastName &&
            newEmployee.dateOfBirth &&
            newEmployee.startDate &&
            newEmployee.department
                ? true
                : false
        console.log(isValidForm)
        if (isValidForm) {
            dispatch(addEmployee(newEmployee))
            dispatch(openModal())
            resetForm(e)
        } else {
            focusOnFirstInvalidInput()
        }
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
                    isInvalid={submitted && !newEmployee.firstName}
                    isInvalidText={'First Name is required'}
                    innerRef={firstNameRef}
                ></Input>
                <Input
                    inputType="text"
                    inputId="lastName"
                    inputLabel="Last Name"
                    inputName="lastName"
                    onChange={handleChangeInput}
                    isInvalid={submitted && !newEmployee.lastName}
                    isInvalidText={'Last Name is required'}
                    innerRef={lastNameRef}
                ></Input>
                <Datepicker
                    id="dateOfBirth"
                    label="Date of Birth"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(date) => handleChangeDateOfBirth(date)}
                    isInvalid={submitted && !newEmployee.dateOfBirth}
                    isInvalidText={'Date of Birth is required'}
                    innerRef={dateOfBirthRef}
                />
                <Datepicker
                    id="startDate"
                    label="Start date"
                    name="startDate"
                    value={startDate}
                    onChange={(date) => handleChangeStartDate(date)}
                    isInvalid={submitted && !newEmployee.startDate}
                    isInvalidText={'Start Date is required'}
                    innerRef={startDateRef}
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
                    isInvalid={submitted && !newEmployee.department}
                    isInvalidText={'Department is required'}
                    innerRef={departmentRef}
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

export default FormNewEmployee
