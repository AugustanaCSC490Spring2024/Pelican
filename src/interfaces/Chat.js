import logo from '../assets/icon.png'
import '../App.css';
import React, { useState } from "react";
import Navigation from './Navigation';

const Chat = () => {


  let [products, setName] = React.useState(
    ['POLO Sweater', 'iPhone X', 'Galaxy S9', 'Used Textbook', 'Coffee Machine', 'Easter Egg', 'Nuke']
  );

  let [price, setPrice] = React.useState(
    ['$15', '$200', '$220', '$20', '$22', 'Free', '$1,000,000']
  )

  let [sellers, setSeller] = React.useState(
    ['jslee402', 'XanderBender', 'SobanTuban', 'StephanieCurry', 'Stonedahl101', 'Rockdahl102', 'NorthKorea']
  )

  let copyPrice = [...price]
  let copyProducts = [...products]

    return (
        <div className="App">
            <Navigation></Navigation>
            <h1>Chatting Page</h1>
        </div>
    );
}
// {
//   sellers.map(function(a,i){
//     return (
//       <div className='post'> 
//         <img src={logo} className='prd-img'/>
//         <div className='prd-info'>
//           <h5 className='prd-name'>{ a }</h5>
//           <p className='seller'>{ copyProducts[i] }</p>
//           <p className='price'>{ copyPrice[i] }</p>
//         </div>
//       </div>
//     )
//   })
// }

export default Chat;
