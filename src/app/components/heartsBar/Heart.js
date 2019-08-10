import styled from "styled-components";
import heart from "../../../assets/img/interface/heart.png"

export const Heart = styled.div`
display: inline-flex;
background-image: url(${ heart });
background-size: 100%;
background-repeat: no-repeat;
opacity: ${ ( props ) => !props.active ? 1 : 0.5 };
height: 30px;
width: 30px;
margin-right: 5px;
`;
