import { Page } from '@ui5/webcomponents-react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Main from './Main'
import style from './Home.module.scss'

const Home = () => (
  <Page
    className={style.Page}
  >
    <Header />
    <Main />
    <Footer />
  </Page>
)

export default Home