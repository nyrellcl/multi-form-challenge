import React, { useState } from 'react'
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"

function Plan() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isDefault, setIsDefault] = useState(true);
  const [plans] = useState([
    {
      image: arcade,
      name: "Arcade",
      monthly: "$9/mo",
      yearlyOne: "$90/yr",
      yearlyTwo: "2 months free"
    },
    {
      image: advanced,
      name: "Advanced",
      monthly: "$12/mo",
      yearlyOne: "$120/yr",
      yearlyTwo: "2 months free"
    },
    {
      image: pro,
      name: "Pro",
      monthly: "$15/mo",
      yearlyOne: "$150/yr",
      yearlyTwo: "2 months free"

    }])

    function handlePlanSelect() {
      setIsDefault(false);
    }

  return (
    <section className="plan-container">
      <article className="plan-container__card">
        <div className='plan-container__card__content'>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing</p>
        </div>

        <form method='post' className='subscription-container'>
          {plans.map((plan, planIdx) => (
            <fieldset className={isDefault ? 'plans' : 'plans selected'} onChange={() => handlePlanSelect} key={planIdx}>
              <div><img src={plan.image} alt={plan.name} /></div>
              <div className="plans__content">
                <h2>{plan.name}</h2>
                {isMonthly ? <p>{plan.monthly}</p> : <div><p>{plan.yearlyOne}</p> <p className='yearly-two'>{plan.yearlyTwo}</p></div>}
              </div>
            </fieldset>
          ))}

          <div className="input-container">
            <label htmlFor='subscribe'>Monthly</label>
            <input type="checkbox" id="subscribe" name='subscribe' onClick={() => setIsMonthly(!isMonthly)} />
            <label htmlFor='subscribe'>Yearly</label>

          </div>


        </form>
      </article>
    </section>
  )
}

export default Plan