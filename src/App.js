import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
      <h1 className='page_name'>Food Factory</h1>
      <p className='quote'>People who love to eat are always the best people.</p>
    
      <div className="box">
      <Card img="salad.jpeg"
        name="The Everyday Salad"
        description="Take your boring salads up a knotch. this recipe is perfect for lunch"
        />

      <Card 
        img="vada pav.jpeg"
        name="Start Your Day"
        description="Burger bole bol BAKWAAS vadapav bole bol JHAKAAS"/>  

      <Card 
        img="panipuri.jpeg"
        name="craving For Pani-puri"
        description="Everybody has a fifferent types of addiction and mine is PANIPURI"/>
      <Card
        img="salad.jpeg"
        name="The Everyday Salad"
        description="Take your boring salads up a knotch. this recipe is perfect for lunch"
      />
      </div>
    </div>

  );
}

export default App;










// import './App.css';
// import Card from './Components/Card'

// function App() {
//   return (
//     <div className="App">
//       <Card
//         img="salad.jpeg"
//         title="The Everyday Salad"
//         description="Take your boring salads up a knotch. this recipe is perfect for lunch"
//         button="View Recipe"
//       />
//       <Card
//         img="vada pav.jpeg"
//         title="Start Your Day"
//         description="Burger bole bol BAKWAAS vadapav bole bol JHAKAAS"
//         button="View Recipe"
//       />
//       <Card
//         img="panipuri.jpeg"
//         title="craving For Pani-puri"
//         description="Everybody has a fifferent types of addiction and mine is PANIPURI"
//         button="View Recipe"
//       />
//     </div>
//   );
// }

// export default App;
