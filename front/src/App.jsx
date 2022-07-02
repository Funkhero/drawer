import SettingBar from './components/settings';
import Toolbar from './components/toolbar';
import Canvas from './components/canvas';
import './styles/main.scss';

const App = () => {
  return (
    <div className="app">
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
};

export default App;
