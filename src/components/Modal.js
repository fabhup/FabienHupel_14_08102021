import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import colors from '../utils/style/color'
import Button from './Button'
import { useEffect } from 'react'

const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;
    z-index: 99;
    ${(props) => {
        if (props.displayModal) {
            return `
                opacity: 1;
                pointer-events: visible;
            `
        }
    }}
`

const ModalContent = styled.div`
    width: 500px;
    background-color: white;
    border-radius: 3px;
    overflow: hidden;
    margin: 15vh 2rem 2vh;
    transition: all 0.3s ease-in-out;
    transform: translateY(-500px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    ${(props) => {
        if (props.displayModal) {
            return `
                transform: translateY(0px);
            `
        }
    }}
`

const ModalHeader = styled.div`
    padding: 10px;
    width: 100%;
    justify-content: center;
    border-radius: 3px 3px 0 0;
    align-items: center;
    background-color: ${colors.primary};
    colors: white;
    box-sizing: border-box;
`

const ModalTitle = styled.h3`
    margin: 0;
    font-size: 1.4rem;
    padding: 5px;
    color: white;
`

const ModalBody = styled.div`
    padding: 10px 10px 30px;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
`

const CloseModalButton = styled(Button)`
    width: 60%;
    height: 2rem;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 20px;
`

function Modal({ title, onClose, children, displayModal, className }) {
    useEffect(() => {
        // Close Modal automatically after 5 seconds
        setTimeout(onClose, 5000)
    })

    return ReactDOM.createPortal(
        <ModalContainer
            className={className}
            displayModal={displayModal}
            onKeyDown={onClose}
        >
            <ModalContent
                onClick={(e) => e.stopPropagation()}
                displayModal={displayModal}
            >
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <ModalBody className="modal-body">{children}</ModalBody>
                <CloseModalButton buttonText={'Close'} onClick={onClose} />
            </ModalContent>
        </ModalContainer>,
        document.getElementById('root')
    )
}

export default Modal
