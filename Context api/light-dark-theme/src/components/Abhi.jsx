import { useContext } from 'react';
import { ThemeContext } from '../context';


function Abhi(){

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className = {`container ${theme}`} >
        <button onClick={toggleTheme} className='butt' > Toggle Theme </button>
    </div>
    
  );
}

export default Abhi;