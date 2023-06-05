import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="2.svg" alt=""></img>
                    <h3 className='activities-name'>
                        What is the purpose of react router?
                    </h3>
                    <p className='activities-details'>
                        ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="2.svg" alt=""></img>
                    <h3 className='activities-name'>
                        How does context api work?
                    </h3>
                    <p className='activities-details'>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="2.svg" alt=""></img>
                    <h3 className='activities-name'>
                        What to do with useRef?
                    </h3>
                    <p className='activities-details'>
                        The useRef Hook allows you to persist values between renders.

                        It can be used to store a mutable value that does not cause a re-render when updated.

                        It can be used to access a DOM element directly.A Ref variable in React is a mutable object, but the value is persisted by React across re-renders. A ref object has a single property named current making refs have a structure similar to (current: ReactElementReference ).
                    </p>


                </div>

            </div>


        </div >
    );
};

export default Blog;