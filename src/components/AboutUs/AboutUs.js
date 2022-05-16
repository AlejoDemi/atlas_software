import React from 'react';
import "./AboutUs.css";

const AboutUs = () => {

    const techList=[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        "https://kreango.com/assets/images/frameworks/back-js.png",
        "https://davidcaballerocalvo.es/img/ts.png",
        "http://assets.stickpng.com/images/58480979cef1014c0b5e4901.png",
        "https://img.icons8.com/color/480/redux.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
        "https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png",
        "https://res.cloudinary.com/marcomadera/image/upload/v1602894559/Blog/7/css_k23ypb.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
        "http://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
        "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/800px-GraphQL_Logo.svg.png",
        "https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
        "https://cdn.discordapp.com/attachments/694970532583702580/975844374057484378/prisma.png",
        "https://www.sophos.com/sites/default/files/2022-02/aws-logo-white-orange.png"
    ]

    const list=techList.map((techLogo,index)=>
        <img  src={techLogo} alt={techLogo}></img>
    )

    return (
        <div className={"container"}>
            <h1 className={"tittle"}>ABOUT US</h1>
            <div className={"techList"}>
                {list}
            </div>

        </div>
    );
};

export default AboutUs;