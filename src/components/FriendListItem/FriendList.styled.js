import styled from "@emotion/styled";

export const ListItem = styled.li`
  width: 300px;
  height: 80px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  background-color: beige;
  box-shadow: 2px 2px 2px 2px lightcoral;
  border-radius: 5px;
`;

export const StatusIndicatorOnline = styled.span`
margin-left: 15px;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: green;
`;

export const StatusIndicatorOffline = styled.span`
margin-left: 15px;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: red;
`;

export const UserImage = styled.img`
margin-left: 15px;
 width: 48px;
 height: 48px;
`;

export const UserName = styled.p`
margin-left: 15px;

`;
