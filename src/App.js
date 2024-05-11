import Navbar from "./components/Navbar";
// import './App.css'
import gym from './assets/gym.jpg'
import gym2 from './assets/gym2.jpg'
import Whoweare from "./components/Whoweare";

function App() {
  return (
    <div className="App">
          <div className={`text-white mt-[200px] slide-in anton-regular opacity-70 pl-8 md:pl-40 lg:pl-40`} style={{maxWidth:"1000px", overflow:"hidden", 
      justifyContent:"flex-end", position:"absolute", zIndex:11, textAlign:"left"}}>THE ONLY IMPOSSIBLE JOURNEY<br/>IS THE ONE<br/><p className='text-8xl' style={{color:"#a4ff2e"}}>YOU NEVER START</p></div>
      <img className='hidden lg:flex md:flex z-55' src={gym}/>  
      <img className='md:hidden lg:hidden flex h-screen opacity-70' src={gym2}/>
      <Navbar/>
      <Whoweare/>
    </div>
  );
}

export default App;
