import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    place-items:center;
    padding:10px 10px;
    width:100%;
    max-width:1500px;
    margin-top:30px;
    @media (max-width: 1300px) {
        grid-template-columns:1fr 1fr 1fr;
    }

    @media (max-width: 1000px) {
        grid-template-columns:1fr 1fr;
        gap:10px;
    }
    @media (max-width: 490px) {
        display:flex;
        flex-direction:column
    }
`

export const ProjectWrapper = styled.div`
    min-height:200px;
    display:flex;
    /* border: solid var(--complementary-color) 1px; */
    /* box-shadow:var(--box-shadow); */
    background-color:var(--card-bg);
    border-radius: 10px;
    width:100%;
    max-width:300px;
    padding:10px;
    margin:0px 20px 80px 20px;
    @media (max-width: 490px) {
        max-width:100%;
    }
`

export const ProjectUserWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    position:relative;
`

export const ProjectAvatar = styled.img`
    /* flex:1; */
    height:100px;
    width:100px;
    border-radius:6px;
    margin-top:-60px;
`

export const IconText = styled.div`
    display:flex;
    align-items:center;
    font-size:13px;
    font-weight:600;
    gap:5px;
    color:var(--complementary-color-2);
    pointer-events:none;
`

export const HeaderMeta = styled.div`
    display:flex;
    align-items:center;
    position:absolute;
    right:5px;
    gap:10px;
`

export const FooterWrapper = styled.div`
    display:flex;
    align-items:flex-end;
    flex:1;
`

export const ButtonWrapper = styled.div`
    display:flex;
    align-items:flex-end;
    flex:1;
    justify-content:flex-end;
    /* height:100%; */
`

export const LastUpdatedBlock = styled.div`
    flex:1;
    font-size:12px;
    padding:4px;
`

export const LinkButton = styled.a`
    text-decoration:none;
    margin-right:10px;
    display:flex;   
    align-items:center;
    gap:5px;
    color:var(--complementary-color);
    padding: 8px;
    border-radius:4px;
    transition:0.3s ease-in-out;
    &:hover{
        background-color:var(--primary-color);
    }
`

export const ProjectMetaText = styled.div`
    display:flex;
    font-size:13px;
    white-space:break-spaces;
    color:var(--complementary-color-2);
`

