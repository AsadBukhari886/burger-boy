import React from 'react'

const anotherContainer = (WrappedComponent, className) => {
    console.log("another container")
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};

export default anotherContainer;
