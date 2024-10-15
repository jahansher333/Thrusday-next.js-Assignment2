 import Style from "./hero.module.css"
const Hero = () => {
    return(
        <div>
            <div className={Style.Hero}>
                <h1 className={Style.h1}>ENGAGE VISITORS.</h1>
              <div>
              <span className={Style.divh1}>FUEL LEAD FUNNEL.</span><span className={Style.divh1}>DRIVE MORE SALES</span>
              </div>
                <p className={Style.p}>
                Our all-in-one customer support solution swiftly answers queries from customers,<br />
                drives company growth, and improves customer satisfaction.
                </p>

                <span className={Style.span}><button className={Style.button}>GET FREE ACCOUNT</button></span> <span className={Style.span}><button className={Style.button1}>GET FREE ACCOUNT</button></span> 
                <h5 className={Style.h5}>No credit card required</h5>
            </div>
        </div>
    )
}

export default Hero;