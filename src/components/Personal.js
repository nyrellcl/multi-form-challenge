import React, { useState } from 'react'
import { INITIAL_PERSONAL } from '../App';

function Personal() {
    const [name, setName] = useState(INITIAL_PERSONAL.name);
    const [email, setEmail] = useState(INITIAL_PERSONAL.email);
    const [phoneNumber, setPhoneNumber] = useState(INITIAL_PERSONAL.phone);

    function onSubmit(e) {
        e.preventDefault()
    }

    return (
        <section className="personal-container">
            <article className='personal-container__card'>
                <div className="personal-container__card__content">
                    <h1>Personal Info</h1>
                    <p> Please provide your name, email address, and phone number.</p>

                </div>
                <form className='info-container' method='post' onSubmit={onSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input required autoFocus type="text" onChange={(e) => setName(e.currentTarget.value)} value={name} name="name" id="name" placeholder='e.g. Stephen King' />

                    <label htmlFor='email'>Email address</label>
                    <input required onChange={(e) => setEmail(e.currentTarget.value)} value={email} type="email" name="email" id="email" placeholder='e.g. stephenking@lorem.com' />

                    <label htmlFor='phone'>Phone Number</label>
                    <input required onChange={(e) => setPhoneNumber(e.currentTarget.value)} value={phoneNumber} name="phone" id="phone" placeholder='e.g. +1 234 567 890' />

                </form>
            </article>
        </section>
    )
}

export default Personal