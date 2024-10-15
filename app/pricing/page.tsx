import Header from "../components/Header/Header";
import style from "./pricing.module.css"

import CTA from "../components/Cta/CTA"
import Footer from "../components/Footer/Footer"

const Pricing = () => {
    return(
        <div>
            <Header></Header>
            <h1 className={style.h1}>Pricing</h1>
            <CTA></CTA>
            <Footer></Footer>
           
        </div>
    )
}
export default Pricing;