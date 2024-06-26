import { Body, Container, Footer, Header } from './Modal.styles'
import { FiX } from 'react-icons/fi'
import { IModal } from './Modal.interfaces'

const Modal = (modalProps: IModal) => {
  return (
    <div>
      <Container>
        <div>
          <Header>
            <span>
              {modalProps.title}
            </span>
            <FiX onClick={modalProps.handleModalOpen}/>
          </Header>
          <hr/>
        </div>
        <Body>
          {modalProps.body}
        </Body>
        <div>
          <hr/>
          <Footer>
            {modalProps.buttons.map(item => {
              return item
            })}
          </Footer>
        </div>
      </Container>
    </div>
  )
}

export default Modal