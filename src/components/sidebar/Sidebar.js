import axios from "axios";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

import { Link } from "react-router-dom";
import "./sidebar.css";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data ?? []);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://res.cloudinary.com/dofzu13gt/image/upload/v1669973124/IMG-20210624-WA0012_copy_373x718_1_j5yxrm.jpg"
          alt="fff"
        />
        <p>
          I am starting, growing, and monetizing websites since 2022. While in
          college, I began to learn about digital marketing and blog writer.
          After graduating, I continued to build a diverse blogs and protfiles
          of websites while working a full time job. After years of building the
          portfolio on the side, I made jump to run my blog full time.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com">
            <FaFacebookSquare className="sidebarIcon" />
          </a>

          <a href="https://www.twitter.com">
            <AiFillTwitterCircle className="sidebarIcon1" />
          </a>
          <a href="https://www.pinterest.com">
            <BsPinterest className="sidebarIcon2" />
          </a>
          <a href="https://www.instagram.com">
            <GrInstagram className="sidebarIcon3" />
          </a>
        </div>
      </div>
    </div>
  );
}
