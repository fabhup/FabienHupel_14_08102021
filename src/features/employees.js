import { createSlice } from '@reduxjs/toolkit'
import { dataEmployees } from '../data/defaultData'

const initialState = {
          data: dataEmployees,
    }

    const { actions, reducer } = createSlice({
        name: 'employees',
        initialState: initialState,
        reducers: {
            addEmployee: (draft, action) => {
                draft.data = [...draft.data, {
                    id: Math.max(...draft.data.map(o => o.id), 0) + 1,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    dateOfBirth: action.payload.dateOfBirth,
                    startDate: action.payload.startDate,
                    department: action.payload.department,
                    street: action.payload.street,
                    city: action.payload.city,
                    state: action.payload.state,
                    zipCode: action.payload.zipCode,
                }]
                return
            }
        },
    })
    
    export default reducer
    export const {addEmployee} = actions
    