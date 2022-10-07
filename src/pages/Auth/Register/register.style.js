import styled from "styled-components";
import { Button } from "../../../assets/styles/utlis";

export const StyleRegister = styled.div`
  background-color: rgb(238, 77, 45);
  min-width: max-content;
`;

export const Container = styled.div`
  padding: 8rem;
  display: flex;
`;

export const Banner = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  background-image: url("https://cf.shopee.vn/file/99aaade6e275c3aa6592f9e26c2bfa21");
  background-repeat: no-repeat;
  background-position: left center;
`;

export const FromWrapper = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  box-shadow: 0 3px 10px 0 rgba(0 0 0 / 14%);
  border-radius: 0% 4rem;
  background-color: #fff;
  padding: 3.5rem 3rem 5rem;
`;

export const FromTitle = styled.div`
  font-size: 20px;
  margin-bottom: 3rem;
  color: #222;
  text-transform: capitalize;
`;

export const From = styled.form``;

export const FormControl = styled.div`
  margin-bottom: 2.5rem;
`;

export const FromButton = styled.div`
  margin-bottom: 3rem;
  ${Button} {
    width: 100%;
    height: 4rem;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`;

export const FormFooter = styled.div`
  text-align: center;
  span {
    margin: 1rem;
    color: rgba(0, 0, 0, 0.25);
  }
`;
