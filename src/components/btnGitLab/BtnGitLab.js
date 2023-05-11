import './style.css'
import gitLabIcon from "./gitlab.svg";

const BtnGitLab = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitLabIcon} alt=""/>
            GitLab repo
        </a>
    )
}

export default BtnGitLab