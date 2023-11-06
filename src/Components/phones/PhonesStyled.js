import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "form"
    "innerWrapper";
  gap: 5px;


  @media (min-width: 768px) {

     grid-template-areas:
    "form innerWrapper";
    grid-template-columns: repeat(2, 1fr);
  }



  padding: 24px;

  .phonesList {
    display: flex;
    flex-direction: column;
  }

  .innerWrapper {
    grid-area: "form" 
    text-align: center;
    height: calc(100vh - 60px);
    overflow-y: auto;
    border: 1px solid black;
    background-color: #d3d3d3;

     .totalNumbers {
      display: flex;
      flex-direction:column;
   
  @media (min-width: 1000px) {
      flex-direction:row;
       
  }

      justify-content: space-around;
      position: sticky;
      top: 0;
      padding: 16px;
      background-color: gray;
    }
    .info{
          margin-bottom:8px;

           @media (min-width: 1000px) {
         margin-bottom:0;
       
  }
    }

    .filter{
        border-radius:6px;
        padding:4px;
  
    }

  }
`;
