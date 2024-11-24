

import { ButtonWrapper, FooterWrapper, HeaderMeta, IconText, LastUpdatedBlock, LinkButton, ProjectAvatar, ProjectMetaText, ProjectUserWrapper, ProjectWrapper } from './styles';
import { format} from 'date-fns';

import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";


const SmilingEmoji =()=>{
    return <>😂</>
}


const IndividualProject =({details})=>{
    const {name,stargazers_count,watchers,updated_at,description,owner,homepage,html_url} = details

    const lastUpdatedAt = new Date(updated_at)
    const formattedDate = format(lastUpdatedAt, 'dd/MM/yy');


    return (    
        <ProjectWrapper>
            <ProjectUserWrapper>
                <ProjectAvatar src={owner.avatar_url} />
                <h3>{name} </h3>
                <HeaderMeta>
                <LastUpdatedBlock>
                        {formattedDate}
                    </LastUpdatedBlock>
                    {/* <IconText>{stargazers_count} <TbEye/></IconText>
                    <IconText>{watchers} <FaRegStar/> </IconText> */}
                </HeaderMeta>
               
                {description && <ProjectMetaText >{description}</ProjectMetaText>}
                <FooterWrapper>
                    
                    <ButtonWrapper>
                        <LinkButton href={html_url} target='_blank'>  <FiGithub/></LinkButton>
                        {homepage && <LinkButton href={homepage} target='_blank'>  <FiExternalLink/></LinkButton>}
                    </ButtonWrapper>
                </FooterWrapper>
            </ProjectUserWrapper>
        </ProjectWrapper>
    )
}

export default IndividualProject;