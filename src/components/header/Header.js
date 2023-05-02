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
                {/*<a href="https://docs.google.com/document/d/1t7Rp8ZX_40-G-aGQc-3fZxVYxdDZN4iDE684wys1_WE/edit?usp=sharing"*/}
                {/*   className="btn" >Open CV</a>*/}
                <a href="Valerii_Boiko.pdf" download="Valerii_Boiko.pdf"
                   className="btn" >Open CV11</a>
            </div>
        </header>
    )
}

export default Header