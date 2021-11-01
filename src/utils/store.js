import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/employees'

const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
})

export default store
