import logowhite from '../assets/images/logowhite.png'
import logoblack from '../assets/images/logoblack.png'
const Logo = ({lightMode}) => {
    if(lightMode) {
        return <img src = {logoblack} alt = "WWTracker+" className='logo' />
    }
    else {
        return <img src = {logowhite} alt = "WWTracker+" className='logo' />
    }
    
}

export default Logo