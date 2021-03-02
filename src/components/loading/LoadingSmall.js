import React from 'react';

const LoadingSmall = ({ message }) => {

    let displayMessage = message && (
        <>
            <p className="loadingSmall__p">
                THANK YOU
            </p>
            <p className="loadingSmall__p--small">
                { message }
            </p>
            <p className="loadingSmall__p--small">
                Please wait!
            </p>
        </>
    )

    return (
        <div className="loadingSmall">
            { displayMessage }
            <i className="loadingSmall__i fas fa-spinner"></i>
        </div>
    )
}

export default LoadingSmall;