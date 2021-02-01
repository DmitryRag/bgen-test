
function Modal(props) {

    return (
        <section className={`modal ${props.isOpen ? 'modal_opened' : ''}`} onClick={props.onCloseByOverlay}>
            <div class="window" style={{ width: 250 }}>
                <div class="title-bar">
                    <div class="title-bar-text">Error</div>
                    <div class="title-bar-controls">
                        <button aria-label="Close" onClick={props.onClose}></button>
                    </div>
                </div>
                <div class="window-body">
                    <p>{props.modalText}</p>
                    <button type="submit" /* onClick={props.onClose} */>OK</button>
                    <button onClick={props.onClose}>Cancel</button>
                </div>
            </div>
        </section>
    )
}

export default Modal