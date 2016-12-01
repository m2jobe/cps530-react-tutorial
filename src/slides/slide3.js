import React from 'react'

export default class Slide3 extends React.Component {

  render() {
    return(
      <div className='slide'>
        <h1 className='heading'> Setting up React+Redux Locally</h1>
        <br />
        <p> Currently we set up our web app on an Ubuntu 16.04 VPS. Our app is using the following tools: nodejs, express, react and forever which keeps our app running continously on port 3000 </p>
        <h2>Requirements</h2>
        <ul className='explanations'>
          <li>node: ^4.5.0</li>
          <li>npm: ^3.0.0</li>
        </ul>
         <p>How to guide<a href="https://howtonode.org/how-to-install-nodejs" target="_blank">here</a></p>
        <br/>
        <h2>Setting up</h2>
        <p> After confirming that your development environment meets the specified requirements, you can create a new project based on react-redux-starter-kit: </p>
        <h2> Install from source </h2>
        {"$ git clone https://github.com/davezuko/react-redux-starter-kit.git <my-project-name>"} <br />
        {"$ cd <my-project-name>"}
        <br/><h2> Install Dependencies </h2>
        {"$ npm install"} <br />
        {"$ npm start"}
        <br/><h2> If everything works, you should see the following </h2>
        <img src="https://camo.githubusercontent.com/3868d08713325a075795f42758a1c5ec65a264e5/687474703a2f2f692e696d6775722e636f6d2f7a5237565247362e706e673f32" />
        <br/><h2> While developing, you will probably rely mostly on npm start; however, there are additional scripts at your disposal: </h2>
        <img src="http://i.imgur.com/UitrDMh.png" className="image-table"/>
      </div>
    )
  }

}
