import React from 'react'
import './OurServices.css'
import { Image } from 'semantic-ui-react'

const OurServices=()=>{
    return(
        <div className='ourServices'>
           <h1>Our Services</h1>
           <div className='servicesHr'><hr /></div>
           <div className='icons_grid'>
            <div>
                <div className='desk_icons'><Image src={require('../../../Assets/user.png')} /></div>
                <div className='mob_icons'><Image src={require('../../../Assets/user_mob.png')} /></div>
                <p>New Gen Sourcing<br /> and Recruitment</p>
            </div>

            <div>
                <div><Image className='skillicon' src={require('../../../Assets/skill.png')}  /></div>
                <p style={{marginTop:'5%'}}>Skill Profiling</p>
            </div>

            <div>
                <div className='desk_icons'><Image src={require('../../../Assets/talent.png')} /></div>
                <div  className='mob_icons' ><Image src={require('../../../Assets/talent_mob.png')} /></div>
                <p style={{marginTop:'5%'}}>Talent Profiling</p>
            </div>

            <div>
                <div className='desk_icons'><Image src={require('../../../Assets/tick.png')} /></div>
                <div  className='mob_icons'><Image src={require('../../../Assets/tick_mob.png')} /></div>
                <p>Human Analytics and<br /> Checks</p>
            </div>

            <div>
                <div><Image src={require('../../../Assets/enable.png')} /></div>
                <p>Enablement and Engagement</p>
            </div>

            <div>
                <div><Image src={require('../../../Assets/cloud.png')} /></div>
                <p className='cloudP'>Human Potential<br /> Analytics and Roadmap</p>
            </div>
            <div>
                <div className='desk_icons'><Image src={require('../../../Assets/maximize.png')} /></div>
                <div className='mob_icons'><Image src={require('../../../Assets/maximize_mob.png')} /></div>
                <p className='maximimzeP'>Maximization of Human Potential</p>
            </div>
            <div>
                <div className='desk_icons'><Image src={require('../../../Assets/settings.png')} /></div>
                <div className='mob_icons'><Image src={require('../../../Assets/settings_mob.png')} /></div>
                <p className='maximimzeP'>Maximizing Workforce Utilization</p>
            </div>
            <div>
                <div><Image src={require('../../../Assets/quot.png')} /></div>
                <p>Productivity<br /> Gap Analytics</p>
            </div>
            <div>
                <div className='desk_icons' ><Image src={require('../../../Assets/clock.png')} /></div>
                <div className='mob_icons'><Image src={require('../../../Assets/clock_mob.png')} /></div>
                <p>Productivity Enhancement</p>
            </div>

           </div>
        </div>
    )
}

export default OurServices