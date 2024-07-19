import classes from './modules/App.module.scss';
import Card from './components/Card';
import Register from './components/Register';
import MainImg from './assets/images/bg-main-desktop.png';

function App() {
  return (
    <div className={classes['app-wrapper']}>
      <div>
        <Card />
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
}

export default App;
