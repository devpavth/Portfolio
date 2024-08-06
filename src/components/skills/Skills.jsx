import React from 'react'
import './skills.css'
import { TbRosetteDiscountCheck } from "react-icons/tb";

const skills = () => {
  return (
    <section>
        <h5>My abilities</h5>
        <h2>Skills</h2>

        <div className='container skills__container'>
            <div className='skills__frontend bg-variant'>
                <h3>Frontend</h3>
                <div className='skills__content'>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Intermediate</small></div>
                    </article>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Basic</small></div>
                    </article>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                        <h4>Git</h4>
                        <small className='text-light'>Basic</small></div>
                    </article>
                </div>
            </div>

            <div className='skills__backend bg-variant'>
                <h3>Backend</h3>
                <div className='skills__content'>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                        <h4>Python</h4>
                        <small className='text-light'>Advanced</small></div>
                    </article>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                        <h4>Django</h4>
                        <small className='text-light'>Intermediate</small></div>
                    </article>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                        <h4>Java</h4>
                        <small className='text-light'>Intermediate</small></div>
                    </article>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                        <h4>MySQL</h4>
                        <small className='text-light'>Basic</small></div>
                    </article>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                        <h4>PHP</h4>
                        <small className='text-light'>Basic</small></div>
                    </article>
                    <article className='skills__details'>
                        <TbRosetteDiscountCheck className='skills__details-icon'/>
                        <div>
                        <h4>SQL</h4>
                        <small className='text-light'>Intermediate</small></div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills