import styled from "@emotion/styled";

export const ProfileCard = styled.div`
width: 300px;
height: 420px;
background-color: beige;
box-shadow: 2px 2px 2px 2px lightcoral;
border-radius: 5px;
`;

export const DescriptionContainer = styled.div`
margin: 10px;
text-align: center;
/* height: 300px; */
margin-bottom: 20px;
`;

export const AvatarImage = styled.img`
display: block;
margin: auto;
width: 250px;
height: 250px;
border-radius: 50%;
background-color: bisque;
border: 50px solid beige;
`;

export const ProfileName = styled.p`
font-size: 20px;
font-weight: 700;
`;

export const ProfileText = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-top: 5px;
`;

export const StatsContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid darkgrey;
    background-color: lightgoldenrodyellow;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

`;

export const StatInfo = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    height: 70px;
    padding: 12px 10px;
    width: 100px;
    :not(:last-child) {border-right: 1px solid darkgray}
    `;

export const StatName = styled.span`
    font-size: 12px;
    color: darkgray;
`;

export const StatValue = styled.span`
    font-size: 16px;
    font-weight:700;
`;