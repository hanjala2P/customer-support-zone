import Nav from './Navbar/Nav'
import TaskStatus from '../src/assets/Hero/HeroStatus'
import CustomerTiket from './Castumers Ticket/CustomerTiket'
import './App.css'
import { Suspense, useState,} from 'react';
import Footer from './assets/Footer/Footer';

const fetchCard= async()=>{
  const res = await fetch("/tikets.json");
  return res.json();
  
};
const CardPromise = fetchCard();


function App() {

  // Handle card selection
    const handleSelectedCard=(cardId)=>{
    console.log("Selected Card ID:",cardId);
    setCount(count+1);
  }

  // count cards in progress
 const [count,setCount]=useState(0);


  // // Handle card selection
  // const handleCountInProgress=()=>{

    
  //   setCount(count+1)
  // }
   


  return (
    <>
     <Nav></Nav>
     <TaskStatus count={count} setCount={setCount}></TaskStatus>
        <Suspense
          fallback={
            <div className=' mx-10 lg:mx-20'>
              <span className="loading loading-ring loading-xl"></span>
            </div>
          }
        >
      <CustomerTiket handleSelectedCard={handleSelectedCard} CardPromise={CardPromise}></CustomerTiket>
     </Suspense>
      <Footer></Footer>
    </>     
  )
}

export default App
