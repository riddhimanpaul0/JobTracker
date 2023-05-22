
import main from '../assets/images/main.svg'
import mainalter from '../assets/images/mainalter.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='container page'>
            {/* information  */}
            <div className='info'>
                <h1>
                    Job <span>Tracking</span> Application
                </h1>
                <p>
                Track, organize, and conquer your co-op and internship applications like never before! Our website revolutionizes the way University of Waterloo students manage their job hunt. Say goodbye to scattered applications and hello to a centralized hub that keeps you in control. Stay organized, monitor progress, and never miss an opportunity. Elevate your career aspirations and join us today!
                </p>
                <Link to = "/register" className='btn btn-hero'>
                    Login/Register
                </Link>
            </div>
            <img src = {mainalter} alt = 'job hunt' className = 'img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Landing