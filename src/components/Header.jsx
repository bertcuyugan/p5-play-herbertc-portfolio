// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Herbert Cuyugan</h1>
                <p>I'm Interested in Smart Contract and Blockchain FrontEnd Development</p>
                <button className='button'>Get In Touch</button>
            </div>

            

        </section>
    );
}

export default Header;