import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    place-items:center;
    padding:10px 10px;
    width:100%;
    margin-top:30px;
    @media (max-width: 1300px) {
        grid-template-columns:1fr 1fr 1fr;
    }

    @media (max-width: 1000px) {
        grid-template-columns:1fr 1fr;
        gap:10px;
    }
`

export const ProjectWrapper = styled.div`
    height:300px;
    border: solid var(--complementary-color) 1px;
    border-radius: 6px;
    width:100%;
    max-width:300px;
    padding:10px;
    margin:0px 20px 80px 20px;
`

export const ProjectUserWrapper = styled.div`
    display:flex;
    flex-direction:column;
`

export const ProjectAvatar = styled.img`
    height:100px;
    width:100px;
    border-radius:6px;
    margin-top:-60px;
`
export const ButtonWrapper = styled.div`
    display:flex;
`

export const LinkButton = styled.a`
    text-decoration:underline;
    margin-right:10px;
    color:blue;
`