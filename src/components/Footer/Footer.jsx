import FooterLogo from './FooterLogo';
import FooterCopyright from './FooterCopyright'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <FooterLogo />
            <FooterCopyright />
        </div>
    )
}

export default Footer;