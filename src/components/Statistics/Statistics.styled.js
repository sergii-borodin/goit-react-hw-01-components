import styled from "@emotion/styled";

export const StatsBoard = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 500px;
    height: 200px;
    background-color: beige;
    border-radius: 5px;
`;

export const BoardTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
`;

export const StatsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 0.8)`;

export const StatItem = styled.li`
    width: calc(100% / ${props =>  {return props.items}});
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    :not(:last-child) {border-right: 1px solid darkgray}
    background-color: ${randomHsl};
`;

    export const StatItemText = styled.span`
    color: white;
`;