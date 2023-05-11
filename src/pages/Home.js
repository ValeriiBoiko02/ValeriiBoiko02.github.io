import Header from "../components/header/Header";

const Home = () => {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">About me</h2>
                            <p>I am an automation software test engineer with experience in ensuring the quality
                                and reliability of software products through automated testing processes.
                                <br/>
                                Deep knowledge of software testing tools and techniques, helps me create and execute test cases,
                                identify and report defects, and work closely with development teams to ensure
                                the timely resolution of issues.
                                <br/>
                                My attention to detail and analytical thinking enables a systematic and efficient approach
                                to testing software products and compliance with high-quality standards.
                            </p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Home