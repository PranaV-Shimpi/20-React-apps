import React from 'react'

const PageNotFound = () => {
    return (
        <div style={{backgroundColor:"Amour" }}>
        <div id="wrapper">
            <img src={require('./dog.png')} alt="dog 404" />
            <div id="info">
                <h3>A Dog Ate this Page</h3>
                <p>Your dog is cute but honestly a menace. 
                    Where are my shoes? Where is my graduation certificate? 
                    Where is the chocolate cake I baked for my Aunt’s birthday? 
                    And why did you take your dog to the vet on that same Thursday?!
                </p>
            </div>
        </div>
        </div >
    )
}

export default PageNotFound