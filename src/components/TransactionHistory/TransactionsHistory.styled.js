import styled from "@emotion/styled";

export const TransactionsTable = styled.table`
  width: 600px;
  box-shadow: 2px 2px 2px 2px lightcoral;
  border-radius: 5px;
  background-color: beige;
    border-collapse: collapse;


`;

export const TransactionsTableHeader = styled.th`
  width: 200px;
  height: 40px;
  border: 1px darkgray solid;
  background-color: burlywood;
`;

export const TransactionsTableData = styled.td`
  width: 150px;
  height: 40px;
  text-align: center;
  border: 1px darkgray solid;
`;

export const TransactionsTableRow = styled.tr`
  :nth-of-type(even) {
    background-color: bisque;
  }
`;
