import styled from 'styled-components'
import colors from '../utils/style/color'
import Button from './Button'
import Input from './Input'
import Datepicker from './Datepicker'
import Select from './Select'
import { states, departments } from '../data/formData'
import { useState } from 'react'

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
    const [startDate, setStartDate] = useState(null)
    const [birthDate, setBirthDate] = useState(null)

    return (
        <FormContainer>
            <Form>
                <Input
                    inputType="text"
                    inputId="first-name"
                    inputLabel="First Name"
                    inputName="first-name"
                    // inputValue={firstname}
                ></Input>
                <Input
                    inputType="text"
                    inputId="last-name"
                    inputLabel="Last Name"
                    inputName="last-name"
                ></Input>
                <Datepicker
                    id="date-of-birth"
                    label="Date of Birth"
                    name="date-of-birth"
                    selected={birthDate}
                    onChange={(date) => setBirthDate(date)}
                />
                <Datepicker
                    id="start-date"
                    label="Start date"
                    name="start-date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
                <FieldSet className="address">
                    <legend align="left">Address</legend>
                    <Input
                        inputType="text"
                        inputId="street"
                        inputLabel="Street"
                        inputName="street"
                    ></Input>
                    <Input
                        inputType="text"
                        inputId="city"
                        inputLabel="City"
                        inputName="city"
                    ></Input>
                    <Select
                        selectId="state"
                        selectLabel="State"
                        selectName="state"
                        selectOptions={states}
                    />
                    <Input
                        inputType="number"
                        inputId="zip-code"
                        inputLabel="Zip Code"
                        inputName="zip-code"
                    ></Input>
                </FieldSet>
                <Select
                    selectId="department"
                    selectLabel="Department"
                    selectName="department"
                    selectOptions={departments}
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
