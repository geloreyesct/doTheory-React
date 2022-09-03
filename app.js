const desc =
  'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Gelo';

const header = (
  <header>
    <h1 id={myTitleID}>{name}'s First React Element!</h1>
    <p className='main-desc'>{desc}</p>
  </header>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header);
