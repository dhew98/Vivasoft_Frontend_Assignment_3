import React from 'react';

const Instructor = () => {
    return (
        <div className='mt-5'>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card border-0 ">
                            <img
                                src="ins1.avif"
                                className="card-img-top rounded-circle mx-auto"
                                alt="name"
                                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Darla Kulas</h5>
                                <p className="card-text">Front End Instructor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <img
                                src="ins2.avif"
                                className="card-img-top rounded-circle mx-auto"
                                alt="name"
                                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Gwen Dach</h5>
                                <p className="card-text">Back End Instructor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <img
                                src="ins3.avif"
                                className="card-img-top rounded-circle mx-auto"
                                alt="name"
                                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Solaiman Sukhon</h5>
                                <p className="card-text">UI/UX Instructor</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Instructor;