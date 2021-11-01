import DataTable from 'fhp-component-library'
import { data, columns } from '../data'
import colors from '../utils/style/color'

export default function EmployeesPage() {
    return (
        <main className="employees-page">
            <h1>Current Employees</h1>
            <DataTable
                data={data}
                columns={columns}
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
