import React from 'react'

function Personal() {
    return (
        <section className="personal-container">
            <article className='personal-container__card'>
                <div className="personal-container__card__content">
                    <h1>Personal Info</h1>
                    <p> Please provide your name, email address, and phone number.</p>

                </div>
                <form className='info-container'>
                    <label htmlFor='name'>Name</label>
                    <input required name="name" id="name" placeholder='e.g. Stephen King' />

                    <label htmlFor='email'>Email address</label>
                    <input required name="email" id="email" placeholder='e.g. stephenking@lorem.com' />

                    <label htmlFor='phone'>Phone Number</label>
                    <input required name="phone" id="phone" placeholder='e.g. +1 234 567 890' />
                    <div className="submit-container">
                        <button type="button">Next</button>
                    </div>
                </form>

            </article>
        </section>
    )
}

export default Personal