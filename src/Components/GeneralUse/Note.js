import React from 'react'
import { Link,useRouteMatch } from 'react-router-dom'
import FoldedTemplate from './FoldedTemplate'



const Note = ({ name, link, color, id}) => {
    const {path } = useRouteMatch()

    return (<>
        {link?
        <a href={link}>
                <FoldedTemplate key={id} text={name} color={color}></FoldedTemplate>
            </a>:
            <>
            <Link to={`${path}/${name}`}><FoldedTemplate key={id}  text={name} color={color}></FoldedTemplate></Link>
            </>}

            </>
    )
        }

export default Note



