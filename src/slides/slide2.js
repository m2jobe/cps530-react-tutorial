import React from 'react'

export default class Slide2 extends React.Component {

  render() {
    return(
      <div className='slide'>
        <h2> Setting up React+Redux Locally</h2>
        <hr />
        <h4>Requirements</h4>
        <ul>
          <li>node: ^4.5.0</li>
          <li>npm: ^3.0.0</li>
        </ul>
        <h4>Setting up</h4>
        <p> After confirming that your development environment meets the specified requirements, you can create a new project based on react-redux-starter-kit: </p>
        <h4> Install from source </h4>
        {"$ git clone https://github.com/davezuko/react-redux-starter-kit.git <my-project-name>"} <br />
        {"$ cd <my-project-name>"}
        <h5> Install Dependencies </h5>
        {"$ npm install"} <br />
        {"$ npm start"}
        <h4> If everything works, you should see the following </h4>
        <img src="https://camo.githubusercontent.com/3868d08713325a075795f42758a1c5ec65a264e5/687474703a2f2f692e696d6775722e636f6d2f7a5237565247362e706e673f32" />
        <h4> While developing, you will probably rely mostly on npm start; however, there are additional scripts at your disposal: </h4>
        <img src="http://i.imgur.com/UitrDMh.png" className="image-table"/>
      </div>
    )
  }

}
