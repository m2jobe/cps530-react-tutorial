import React from 'react'

export default class Slide2 extends React.Component {

  render() {
    return(
      <div className='slide'>
      	<h1 className='heading'>Presentation of Redux</h1>
      	<br/>
      	<h2> Popularity </h2><br/>
      	<p> Redux has gained popularity over the following years and this has been boiled down to the following reasons. </p>
      	<ul className='explanations'>
      		<li> Redux has a single store with reducers and this simplifies logic </li>
      		<li> Many developers have praised its high quality of documentation for its popularity</li>
      		<li> Simplicity and ease of set up</li>
      		<li> Quality of technical features.</li>
      		<li> Redux API is small</li>
      	</ul>
      	<hr/>
      	<br/>
      	<h2> Technological Bases </h2>
      	<ul className='explanations'>
      		<li> As requirements for js applications have become complicated, our codes now manage more states than ever before </li>
      		<li> Having to manage so many of these states will lead to a developer losing control over when why and how its states change </li>
      		<li> React attempts to make state mutations predictable </li>
      		<li> It does this by imposing restrictions on how and when updates can be made. These restrictions are reflected by their 3 principies:</li>
      		<li> 1. Single source of truth (state of whole application is stored in an object tree)</li>
      		<li> 2. State is read only(only way to change the state is to emit an action)</li>
      		<li> 3. Changes are made with pure functions (to specify how the state tree is transformed by actions we write pure reducers)</li>
      		<li> Note reducers are pure functions that take the previous state and an action and return the next state. </li>
      	</ul>
      	<hr/><br/>
      	<h2> Strengths </h2>
      	<ul className='explanations'>
      		<li> Predictability of outcome (always one source of truth, the single store)</li>
      		<li> Maintainability </li>
      		<li> Organization </li>
      		<li> Server rendering </li>
      		<li> Community and eco system</li>
      		<li> Ease of testing </li>
      	</ul>
      	<hr/><br/>
      	<h2> Weaknesses </h2>
      	<ul className='explanations'>
      		<li> Overhead</li>
      		<li> Redux doesn't support static type checks</li>
      		<li> You have to carefully pick your packages </li>
      		<li> You'll need to learn to avoid mutations </li>
      	</ul>
      	<hr/><br/>
      	<h2> Which developers use redux the most? </h2>
      	<ul className='explanations'>
      		<li> Redux is used by Frontend developers </li>
      		<li> Redux can be used for any type of application </li>
      	</ul>
      </div>
    )
  }

}
