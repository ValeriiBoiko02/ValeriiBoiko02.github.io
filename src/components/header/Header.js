import "./style.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Valerii</em></strong><br/>
                </h1>
                <div className="header__text">
                    <p>Automation Quality Assurance Engineer</p>
                </div>
                <a href="https://drive.google.com/file/d/1ItXdRagbPNx4hsom7MYV2OjuRi97qZLg/view?usp=share_link"
                   target='_blank'
                   className="btn">Open CV</a>
            </div>
        </header>
    )
}

export default Header