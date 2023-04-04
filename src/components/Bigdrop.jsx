import React from 'react'
import foto from '../assets/right.svg'

export default function Bigdrop() {
  return (
    <div className='bigdrop'>
        <h1 className='h1'>Front-End Engineer</h1>
        <span className='sp'>BIGDROP</span>
        <p className='date'>May 2015 - December 2015</p>
        <div className="box">
        <img className='img' src={foto} alt="pic" />
        <p className='p'>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.
        </p>
        </div>
        <div className="box">
        <img className='img' src={foto} alt="pic" />
        <p className='p'>Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester
        </p>
        </div>
        <div className="box">
        <img className='img' src={foto} alt="pic" />
        <p className='p'>Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1
        </p>
        </div>
        <div className="box">
        <img className='img' src={foto} alt="pic" />
        <p className='p'>Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1
        </p>
        </div>
    </div>
  )
}
