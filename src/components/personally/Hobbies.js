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
            <h2 className='psy-title'>iii) Learning Philosophy</h2>
            <div className='psy-descriptions'>
                <ol>
                    <li>Why?
                        <ul>
                            <li>I didn't actively seek philosophy, it was something I was forced into by my circumstances</li>
                        </ul>
                    </li>
                    <li>Growing up without a father
                        <ul>
                            <li>It wasn't just about lacking guidance, it meant having no reference point for what a man is supposed to be</li>
                        </ul>
                    </li>
                    <li>Moving to a new country at 13
                        <ul>
                            <li>It wasn't just about language barriers, it was about trying to understand how people think and why they act the way they do</li>
                        </ul>
                    </li>
                    <li>Experiencing bullying
                        <ul>
                            <li>It made me question whether cruelty is inherent in people or if it's something they become</li>
                        </ul>
                    </li>
                    <li>Losing loved ones
                        <ul>
                            <li>My grandma to cancer, my aunt to gang violence, and others to the system itself, made me wonder if fairness is just an illusion</li>
                        </ul>
                    </li>
                    <li> Growing Interest
                        <ul>
                            <li>It wasn't just an academic interest, it was my way of making sense of a world that never gave me solid ground to stand on</li>
                            <li>
                            My need to adapt and understand my surroundings turned into a fascination with how people think and why they act the way they do
                            </li>
                        </ul>
                    </li>
                    <li>Purpose
                        <ul>
                            <li>I think knowledge isn't just about understanding my own experiences, it's also about creating change</li>
                            <li>I want to build an environment where people in underdeveloped areas have the resources and support to grow, rather than being left to figure things out on their own like I was.</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Hobbies;