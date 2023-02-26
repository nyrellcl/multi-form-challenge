import React, { useState } from 'react'

function AddOn() {
  const [isMonthlyAddOn, setIsMonthlyAddOn] = useState(true)
  const [addOns] = useState([
    {
    serviceType: "Online service",
    serviceDescription: "Access to multiplayer games",
    serviceCostMonthly: "+$1/mo",
    serviceCostYearly: "+$10/yr"
  },
  {
    serviceType: "Larger storage",
    serviceDescription: "Extra 1TB of cloud save",
    serviceCostMonthly: "+$2/mo",
    serviceCostYearly: "+$20/yr"
  },
  {
    serviceType: "Customizable profile",
    serviceDescription: "Custom theme on your profile",
    serviceCostMonthly: "+$2/mo",
    serviceCostYearly: "+$20/yr"
  }])
  return (
    <section className="add-container">
      <article className="add-container__card">
        <div className='add-container__card__content'>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <form method="post" className="form-add">
            {addOns.map((addOnPlan, addOnIdx)=>(
              <fieldset key={addOnIdx}>
                <input type="checkbox" name="service" id="service"/>
                <div className='form-add__content'>
                  <label htmlFor='service'>{addOnPlan.serviceType}</label>
                  <p>{addOnPlan.serviceDescription}</p>
                </div>
                <div className="form-add__cost">
                  {isMonthlyAddOn ? <span>{addOnPlan.serviceCostMonthly}</span> : <span>{addOnPlan.serviceCostYearly}</span> }
                  
                </div>
              </fieldset>
            ))}

        </form>
      </article>
    </section>
  )
}

export default AddOn