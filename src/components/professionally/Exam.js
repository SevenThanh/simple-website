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
            img: '/Exam7.jpg'
        },
        {
            id: 8,
            img: '/Exam8.jpg'
        },
        {
            id: 9,
            img: '/Exam9.jpg'
        }
    ];
    
    return (
        <div className='exam-section'>
            <h2>
                3. What I'm capable of if tuition wasn't a problem (somtimes food too honestly)
            </h2>
            <div className="exam-grid">
                {exams.map(exam => (
                    <div key={exam.id} className="exam-item">
                        <img src={exam.img} alt={`Exam ${exam.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Exam;