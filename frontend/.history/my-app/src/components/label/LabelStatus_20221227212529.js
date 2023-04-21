import React from "react";
import styled from "styled-components";


const LabelStatusStyles = styled.span`
.text{
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    background-image: linear-gradient(to bottom, ${props => props.color1 || "#e22d28"}, ${props => props.color2 || "#e22d28"});

}
`;

const LabelStatus = ({ children, type = "default", color1, color2 }) => {

    let styleClassName = "text-gray-500 bg-gray-100";
    switch (type) {
        case "CanHoTro":
            styleClassName = "text-black ";
            break;
        case "DaHoanThanh":
            styleClassName = "text-black ";
            break;
        case "DangVanDong":
            styleClassName = "text-black ";
            break;
        case "Co":
            styleClassName = "text-black ";
            break;
        case "Khong":
            styleClassName = "text-black ";
            break;

        default:
            break;
    }
    return (
        <LabelStatusStyles color1={color1} color2={color2}>
            <div className={`${styleClassName} text`}>
                {children}
            </div>
        </LabelStatusStyles>
    );
};
export default LabelStatus;
