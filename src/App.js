import React, {Component} from 'react';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from  './img5.png';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
       <header>
         <img src={img1} className='1-logo' alt='1st-image' />
       </header>
       <div>
       <img src={img2} className='1-logo' alt='1st-image' />
       </div>
       <div>
       <img src={img3} className='1-logo' alt='1st-image' />
       </div>
       <div>
       <img src={img4} className='1-logo' alt='1st-image' />
       </div>
       <div>
       <img src={img5} className='1-logo' alt='1st-image' />
       </div>
       <p>&copy; 2020. All Rights Reserved Biryanis & More .Privacy Policy .Terms & Conditions </p>
      </div>
    );
  }
  
}

export default App;
