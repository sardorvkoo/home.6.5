import React from 'react'
import foto from '../assets/right.svg'

export default function Cuker() {
  return (
    <div className='cuker'>
        <h1 className='h1'>Engineering Intern</h1>
        <span className='sp'>CUKER</span>
        <p className='date'>May 2014 - September 2015</p>
        <div className="box">
            <img className='img' src={foto} alt="pic" />
            <p className='p'>I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.
            </p>
        </div>
        <div className="box">
            <img className='img' src={foto} alt="pic" />
            <p className='p'>YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.
            </p>
        </div>
        <div className="box">
            <img className='img' src={foto} alt="pic" />
            <p className='p'>Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism
            </p>
        </div>
    </div>
  )
}
