import './App.css';
import Abhi from './components/Abhi';
import { ThemeProvider } from './context';



function App() {
  return (
    <ThemeProvider>
       <Abhi />
    </ThemeProvider>
  );
}

export default App;
