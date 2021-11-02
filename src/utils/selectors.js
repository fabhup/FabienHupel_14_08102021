export const selectEmployees = (state) => state.employees

export const selectLastEmployeeCreated = (state) =>
    state.employees.lastEmployeeCreated
export const selectModalNewEmployeeStatus = (state) =>
    state.modalNewEmployee.status
