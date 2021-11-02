import FormNewEmployee from '../components/FormNewEmployee'
import styled from 'styled-components'
import colors from '../utils/style/color'
import Modal from '../components/Modal'
import { useSelector, useDispatch } from 'react-redux'
import {
    selectLastEmployeeCreated,
    selectModalNewEmployeeStatus,
} from '../utils/selectors'
import { closeModal } from '../features/modalNewEmployee'

const TitleHomePage = styled.h1`
    color: ${colors.primary};
`
export default function HomePage() {
    // get Redux state for employees
    const lastEmployeeCreated = useSelector(selectLastEmployeeCreated)
    const modalNewEmployeeStatus = useSelector(selectModalNewEmployeeStatus)
    const dispatch = useDispatch()

    return (
        <main className="home-page">
            <TitleHomePage>Create Employee</TitleHomePage>
            <div className="container">
                <FormNewEmployee />
            </div>
            <Modal
                title="New employee created"
                onClose={() => dispatch(closeModal())}
                displayModal={modalNewEmployeeStatus === 'opened'}
            >
                {lastEmployeeCreated && modalNewEmployeeStatus === 'opened' && (
                    <div>
                        <strong>
                            {lastEmployeeCreated.firstName.toUpperCase()}{' '}
                            {lastEmployeeCreated.lastName.toUpperCase()}
                        </strong>
                        <br />

                        {` has been created successfully !`}
                    </div>
                )}
            </Modal>
        </main>
    )
}
