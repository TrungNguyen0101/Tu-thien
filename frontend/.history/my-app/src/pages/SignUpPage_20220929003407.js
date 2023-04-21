import React, { useEffect } from "react";
import styled from "styled-components";
import "../css/signUpCSS.css"
import "../js/SignUpJS"

const inputstyled = styled.div`
display: flex;
justify-content: space-between;
`

const SignUpPage = () => {

    return (

        <div className="materialContainer">
            <div className="box">
                <div className="title">LOGIN</div>
                <div className="input">
                    <label htmlFor="name">Username</label>
                    <input type="text" name="name" id="name" />
                    <span className="spin" />
                </div>
                <div className="input">
                    <label htmlFor="pass">Password</label>
                    <input type="password" name="pass" id="pass" />
                    <span className="spin" />
                </div>
                <div className="button login">
                    <button><span>GO</span> <i className="fa fa-check" /></button>
                </div>
                <a href className="pass-forgot">Forgot your password?</a>
            </div>
            <div className="overbox">
                <div className="material-button alt-2 "><span className="shape" /></div>
                <div className="title mt-[-40px]">REGISTER</div>
                <div className="input">
                    <label htmlFor="regname">Username</label>
                    <input type="text" name="regname" id="regname" />
                    <span className="spin" />
                </div>
                <div className="input">
                    <label htmlFor="regpass">Password</label>
                    <input type="password" name="regpass" id="regpass" />
                    <span className="spin" />
                </div>
                <div className="input">
                    <label htmlFor="reregpass">Repeat Password</label>
                    <input type="password" name="reregpass" id="reregpass" />
                    <span className="spin" />
                </div>
                <div className="input">
                    <div className="flex justify-between">
                        <div >
                            <input type="radio" className="" id="user" name="role" value="user" />
                            <label for="user" className="pl-[20px]">user</label>
                        </div>
                        <div className="">
                            <input type="radio" id="admin" name="role" value="admin" />
                            <label for="admin" className="]">admin</label>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button><span>NEXT</span></button>
                </div>
            </div>
        </div>

    );
};

export default SignUpPage;
