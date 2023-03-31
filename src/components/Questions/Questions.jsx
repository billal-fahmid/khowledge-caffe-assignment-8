import React from 'react';

const Questions = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Difference Between props and State?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> # Props is like object and is immutable . we props use for one parent component to child data sent . we props by sent any data like function, object , array etc. <br />
                    # The state is a built-in React object that is used to contain data or information about the component.
                    </p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does work useState ?
                </div>
                <div className="collapse-content">
                    <p tabIndex={1}> # useState is very powerful in react hook . that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What does useEffect do other than load data ?
                </div>
                <div className="collapse-content">
                    <p tabIndex={2}> # The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How react works ?
                </div>
                <div className="collapse-content">
                    <p tabIndex={3}> # ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </div>
            </div>


        </div>

    );
};

export default Questions;