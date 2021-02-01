import { useState } from "react"

function Advertisement(props) {
    const [show, setShow] = useState(true)

    function handleDeleteClick() {
        props.removeAdvertisements(props.advertisements.id)
    }

    function handleHidenClick() {
        setShow(false)
    }
    
    function handleVisibleClick() {
        setShow(true)
    }

    return(
        <div className="window" style={{ width: 430 }} 
        key={props.advertisements.id}>
            <div className="title-bar">
                <div className="title-bar-text">Объявление:{props.advertisements.length}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" onClick={handleHidenClick}></button>
                        <button aria-label="Maximize" onClick={handleVisibleClick}></button>
                        <button aria-label="Close" onClick={handleDeleteClick}></button>
                    </div>
                </div>
        {show?
            <div className="window-body">
                <div className="field-row-stacked" style={{ width: 350 }}>
                    <h8>{props.advertisements.title}</h8>
                </div>
                <div className="field-row-stacked" style={{ width: 350 }}>
                    <h8>{props.advertisements.text}</h8>
                </div>
                <div class="field-row-stacked" style={{ width: 200 }}>
                    <h8>{props.advertisements.number}</h8>
                </div>
                <div class="field-row-stacked" style={{ width: 200 }}>
                    <h8>{props.advertisements.city}</h8>
                </div>
            </div> 
        :null}
        </div>
    )
}

export default Advertisement
