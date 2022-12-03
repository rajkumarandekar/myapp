import "./contact.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
const Contact = () => {
  return (
    <div className="main-contact">
      <span className="name12">CONTACT ME</span>
      <img
        src="https://res.cloudinary.com/dofzu13gt/image/upload/v1669973124/IMG-20210624-WA0012_copy_373x718_1_j5yxrm.jpg"
        alt="fff"
        className="img12"
      />
      <p>
        I am starting, growing, and monetizing websites since 2022. While in
        college, I began to learn about digital marketing and blog writer. After
        graduating, I continued to build a diverse blogs and protfiles of
        websites while working a full time job. After years of building the
        portfolio on the side, I made jump to run my blog full time.
      </p>
      <h1>Andekar Rajkumar</h1>
      
      <p>Mobile No:- 9999999999</p>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <FaFacebookSquare className="sidebarIcon" />
          <AiFillTwitterCircle className="sidebarIcon" />
          <BsPinterest className="sidebarIcon" />
          <GrInstagram className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
