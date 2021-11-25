import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.js';


// function formatDate(date){
//   return date.toLocaleTimeString();
// }
// /*
//   function Comment(props){
//     return (
//       <div className="Comment">
//         <div className="info">
//           <img
//             className="urlltext"
//             src={props.author.urll}
//             alt={props.author.name} 
//           />
//           <div className="user-name">
//             <h1>{props.author.name}</h1>
//           </div>
//           <div className="comment-text">
//             {props.text}
//           </div>
//           <div className="date">
//             {formatDate(props.date)}
//           </div>
//         </div>
//       </div>
//     );
//   }
//   */
// //  function Urlltext(props){
// //    return (
// //     <img
// //     className="Urlltext"
// //     src={props.user.urll}
// //     alt={props.user.name} 
// //   />
// //    );
// //  }
// class Urlltext extends React.Component{
//   render(){
//     return(
//       <img 
//       className="Urlltext"
//       src={this.props.user.urll}
//       alt={this.props.user.name}
//     />
//     );
//   }
// }
// //  function UserName(props){
// //    return (
// //      <div className="UserName">
// //        <Urlltext user={props.user}/>
// //        <div className="UserInfo">
// //          {props.user.name}
// //        </div>
// //      </div>
// //    );
// //  }
// class UserName extends React.Component{
//   render(){
//     return(
//       <div className="UserName">
//         <Urlltext user={this.props.user}/>
//         <div className="UserInfo">
//           {this.props.user.name}
//         </div>
//       </div>
//     );
//   }
// }
// //  function Comment(props){
// //    return (
// //      <div className="Comment">
// //        <UserName user={props.author}/>
// //        <div className="Comment-text">{props.text}</div>
// //        <div className="comment-date">{formatDate(props.date)}</div>
// //      </div>

// //    );
// //  }
// class Comment extends React.Component{
//   render(){
//     return(
//       <div className="Comment">
//         <UserName user={this.props.author}/>
//         <div className="Comment-text">{this.props.text}</div>
//         <div className="comment-date">{formatDate(this.props.date)}</div>
//       </div>
//     );
//   }
// }
// const comment={
//   date: new Date(),
//   text: 'Hello vijay hope you learning ReactJs very well!!',
//   author:{
//     name: 'Birkur Vijay',
//     urll: 'https://placekitten.com/g/64/64',
//   },
// };




  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
