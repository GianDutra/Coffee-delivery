import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
      padding-left: 2rem;
      padding-right: 1rem;
      margin-top: 2rem;
      
      > section {
        display: inline;
      }

      h1 {
        font-size: 30px;
      }
      
      p {
        font-size: 18px;
      }
     

      img {
        margin-top: 3.5rem;
        margin-bottom: 1rem;
        width: 96%;
        height: 96%;
        display: flex;
        align-items: center;
        }
    }
`;

export const SuccessDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors["base-background"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  
  @media screen and (max-width: 768px) {
    min-width: 16rem;
    padding-right: 0rem;
    margin-right: 2rem;
    }

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;

