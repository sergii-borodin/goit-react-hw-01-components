import styled from "@emotion/styled";

export const StatsBoard = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-top: 10px;
margin-bottom: 10px;
width: 500px;
height: 250px;
background-color: beige;
border-radius: 5px;
`;

export const BoardTitle = styled.h2`
  text-align: center;
`;

export const StatsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const StatInfo = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :not(:last-child) {border-right: 1px solid darkgray}
`;