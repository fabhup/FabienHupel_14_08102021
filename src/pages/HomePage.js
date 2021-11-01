import FormNewEmployee from '../components/FormNewEmployee'
import styled from 'styled-components'
import colors from '../utils/style/color'

const TitleHomePage = styled.h1`
    color: ${colors.primary};
`
export default function HomePage() {
    return (
        <main className="home-page">
            <TitleHomePage>Create Employee</TitleHomePage>
            <div className="container">
                <FormNewEmployee />
            </div>
        </main>
    )
}
