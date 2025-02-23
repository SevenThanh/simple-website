import '../../styles/hobbies.css';


function Hobbies() {
    const images = [
        {
            id: 1,
            img: '/one_x.png'
        },
        {
            id: 2,
            img: '/two_x.png'
        },
        {
            id: 3,
            img: '/three_x.png'
        },
        {
            id: 4,
            img: '/four_x.png'
        },
        {
            id: 5,
            img: '/one_y.png'
        },
        {
            id: 6,
            img: '/two_y.png'
        },
    ];

    return (
        <div>
            <h1 className='hobbies-title'>2. Hobbies</h1>
            <h2 className='photos-title'>i) Photography</h2>
            <div className="photos-container">
                <div className="side-column">
                    <img src={images[0].img} alt={`Photo ${images[0].id}`} className="photo" />
                    <img src={images[1].img} alt={`Photo ${images[1].id}`} className="photo" />
                </div>
                <div className="center-column">
                    <img src={images[4].img} alt={`Photo ${images[4].id}`} className="horizontal-photo" />
                    <img src={images[5].img} alt={`Photo ${images[5].id}`} className="horizontal-photo" />
                </div>
                <div className="side-column">
                    <img src={images[2].img} alt={`Photo ${images[2].id}`} className="photo" />
                    <img src={images[3].img} alt={`Photo ${images[3].id}`} className="photo" />
                </div>
            </div>
            <div>
            <h2 className='gym-title'>ii) Powerlifting</h2>
            <div className='gym-container'>
                <ul>
                    <li>
                    I was bullied a lot when I first came to America because of my accent.
                    </li>
                    <li>
                    It got even worse during COVID when people assumed I was Chinese and started attacking me and my mom.
                    </li>
                    <li>
                    My mom was pushed and yelled at by a group of 3 in a store, and that experience made me want to get stronger so I could protect her and my loved ones.
                    </li>
                    <li>
                    I started eating more and going to the gym 4-5 times a week. I went from 112 lbs to 139 lbs, and decided to challenge myself by competing against 30 students (1st comp) and 53 (2nd comp).
                    </li>
                </ul>
                <div className='jim-images'>
                    <img src='/jim1.png'/>
                    <img src= '/jim2.png'/>
                </div>
            </div>
            </div>
            <h2 className='psy-title'>iii) Philosophy</h2>
            <div>

            </div>
        </div>
    );
}

export default Hobbies;