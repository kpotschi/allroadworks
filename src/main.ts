import './style.css'
import kevinPhoto from './assets/kevin.jpg'
import aboutPage from './pages/about.html?raw'
import homePage from './pages/home.html?raw'
import pricingPage from './pages/pricing.html?raw'
import { initializeDialogNavigation } from './dialog-navigation'

const app = document.querySelector<HTMLDivElement>('#app')!
const aboutMarkup = aboutPage.replaceAll('__KEVIN_PHOTO__', kevinPhoto)

app.innerHTML = [homePage, aboutMarkup, pricingPage].join('\n')

initializeDialogNavigation()
