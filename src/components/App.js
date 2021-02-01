import React from 'react'
import AdForm from './AdForm'
import Advertisement from './Advertisement'
import Modal from './Modal'
import { useState } from 'react'

function App(params) {
    const [advertisements, setAdvertisements] = useState([]) // состояние массива для хранения объявлений
    const [adFormOpen, setAdFormOpen] = useState(false) // состояние отвечающее за видимость модального окна
    
    function adFormModalOpen() {
        setAdFormOpen(true)
    }

    // добавляем объявление
    function addAdvertisements(titleInput, textInput, numberInput, cityInput, buttonCondition) {
        // если поле есть то ->
        if(titleInput) {
            /* buttonCondition(false) */ // активность кнопки
            // создаем объект с каким-то id
            const newItem = {
                // генерация id
                id: Math.random().toString(36).substr(2,9),
                title: titleInput,
                text: textInput,
                number: numberInput,
                city: cityInput,
                complete: false // зачеркивание задачи
            }
            setAdvertisements([...advertisements, newItem])
        }
    }

    // удаляем объявление
    function removeAdvertisements(id) {
        setAdvertisements([...advertisements.filter((advertisements) => advertisements.id !== id)])
    }

    return(
        <div className="page">
            <AdForm
            addAdvertisements={addAdvertisements}
            advertisements={advertisements}
            />

            {/* <Modal 
            adFormOpen={modalActive}
            setActive={setModalActive}
            /> */}

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