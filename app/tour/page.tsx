import Header from "../components/Header/Header";
import style from "./tour.module.css"

import CTA from "../components/Cta/CTA"
import Footer from "../components/Footer/Footer"

const Tour = () => {
    return(
        <div>
            <Header></Header>
            <h1 className={style.h1}>Tour</h1>
            <CTA></CTA>
            <Footer></Footer>
           
        </div>
    )
}
export default Tour;