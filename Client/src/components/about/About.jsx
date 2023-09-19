import style from "./about.module.css";
import logo from "../../images/logoR&M.svg";
import miFoto from "../../images/imgAdri.jpg";
import { Link } from "react-router-dom";
import { RiMailSendLine } from "react-icons/ri";

const About =()=> {
  return(
    <div className={style.containerAbout}>
      <img src={logo} alt={"Logo svg"} />
      <h1> App Creada por  Ernesto Barraza</h1>
      <img src={miFoto} alt={"imagePng"} className={style.imgfoto}/>
      <h3>
        <Link to="javascrip:void(0" onClick={()=>window.location='mailto:ernestobarraza216@gmail.com'}>
          Contáctame <RiMailSendLine />
        </Link>
      </h3>
    </div>
  );
}

export default About;