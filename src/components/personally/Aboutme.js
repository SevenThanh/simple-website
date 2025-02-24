import '../../styles/aboutme.css';

function Aboutme() {
  return (
    <div>
      <section className='aboutme-section'>
        <h2 className='about-personal-title'>1. About me</h2>
        <div className='about-personal-container'>
          <div className='about-personal-text'>
            <ul>
              <li>
               🇻🇳 I'm from Lac Lam, a small rural town in Vietnam surrounded by farms and mountains. 
                Due to poverty, most people only completed middle school before dropping out to help with their family businesses (farming, running grocery stores, etc) 
              </li>
              <li>💡 Washing clothes in the river when the water ran out and using cracked eggshells to catch fireflies for light during power outages were just part of everyday life</li>
              <li>🚶‍♂️ Grew up without having much, so simple things bring me joy, like late night movies with friends, walking while vibing to music, or enjoying a peanut butter and banana sandwich.</li>
              <li>📖 My dad abandoned my mom and me when I was one, so growing up, I had to learn everything on my own. From there, I developed a genuine love for learning. </li>
              <li>
              💭 I want to be a lifelong learner and use my knowledge to help kids in underdeveloped areas gain access to free education. 
              I aspire to give them the opportunity to chase their dreams, whatever they may be, by ensuring they have the resources and support to turn their aspirations into reality. For me, it’s about giving back and opening doors for others, just as I was fortunate to find new opportunities in my own journey.
              </li>
              <li>
              🤔 Seriously, I think I was incredibly lucky to have the chance to come to America. My grandpa, who disappeared during the Vietnam War and we thought was sacrificed long ago, mailed my mom in 2015, saying he could help our family immigrate. If it weren’t for that, I'd probably be a farmer or delivery dirver right now. If you're interested on my journey to America, I wrote my essay on that -> 
              <span>
                <a className= "col" href= '/essay.pdf'> Essay </a> 
              </span>
              </li>
              <li>🌎 Love traveling to different places and experiencing new things. Life is too short so I don't want to waste it</li>
            </ul>
          </div>
        </div>
        <div id='line'> </div>
      </section>
    </div>
  );
}

export default Aboutme;