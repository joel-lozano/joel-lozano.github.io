import './About.css';

export default function About() {
    return (
        <div className='about-container'>
            <div className='personal-photo'>
                <img src='/photos/StPeters.jpg' />
            </div>
            <div className='bio'>
                <h2>Hi!</h2>
                <p>
                    I'm an aspiring software developer born and raised in New York City.
                </p>
                <p>
                    My hobbies include playing bass guitar, producing music digitally,
                    and playing soccer.
                </p>
            </div>
        </div>
    );
}