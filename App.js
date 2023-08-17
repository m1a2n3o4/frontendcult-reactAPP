import React  from "react";
import ReactDOM  from "react-dom";

// React Create Element
const h1tag = React.createElement("div",{ id : "parent"}, "some tetxt");

//JSX - 5%
// Babel - 
let name =" manohar";
let mobile = "9553345235"
const jsXdivision = <div id="myid" className="my-div"><p>My name is { name } and my mobile number is { mobile }</p>
<p id="name">dSDfasdfasdf</p>JSX
</div>;

// React Components

// Everything in react components. 2 ways) 
 // 1) Class based components  (OLD Way)
 // 2) Functional/methods based components (99.999 )
 // ....................................Components.........................
   const userDetails = {
    usernmar: "Manohar",
    mobile : 9553345235
   }
 const ButtonCOM = () => (
    <input type="text"/>
 );
   const HeaderComponent = () => (
    <div class="header"><h2>my Header</h2><ButtonCOM/></div>
   );

   const ContentComponent = () => (
    <div class="content">
        <h2>The user name :  { userDetails.usernmar }</h2>
    </div>
   )

   const FooterComponent = () => (
    <div class="footer"><h2>my content</h2></div>
   )

const HomepageComponent = () => (
    <div className="container">
        <HeaderComponent></HeaderComponent>
        <ContentComponent></ContentComponent>
        <FooterComponent></FooterComponent>
    </div>
);
   


console.log(h1tag);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HomepageComponent/>); //Rectjs element - HTML Element

