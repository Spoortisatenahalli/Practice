import React from 'react'
import "./cards.css";

const Home = () => {
  return (
    <>
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
 

    <div>
    <ul class="cards">
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">RRR</h3>            
            <span class="card__status">  <b> REALSE DATE:</b>2nd June 2022</span>
          </div>
        </div>
        <p class="card__description"> RRR is the movie Which Alia acted on it </p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title"> 333 Charle</h3>
            <span class="card__status"><b> REALSE DATE:</b>10th June 2022</span>
          </div>
        </div>
        <p class="card__description">Movie which is been acted by Takshit shetty</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title"> Pushpa</h3>
              
            <span class="card__status"><b> REALSE DATE:</b>10th June 2022</span>
          </div>
        </div>
        <p class="card__description"> Rashmika Mandana acted on the movie🙌</p>
      </div>
    </a>
  </li>
   
</ul>
    
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br /><br /> 

Spoorti
    </>
  )
}

export default Home