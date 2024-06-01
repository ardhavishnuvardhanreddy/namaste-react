import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
              <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"/>  
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us </li>
                    <li>Contac Us</li>
                    <li>Cart</li>
                </ul> 
            </div>
        </div>
    )
} ;

 const RestaurantCard = (props) =>{
    const {resName,cusins} = props;
    return (
        <div className="res-card" style={  {  backgroundColor:"#f0f0f0"
        }}>   
        <img className="res-logo" alt ="res-logo"src="https://cdn2.vectorstock.com/i/1000x1000/57/51/creative-burger-logo-design-symbol-vector-25895751.jpg"/>
        <h3>{resName}</h3>
        <h4>{cusins}</h4>
        <h4>4.4 Stars</h4>
        <h4>38 mins</h4>
        </div>
    )
 }


const Body = () =>{
    return (
        <div className="body">
             <div className="search"></div>
             <div className="res-container">
               < RestaurantCard resName="Meghana Food" cusins="Biryani,North Indian,Asian"/>  
               < RestaurantCard resName="Meghana Food" cusins="Biryani,North Indian,Asian"/>  
               < RestaurantCard resName="Meghana Food" cusins="Biryani,North Indian,Asian"/>  
               < RestaurantCard resName="Meghana Food" cusins="Biryani,North Indian,Asian"/>  
               < RestaurantCard resName="Meghana Food" cusins="Biryani,North Indian,Asian"/>  
                
             </div>
        </div>
    );
};
const AppLayout = () =>{
    return(
        <div className="app">
          <Header/>
          <Body/>
        </div>
    )
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root .render(<AppLayout/>);