import React from 'react'
import { useState } from 'react'
import NumberFormat from 'react-number-format'

function AdForm(props) {
    const [titleInput, setTitleInput] = useState('')
    const [textInput, setTextInput] = useState('')
    const [numberInput, setNumberInput] = useState('')
    const [cityInput, setCityInput] = useState('')

    function hadleTitleChange(e) {
        setTitleInput(e.currentTarget.value)
    }

    function hadleTextChange(e) {
        setTextInput(e.currentTarget.value)
    }

    function hadleNumberChange(e) {
        setNumberInput(e.currentTarget.value)
    }

    function hadleCityChange(e) {
        setCityInput(e.currentTarget.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        props.addAdvertisements(titleInput, textInput, numberInput, cityInput)
        setTitleInput('')
        setTextInput('')
        setNumberInput('')
        setCityInput('')
    }

    function handleKeyPress(e) {
        if(e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return(
        <div className='add-form'>
            <div className='window' style={{ width: 430 }}>
                <div className='title-bar inactive'>
                    <div className='title-bar-text'>Заполните объявление</div>
                    <div className='title-bar-controls'>
                        <button aria-label='Minimize'></button>
                        <button aria-label='Maximize'></button>
                        <button aria-label='Close'></button>
                    </div>
                </div>
                <form
                className='window-body'
                onSubmit={handleSubmit}
                >
                    <div className='field-row-stacked' style={{ width: 350 }}>
                        <label for='text20'>Заголовок :</label>
                        <textarea
                        id='text20'
                        rows='2'
                        maxLength={140}
                        value={titleInput}
                        onChange={hadleTitleChange}
                        onKeyDown={handleKeyPress}
                        placeholder='Заполните заголовок...'
                        required
                        />
                    </div>
                    <div className='field-row-stacked' style={{ width: 350 }}>
                        <label for='text20'>Текст объявления:</label>
                        <textarea
                        id='text20'
                        rows='4'
                        maxLength={300}
                        value={textInput}
                        onChange={hadleTextChange}
                        onKeyDown={handleKeyPress}
                        placeholder='Заполните объявление...'
                        ></textarea>
                    </div>
                    <div className='field-row-stacked' style={{ width: 150 }}>
                        <label for='text18'>Мобильный телефон:</label>
                        <NumberFormat
                        id='text18'
                        type='tel'
                        format='+7 (###) ###-##-##' 
                        mask='_'
                        value={numberInput}
                        onChange={hadleNumberChange}
                        onKeyDown={handleKeyPress}
                        placeholder='+7 (___) ___-__-__'
                        required
                        />
                    </div>
                    <p className='text'>Выберете город:</p>
                    <select
                    className='select-city'
                    value={cityInput}
                    onChange={hadleCityChange}
                    >
                        <option value=''></option>
                        <option value='Москва'>Москва</option>
                        <option value='Санкт-Петербур'>Санкт-Петербург</option>
                        <option value='Казань'>Казань</option>
                        <option value='Нижний Новгород'>Нижний Новгород</option>
                    </select>
                    <div>
                        <button className='button-send' type='submit'>
                        Разместить объявление
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdForm