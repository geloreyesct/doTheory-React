const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className='stats'>Players: 1</span>
    </header>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
