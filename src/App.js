import './App.css';
import Header from './components/Header';
import arr from './components/storage'

function App() {
  
  return (
    <>
      <Header />
      <div className='wall'>
        {
          arr.map(item => {
            return (
              <div className='container'>
                <img src={item.img} alt="nature" />
                <h1>{item.text}</h1>
              </div>
            )
            
          })
        }
      </div>
    </>
    
  );
}

export default App;
