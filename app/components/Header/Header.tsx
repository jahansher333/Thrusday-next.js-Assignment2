import Link from "next/link";
import style from "./header.module.css"
const Header = () => {
    return(
        <div>
            <div className={style.container}>
            <header className={style.header}>
                <div className={style.logo}>
                    
                <a href="/"><img src="https://www.swiftsales.io/assets/svg/header-logo.svg" alt="" width="100" height="35" decoding="async" data-nimg="1" loading="lazy"/></a>
                    
                </div>
                <div>
                    <ul className={style.ul}>
                    <li className={style.li}><Link href="/" >Home</Link></li>
                        <li className={style.li}><Link href="./tour" >Tour</Link></li>
                        <li className={style.li}><Link href="./features" >Features <i></i></Link></li>
                        <li className={style.li}><Link href="./pricing" >Pricing <i></i></Link></li>
                        <li className={style.li}><Link href="./industries">Industries</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className={style.ul1}>
                        <li className={style.link}><Link href="./login" >Login</Link></li>
                        <li ><button className={style.button1}>SIGN UP</button></li>
                        <li><button className={style.button2}>BOOK A DEMO</button></li>
                        <li>
                            <select name="sel" id="" className={style.select}>
                                
                                <option value="sel">En</option>
                                <option value="sel">Ar</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </header>
            </div>
            {/* <hr className={style.hr}/> */}
        </div>
    )
}

export default Header;