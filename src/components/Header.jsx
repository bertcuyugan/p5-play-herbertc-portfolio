// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Herbert Cuyugan</h1>
                <p>I'm Building Smart Contract projects to Learn Blockchain Development with FrontEnd Integration</p>
                <button className='button'>Get In Touch</button>
                <button className='button'>Resume</button>
            </div>

            

        </section>
    );
}

export default Header;