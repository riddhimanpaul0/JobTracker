
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            {/* information  */}
            <div className='info'>
                <h1>
                    Job <span>Tracking</span> Application
                </h1>
                <p>
                I'm baby salvia man braid mumblecore enamel pin narwhal gastropub.
                I'm baby salvia man braid mumblecore enamel pin narwhal gastropub. 
                </p>
                <Link to = "/register" className='btn btn-hero'>
                    Login/Register
                </Link>
            </div>
            <img src = {main} alt = 'job hunt' className = 'img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Landing