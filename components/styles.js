import styled from "styled-components";


export const Card = styled.div`
    background-color:var(--primary-color-light);
`

export const ProjectSkeleton = styled(Card)`
    height:200px;
    display:flex;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2); /* subtle edge */
     backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    width:100%;
    max-width:300px;
    margin:0px 20px 80px 20px;
    @media (max-width: 490px) {
        max-width:100%;
    }
`