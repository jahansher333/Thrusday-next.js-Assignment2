import Cta from "./cta.module.css"

const CTA = () => {
    return(
        <div className={Cta.cta}> 
            <h1>Its Now or Never-Start Your Free Trial Today</h1>
            <h3>Got questions We are right here to assist.</h3>
            <button className={Cta.button}>REQUEST FOR DEMO</button>
        </div>
    )
}

export default CTA;