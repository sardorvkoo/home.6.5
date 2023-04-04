import React from 'react'
import foto from '../assets/right.svg'

export default function Tommy() {
  return (
    <div className='tommy'>
      <h1 className='h1'>Full Stack Web Developer</h1>
      <span className='sp'>TOMMY</span>
      <p className='date'>December 2015 - Present</p>
      <div className="box">
        <img className='img' src={foto} alt="pic" />
        <p className='p'>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.
        </p>
      </div>
      <div className="box">
        <img className='img' src={foto} alt="pic" />
        <p className='p'>Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.
        </p>
      </div>
      <div className="box">
        <img className='img' src={foto} alt="pic" />
        <p className='p'>Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.
        </p>
      </div>
    </div>
  )
}
