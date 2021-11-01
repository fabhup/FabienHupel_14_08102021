import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
`
const SelectLabel = styled.label`
    display: flex;
    font-weight: bold;
    margin: 10px 0;
    font-size: 1.1rem;
`

const SelectElement = styled.select`
    padding: 10px;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid lightgrey;
    color: dimgray;
`

export default function Select({
    selectId,
    selectName,
    selectLabel,
    selectOptions,
}) {
    return (
        <SelectContainer>
            <SelectLabel htmlFor={selectId}>{selectLabel}</SelectLabel>
            <SelectElement id={selectId} name={selectName}>
                {selectOptions.map((option, index) => (
                    <option
                        value={option.abbreviation || option.name}
                        key={index}
                    >
                        {option.name}
                    </option>
                ))}
            </SelectElement>
        </SelectContainer>
    )
}

Select.propTypes = {
    selectId: PropTypes.string.isRequired,
    selectName: PropTypes.string.isRequired,
    selectLabel: PropTypes.string,
    selectOptions: PropTypes.arrayOf(
        PropTypes.shape({
            abbreviation: PropTypes.string,
            name: PropTypes.string,
        })
    ),
}
