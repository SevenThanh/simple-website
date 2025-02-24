import '../../styles/exam.css'

function Exam() {
    const exams = [
        {
            id: 1,
            img: '/Exam00.jpg'
        },
        {
            id: 2,
            img: '/Exam01.jpg'
        },
        {
            id: 3,
            img: '/Exam03.jpg'
        },
        {
            id: 4,
            img: '/Exam04.jpg'
        },
        {
            id: 5,
            img: '/Exam05.jpg'
        },
        {
            id: 6,
            img: '/Exam06.jpg'
        },
        {
            id: 7,
            img: '/exam7.jpg'
        },
        {
            id: 8,
            img: '/Exam8.jpg'
        },
        {
            id: 9,
            img: '/Exam11.jpg'
        },
        {
            id: 10,
            img: '/Exam10.jpg'
        },
        {
            id: 11,
            img: 'Exam9.jpg'
        }
    ];
    
    return (
        <div>
        <div className='exam-section'>
            <h2>
                3. What I'm capable of without the stress of tuition
            </h2>
            <div className="exam-grid">
                {exams.map(exam => (
                    <div key={exam.id} className="exam-item">
                        <img src={exam.img} alt={`Exam ${exam.id}`} />
                    </div>
                ))}
            </div>
        </div>
            <div className='awards-sections'>
            <h2 className='awards-title'>4. Awards</h2>
                <div className='awards-description'>
                    <ul>
                        <ol>
                            <h3>1. National Science Foundation S-STEM ADAPT Scholar ($21,000 in total)</h3>
                            <p>A competitive NSF-funded program for students who despite struggling financially excel both academically and professionally in STEM fields.</p>
                        </ol>
                        <ol>
                            <h3>2. Leaders Impacting Technology Scholar</h3>
                            <p>A program designed to enhance confidence, knowledge, and interpersonal skills for leadership excellence.</p>
                            <p>Spoke in front of many students combating racism and sexism. Led multiple fundraising events, raising a total of $740.</p>
                        </ol>
                        <ol>
                            <h3>3. Edwin A Stevens Scholarship & The Presidential Scholarship:</h3>
                            <p>A prestigious achievement for students who demonstrate academic excellence as evidenced by their transcripts, standardized test scores, and recommendations</p>
                        </ol>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Exam;