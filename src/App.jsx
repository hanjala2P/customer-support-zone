import Nav from './Navbar/Nav';
import TaskStatus from '../src/assets/Hero/HeroStatus';
import CustomerTiket from './Castumers Ticket/CustomerTiket';
import './App.css';
import { Suspense, useState } from 'react';
import Footer from './assets/Footer/Footer';

// Toastify Imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchCard = async () => {
  const res = await fetch("/tikets.json");
  return res.json();
};
const CardPromise = fetchCard();


function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  
  // 1. Select kora card gulo track korar jonno state
  const [selectedCards, setSelectedCards] = useState([]);

  // Card click korle check korbe jeta age add hoyeche kina
  const handleSelectedCard = (card) => {
    // Check korchi cardId-ti age theke list-e ache kina
    const isAlreadyAdded = selectedCards.find(item => item.id === card.id);

    if (isAlreadyAdded) {
      // Jodi agei add hoye thake
      toast.error("This ticket is already in progress!", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      // Jodi notun hoy, tobe count barbe r ID-ti track rakha hobe
      setInProgress((prev) => prev + 1);
      setSelectedCards([...selectedCards, card]);
      
      toast.info(`Ticket added to In-Progress!`, {
        position: "top-right",
        autoClose: 1500,
      });
    }
  };

  // Resolve click korle
  const handleResolvedData = (cardId) => {
    if (inProgress > 0) {
      setInProgress((prev) => prev - 1);
      setResolved((prev) => prev + 1);
      
      // Resolve hoye gele selected list theke ID-ti shoriye fela jate pore abar add kora jay
      const remainingCards = selectedCards.filter(item => item.id !== cardId);
      setSelectedCards(remainingCards);

      toast.success("Ticket Resolved Successfully! 🎉", {
        position: "top-center",
        autoClose: 1500,
      });
    } else {
      toast.warning("No tickets in progress to resolve!");
    }
  };

  return (
    <>
      <ToastContainer />
      <Nav />
      
      <TaskStatus
        inProgress={inProgress}
        resolved={resolved}
        
      />

      <Suspense
        fallback={
          <div className='mx-10 lg:mx-20'>
            <span className="loading loading-ring loading-xl"></span>
          </div>
        }
      >
        <CustomerTiket
          handleSelectedCard={handleSelectedCard}
          CardPromise={CardPromise}
          handleResolvedData={handleResolvedData}
          selectedCards={selectedCards}
        />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;