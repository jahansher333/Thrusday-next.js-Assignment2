import Header from "../components/Header/Header";
import fea from "./features.module.css"

import CTA from "../components/Cta/CTA"
import Footer from "../components/Footer/Footer"

const Features = () => {
    return(
        <div>
            <Header></Header>
            <h1 className={fea.h1}>Features</h1>
            <CTA></CTA>
            <Footer></Footer>
           
        </div>
    )
}
export default Features;