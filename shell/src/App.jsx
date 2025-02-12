import './App.css';
// The remote component provided by federation_provider
import Header from '../../header/src/Header';

const App = () => {
  return (
    <div className="content">
      <div>
        <Header />
      </div>
      <h1>This is my app !</h1>
    </div>
  );
};

export default App;