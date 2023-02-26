import './Home.css';

export default function Home() {
    return (
        <div className='container'>
            <div className='contacts'>
                <h1>Joel Lozano</h1>
                <div className='media-icons'>
                    <a
                        href='https://github.com/joel-lozano'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <img src='/icons/Github.png' alt='Github' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/joelalozano/'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <img src='/icons/LinkedIn.png' alt='LinkedIn' />
                    </a>
                    <a
                        href='https://www.facebook.com/joel.lozano.5011516/'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <img src='/icons/Facebook.png' alt='Facebook' />
                    </a>
                    <a href='mailto:lozano.joel.a@gmail.com'>
                        <img src='/icons/Gmail.png' alt='Gmail' /> 
                    </a>
                </div>
                <a
                    className='resume-link'
                    href='/Lozano_Resume.pdf'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    View Resume
                </a>
            </div>
            <div className='profile-photo'>
                <img src='/Profile_Photo.jpg' />
            </div>
        </div>
    );
}