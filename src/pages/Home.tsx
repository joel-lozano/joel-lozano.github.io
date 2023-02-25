import './Home.css';

export default function Home() {
    return (
        <>
            <h1>Hi, I'm Joel Lozano!</h1>
            <div className='media-icons'>
                <a
                    href='https://github.com/joel-lozano'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <img src='/Github.png' alt='Github' />
                </a>
                <a
                    href='https://www.linkedin.com/in/joelalozano/'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <img src='/LinkedIn.png' alt='LinkedIn' />
                </a>
                <a
                    href='https://www.facebook.com/joel.lozano.5011516/'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <img src='/Facebook.png' alt='Facebook' />
                </a>
                <a
                    href='mailto:lozano.joel.a@gmail.com'
                    // rel='noopener noreferrer'
                    // target='_blank'
                >
                    <img src='/Gmail.png' alt='Gmail' /> 
                </a>
            </div>
        </>
    );
}