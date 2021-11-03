import logo from '../assets/logo.png'
import logoAVIF from '../assets/logo.avif'

import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import colors from '../utils/style/color'

const Logo = styled.picture`
    & img,
    & source {
        width: 160px;
        height: 160px;
        flex-direction: column;
        margin: 1rem 0 1rem 5vw;
        position: relative;
        top: 0;
        left: 0;
    }
`

const StyledHeader = styled.header`
    display: flex;
    border-bottom: #eeeeee solid 1px;
    justify-content: space-between;
    align-items: center;
`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 1rem 0;
`

const StyledNavLink = styled(NavLink)`
    margin: 10px 0 10px 0;
    color: ${colors.tertiary};
    background: #fafafa;
    font-size: min(1.1rem, 4vw);
    transition: all 0.25s ease-in-out;
    box-shadow: 2px 1px 2px 2px #eeeeee;
    border-radius: 10px 0 0 10px;
    padding: 12px 20px;
    white-space: pre;
    opacity: 0.5;
    &.active {
        opacity: 1;
        background: #f5f5f5;
    }
    :hover {
        opacity: 0.8;
        background: #f5f5f5;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <Link to="/" className="link-to-homepage">
                <Logo>
                    <source type="image/avif" srcSet={logoAVIF} />
                    <img src={logo} alt={'Wealtth Health Logo'} />
                </Logo>
            </Link>
            <Nav>
                <StyledNavLink exact={true} to="/" className="link-to-homepage">
                    Create Employee
                </StyledNavLink>
                <StyledNavLink
                    to="/employees"
                    className="link-to-employeespage"
                >
                    Current Employees
                </StyledNavLink>
            </Nav>
        </StyledHeader>
    )
}
