import LogoFooter from '../public/LOGO-footer.png'
import '../styles/components/Footer.css'

function Footer(){
  return (
    <div className="footer">
      <img src={LogoFooter} alt="Logo footer"></img> 
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer;