// import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// export default class NavBar extends Component {
//   constructor(props) {
//     super(props);
//       this.toggle = this.toggle.bind(this);
//       this.state = {
//         isOpen: false
//       };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
//         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div  id="navbarNavDropdown" className="navbar-collapse collapse">
//           <ul className="navbar-nav mr-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#Bank">Bank</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#Kitchen">Kitchen</a>
//               </li>
//           </ul>
//         </div>
//     </nav>
//     );
//   }
// }