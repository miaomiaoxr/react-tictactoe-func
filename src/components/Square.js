import '../index.css';

const Square = (props) => {
    
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square" onClick={()=>console.log('clicked')}>
//           {this.props.value}
//         </button>
//       );
//     }
//   }

export default Square;