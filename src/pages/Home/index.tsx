import { Page } from "@ui5/webcomponents-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import style from "./Home.module.scss"

const Home = () => (
  <Page
    className={style.Page}
    header={<Header />}
    footer={<Footer />}
  >
    <main>
      main
    </main>
  </Page>
)

export default Home