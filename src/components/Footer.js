import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #eeeeee;
    padding: 2vh 0 1.5vh;
    height: 40px;
`

function Footer() {
    return (
        <FooterContainer>
            <p>{`Copyright ${new Date().getFullYear()} WealthHealth`}</p>
        </FooterContainer>
    )
}

export default Footer
