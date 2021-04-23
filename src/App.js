import 'bootswatch/dist/cosmo/bootstrap.min.css';
import './App.scss';
import Header from './componenets/shared/Header';
import Wallet from './componenets/wallet/Wallet';

function App() {
  return (
    <div className="App">
      <Header />
      <Wallet />
    </div>
  );
}

export default App;
