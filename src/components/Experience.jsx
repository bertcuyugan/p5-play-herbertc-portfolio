// import aave from '../assets/aave.png';

export default function Experience() {
    return (
        <div className="experience">
            <h2>Experience</h2>

            {/* <ul>
                <li>
                    <i>Clayton State University</i>, 2014-2018
                    <ul>
                        <li>Graduated with 3.00 GPA</li>
                    </ul>
                </li>
                <li>
                    <i>TechFlow</i> - <strong>Blockchain Developer Intern</strong>, 2018-2019
                    <ul>
                        <li>Studied DApp development</li>
                        <li>Assisted Research &amp; Development on Web3 Products</li>
                    </ul>
                </li>
                <li>
                    <i>SpiderChain</i> - <strong>Blockchain Developer</strong>, 2019-2022
                    <ul>
                        <li>Contributed to smart contract development on client's platform</li>
                        <li>Peer reviewed &amp; Audited Solidity code</li>
                    </ul>
                </li>
            </ul> */}

            <div className="experience__cards">
                <div className="experience__card">
                    <h3>Clayton State University</h3>
                    2014-2018<br></br>
                    <li>Graduated with 3.00 GPA</li>
                    {/* <img src="./assets/aave.png" alt="Aave Landing Page" /> */}
                    {/* <a href="https://aave.com/" target="_blank" className="button">Site</a> */}
                    {/* <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a> */}
                </div>

                <div className="experience__card">
                    <h3>TechFlow - Blockchain Developer Intern</h3>

                    {/* <img src="./assets/aave.png" alt="Aave Landing Page" /> */}
                    2018-2019<br></br>
                    <li>Studied DApp development</li>
                    <li>Assisted Research &amp; Development on Web3 Products</li>
                    {/* <a href="https://aave.com/" target="_blank" className="button">Site</a> */}
                    {/* <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a> */}
                </div>

                <div className="experience__card">
                    <h3>SpiderChain - Blockchain Developer</h3>
                    {/* <img src="./assets/aave.png" alt="Aave Landing Page" /> */}
                    2019-2022
                    <li>Contributed to smart contract development on client's platform</li>
                    <li>Peer reviewed &amp; Audited Solidity code</li>
                    

                    {/* <a href="https://aave.com/" target="_blank" className="button">Site</a> */}
                    {/* <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a> */}
                </div>

            </div>
        </div>

        

        


    );
}

// to do list
// we need to make the box the same sizes
