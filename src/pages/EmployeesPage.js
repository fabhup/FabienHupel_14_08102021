import DataTable from 'fhp-component-library'
import {  columnsDatatableEmployees } from '../data/defaultData'
import colors from '../utils/style/color'
import { useSelector } from 'react-redux'
import { selectEmployees } from '../utils/selectors'

export default function EmployeesPage() {

    // get Redux state for employees
    const employees = useSelector(selectEmployees)

    return (
        <main className="employees-page">
            <h1>Current Employees</h1>
            <DataTable
                data={employees.data}
                columns={columnsDatatableEmployees}
                striped
                customColors={{
                    primaryColor: '#424242',
                    primaryColorBackground: colors.backgroundLight,
                    secondaryColor: 'white',
                    secondaryColorBackground: colors.secondary,
                    stripedColor: '#424242',
                    stripedColorBackground: '#F5F5F5',
                }}
            />
        </main>
    )
}
