import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.png'
import IMG2 from '../../assets/portfolio-2.png'
import IMG3 from '../../assets/portfolio-3.png'
import IMG4 from '../../assets/portfolio-5.png'
import IMG5 from '../../assets/portfolio-6.png'
import IMG6 from '../../assets/portfolio-8.png'
import IMG7 from '../../assets/portfolio-9.png'
import IMG8 from '../../assets/portfolio-10.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'SHOPSWIFT | E-Commerce Website | EFFORTLESS E-COMMERCE, ONE SWIFT CLICK AT A TIME',
    github: 'https://github.com/devpavth/ShopSwift',
    demo: "https://shopswift-tbzv.onrender.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'VIBIFYRIFT | A MUSIC STREAMING PLATFORM REDEFINING MUSIC DISCOVERY AND ENGAGEMENT',
    github: 'https://github.com/devpavth/VibifyRift',
    demo: "https://devpavth.github.io/VibifyRift/"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Pong Game',
    github: 'https://github.com/devpavth/Pong-Game',
    demo: "https://github.com/devpavth/Pong-Game"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Coffee Shop Website',
    github: 'https://github.com/devpavth/CoffeeShop',
    demo: "https://devpavth.github.io/CoffeeShop/"
  },
  {
    id: 5,
    image: IMG5,
    title: 'Travel Booking Website',
    github: 'https://github.com/devpavth/Travel-in-pentavago',
    demo: "https://devpavth.github.io/Travel-in-pentavago/"
  },
  {
    id: 6,
    image: IMG6,
    title: 'React Internship project',
    github: 'https://github.com/devpavth/ParkQwik-Home-Page-Project',
    demo: "https://github.com/devpavth/ParkQwik-Home-Page-Project"
  },
  {
    id: 7,
    image: IMG7,
    title: 'React Native Internship project',
    github: 'https://github.com/devpavth/ParkQwik-Mobile-UI-Intern-Project',
    demo: "https://github.com/devpavth/ParkQwik-Mobile-UI-Intern-Project"
  },
  {
    id: 7,
    image: IMG8,
    title: 'Real time Chat Application using socket.io and MERN Stack',
    github: 'https://github.com/devpavth/ChatApp-using-socket.io',
    demo: "https://pavitech.wistia.com/medias/ujllbeprxc"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Portfolio</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article key={id} className='portfolio__item bg-variant '>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio