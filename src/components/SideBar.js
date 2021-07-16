import React from "react";
import { Link } from "react-router-dom";

import '../css/Sidebar.css'
import SidebarItem from "./SidebarItem";

function SideBar() {

    const menus = [
        { name: "메인 메뉴", path: "/" },
        { name: "설문 만들기", path: "/EditSurvey" },
        { name: "설문 목록 보기", path: "/SurveyList" }
    ];

    return (
        <div className="sidebar">
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <SidebarItem
                            menu={menu}
                        />
                    </Link>
                );
            })}
        </div>
    );
}

export default SideBar;