import React from 'react'

function About() {
  return ( //<React.Fragment> is like ghost element which don't going to show in main DOM. But it needed in JSX 
    <React.Fragment> 
      <h1>About</h1>
      <p>This is the ToDo React App v1.0.0.</p>
    </React.Fragment>
  )
}


export default About;