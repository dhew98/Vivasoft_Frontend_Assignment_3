import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from "../Table"
import './Home.css'

import leaderBoard from '../LeaderBoard/leaderBoard'
import Instructor from '../Instructors/Instructor';
import Footer from '../Footer/Footer';


const Home = () => {
    const users = useLoaderData();
    console.log(users);




    return (
        <div className='home-container'>
            <div className='home-header'>
                <div class="card text-bg-dark ">

                    <div class="card-img-overlay mt-5 ">
                        <div className='dev d-flex'>
                            <img src="12.avif" style={{ width: "50%" }} class="card-img img-fluid" alt="..." />
                            <div className='mt-5 py-5'>
                                <h5 class="card-title mt-5"><span className='fs-1 fw-bold text-pro'>Edu Care</span> </h5>
                                <p class="card-text"><h5> Lorem ipsum dolor sit amet. Ex obcaecati modi et quia officia vel galisum modi et atque recusandae sed
                                    obcaecati minus. Et voluptas earum aut recusandae quidem ut distinctio velit eum quod </h5> </p>
                            </div>
                        </div>
                        <div className='mt-5 container'>
                            <h1>Featured Courses</h1>
                            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">

                                <div class="col ">
                                    <div class="card border-0" style={{ width: "18rem" }}>
                                        <img src="course-1.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Fundamental Of UI/UX Design</h5>
                                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                                to
                                                additional content. </p>
                                            <h4 class="text-danger">Price : 20$</h4>
                                            <a href="#" class="btn btn-primary">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card border-0" style={{ width: "18rem" }}>
                                        <img src="course-2.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Javascript Basic to advanced</h5>
                                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                                to
                                                additional content. </p>
                                            <h4 class="text-danger">Price : 20$</h4>
                                            <a href="#" class="btn btn-primary">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card border-0" style={{ width: "18rem" }}>
                                        <img src="course-3.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Fullstack Web Development</h5>
                                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                                to
                                                additional content.</p>
                                            <h4 class="text-danger">Price : 20$</h4>
                                            <a href="#" class="btn btn-primary">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='mt-5 container pt-5'>
                            <h1>LeaderBoard</h1>
                            <Table />

                        </div>

                        <div className='mt-5'>
                            <h1 className=' fw-bold mt-5 pt-5'>Our Instructors</h1>
                            <Instructor />
                        </div>
                        <div className='mt-5'>
                            <Footer />
                        </div>

                    </div>

                </div>



            </div>

            <div>

            </div>

        </div>


    );
};

export default Home;