import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
    name: 'modalNewEmployee',
    initialState: { status: 'closed' },
    reducers: {
        openModal: (state) => {
            state.status = 'opened'
            return
        },
        closeModal: (state) => {
            state.status = 'closed'
            return
        },
    },
})

export default reducer
export const { openModal, closeModal } = actions
