import { useState } from 'react'

function Advertisement(props) {
    const [show, setShow] = useState(true)

    return(
        <div className='window' style={{ width: 380 }} 
        key={props.advertisements.id}>
            <div className='title-bar'>
                <div className='title-bar-text'>Объявление:</div>
                    <div className='title-bar-controls'>
                        <button aria-label='Minimize' onClick={() => setShow(false)}></button>
                        <button aria-label='Maximize' onClick={() => setShow(true)}></button>
                        <button aria-label='Close' onClick={() => props.removeAdvertisements(props.advertisements.id)}></button>
                    </div>
                </div>
        {show?
            <div className='window-body'>
                <div className='field-row-stacked' style={{ width: 350 }}>
                    <h8>{props.advertisements.title}</h8>
                    <h8>{props.advertisements.text}</h8>
                    <h8>{props.advertisements.number}</h8>
                    <h8>{props.advertisements.city}</h8>
                </div>
            </div> 
        :null}
        </div>
    )
}

export default Advertisement
