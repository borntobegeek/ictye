import React from 'react'
import './preview.styles.css'

export const Preview = ({name, from, numberOfThanks, changeHandler}) => (
    <p className='preview' onChange={changeHandler}>
        <h2>Preview</h2>
        Hi {name},<br></br><br></br>

        Your friend, {from}, cannot express how grateful they are for the thing you did for them.<br></br>
        They just want to say: Thank you!<br></br>

        Number of thank yous until sufficient gratitude: {numberOfThanks}<br></br><br></br>

        If you don't want to receive more thank yous, please hit unsubscribe.
    </p>
)