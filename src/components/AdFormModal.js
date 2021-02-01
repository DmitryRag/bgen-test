import Modal from './Modal'

function AdFormModal(props) {
    return(
        <Modal
            modalText = 'Опубликовать объявление?'
            isOpen = {props.isOpen}
            onClose = {props.onClose}
            onCloseByOverlay = {props.closingPopupsByOverlay}
            >
        </Modal>
    )
}

export default AdFormModal