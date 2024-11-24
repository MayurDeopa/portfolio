import styled from "styled-components";


export const Card = styled.div`
    background-color:var(--primary-color-light);
`

export const ProjectSkeleton = styled(Card)`
    height:200px;
    display:flex;
    border-radius: 10px;
    width:100%;
    max-width:300px;
    margin:0px 20px 80px 20px;
    @media (max-width: 490px) {
        max-width:100%;
    }
`