

import { ButtonWrapper, LinkButton, ProjectAvatar, ProjectUserWrapper, ProjectWrapper } from './styles';
import { formatDistanceToNow } from 'date-fns';


const SmilingEmoji =()=>{
    return <>😂</>
}


const IndividualProject =({details})=>{
    const {name,stargazers_count,watchers,updated_at,description,owner,homepage,html_url} = details

    const lastUpdatedAt = new Date(updated_at)
    const formattedDate = formatDistanceToNow(lastUpdatedAt)


    return (    
        <ProjectWrapper>
            <ProjectUserWrapper>
                <ProjectAvatar src={owner.avatar_url} />
                <h3>{name} </h3>
                <p>{stargazers_count} stargazers {stargazers_count===0 && <SmilingEmoji/> } </p>
                <p>{watchers} watchers {watchers===0 && <SmilingEmoji/>}</p>
                <p>Last updated : {formattedDate}</p>
                {description && <p >Description : {description}</p>}
                <ButtonWrapper>
                    <LinkButton href={html_url} target='_blank'> Github</LinkButton>
                    {homepage && <LinkButton href={homepage} target='_blank'> Live</LinkButton>}
                </ButtonWrapper>
            </ProjectUserWrapper>
        </ProjectWrapper>
    )
}

export default IndividualProject;