
function Advertisement({ advertisements, removeAdvertisements }) {

    return(
        <div className="window" style={{ width: 430 }} 
        key={advertisements.id}>
            <div className="title-bar">
                <div className="title-bar-text">Объявление:</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" cl></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={() => removeAdvertisements(advertisements.id)}></button>
                    </div>
                </div>
            <div className="window-body">
                <div className="field-row-stacked" style={{ width: 350 }}>
                    <h8>{advertisements.title}</h8>
                </div>
                <div className="field-row-stacked" style={{ width: 350 }}>
                    <h8>{advertisements.text}</h8>
                </div>
                <div class="field-row-stacked" style={{ width: 200 }}>
                    <h8>{advertisements.number}</h8>
                </div>
                <div class="field-row-stacked" style={{ width: 200 }}>
                    <h8>{advertisements.city}</h8>
                </div>
            </div>
        </div>
    )
}

export default Advertisement
