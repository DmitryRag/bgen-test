import React from 'react'
import AdForm from './AdForm'
import Advertisement from './Advertisement'
import { useState } from 'react'

function App() {
    const [advertisements, setAdvertisements] = useState([])

    function addAdvertisements(titleInput, textInput, numberInput, cityInput) {
        if(titleInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                title: titleInput,
                text: textInput,
                number: numberInput,
                city: cityInput,
            }
            setAdvertisements([newItem, ...advertisements])
        }
    }

    function removeAdvertisements(id) {
        setAdvertisements([...advertisements.filter((advertisements) => advertisements.id !== id)])
    }

    return(
        <div className='page'>
            <AdForm
            addAdvertisements={addAdvertisements}
            advertisements={advertisements}
            />
            <ul className='advertisements-list'>
            {advertisements.map((advertisements) => {
                return (
                    <Advertisement
                        advertisements={advertisements}
                        key={advertisements.id}
                        removeAdvertisements={removeAdvertisements}
                    /> 
                )    
            })}
            </ul>
        </div>
    )
}

export default App