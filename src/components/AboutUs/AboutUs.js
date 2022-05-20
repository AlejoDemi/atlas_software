import React from 'react';
import "./AboutUs.css";

import angular from "../../assets/techs/angular-icon-1.svg";
import aws1 from "../../assets/techs/aws-2.svg";
import aws2 from "../../assets/techs/aws-dynamodb.svg";
import django from "../../assets/techs/django.svg";
import github from "../../assets/techs/github-logo.svg";
import graphql from "../../assets/techs/graphql.svg";
import intellij from "../../assets/techs/intellij-idea-1.svg";
import java from "../../assets/techs/java-4.svg";
import kotlin from "../../assets/techs/kotlin-1.svg";
import prisma from "../../assets/techs/prisma-3.svg"
import git from "../../assets/techs/git-icon.svg"
import css from "../../assets/techs/css-3.svg";
import html from "../../assets/techs/html-1.svg";
import javascript from "../../assets/techs/javascript-1.svg"
import postgresql from "../../assets/techs/postgresql.svg"
import jquery from "../../assets/techs/jquery-4.svg";
import sass from "../../assets/techs/sass-1.svg";
import docker1 from "../../assets/techs/docker-3.svg"
import docker2 from "../../assets/techs/docker.svg"
import mongo from "../../assets/techs/mongodb-icon-1.svg";
import mysql from "../../assets/techs/mysql-6.svg";
import nodejs from "../../assets/techs/nodejs-icon.svg";
import python from "../../assets/techs/python-5.svg";
import react from "../../assets/techs/react-2.svg";
import redux from "../../assets/techs/redux.svg";
import spark from "../../assets/techs/spark-2.svg";
import typescript from "../../assets/techs/typescript.svg";
import vue from "../../assets/techs/vue-js-1.svg";
import webstorm from "../../assets/techs/webstorm-icon.svg";


// techs missing: prisma

const AboutUs = () => {

    const techList=[
        aws1,
        aws2,
        django,
        git,
        graphql,
        java,
        prisma,
        css,
        html,
        javascript,
        postgresql,
        jquery,
        docker2,
        mysql,
        nodejs,
        python,
        react,
        redux,
        sass,
        typescript,
    ]

    const list=techList.map((techLogo,index)=>
        <img key={index} src={techLogo} alt={techLogo}></img>
    )

    return (


        <div className={"container"}>
            <h1 className={"title"}>ABOUT US</h1>
            <div className={"horizontal"}>
                <div className={"text"}>
                    <p>We are a tailor-made software company with the drive and skills necessary to take your business to the next level. </p>
                    <p>Born and founded by excellence-driven Software Engineering students, with the philosophy of achieving top-tier quality in all aspects.
                        We seek to fully unleash the power of new, innovative technologies, along with the stability provided by fundamental classics. </p>
                    <p>Our goal is to cater for the needs of our clients, for we believe that together, we will make the world move forward. </p>
                </div>
                <div className={"picture1"}>

                </div>
            </div>

            <div className={"horizontal"}>
                <div className={"picture2"}></div>
                <div className={"text"}>
                    <p>We are a tailor-made software company with the drive and skills necessary to take your business to the next level. </p>
                    <p>Born and founded by excellence-driven Software Engineering students, with the philosophy of achieving top-tier quality in all aspects.
                        We seek to fully unleash the power of new, innovative technologies, along with the stability provided by fundamental classics. </p>
                    <p>Our goal is to cater for the needs of our clients, for we believe that together, we will make the world move forward. </p>
                </div>

            </div>


            <div className={"techList"}>
                {list}
            </div>

        </div>
    );
};

export default AboutUs;