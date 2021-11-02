import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/employees'
import modalNewEmployeeReducer from '../features/modalNewEmployee'

const store = configureStore({
    reducer: {
        employees: employeesReducer,
        modalNewEmployee: modalNewEmployeeReducer,
    },
})

export default store
