import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return (
    <div>
      <Title />
      <Message />
    </div>
  );
}

const Title = () => {
  return <h1>This is Anup and this is my first component</h1>;
};

const Message = () => {
  return <p>Hey Hey Hey</p>;
};

// // It is simpler to up functional Component Greeting // //
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById('root'));
