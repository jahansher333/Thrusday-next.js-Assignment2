import Header from "../components/Header/Header";
import Style from "./industries.module.css"

import CTA from "../components/Cta/CTA"
import Footer from "../components/Footer/Footer"

const Tour = () => {
    return(
        <div>
            <Header></Header>
            <h1 className={Style.h1}>Industries</h1>
            <CTA></CTA>
            <Footer></Footer>
           
        </div>
    )
}
export default Tour;