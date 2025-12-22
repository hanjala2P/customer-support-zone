import React from 'react';

const TaskStatusCard = ({ handleResolvedData, selectedCards }) => {
    // এখানে আর CardPromise লোড করার দরকার নেই
    return (
        <div>
           {
            // শুধুমাত্র সিলেক্ট করা কার্ডগুলো এখানে দেখাবে
            selectedCards && selectedCards.map((card) => (
                <div key={card.id} className='flex flex-col gap-4 mt-2 bg-white rounded-lg p-4 shadow-md mb-4 border-l-4 border-purple-500'>
                    <p className='text-lg font-medium flex wrap-anywhere'>{card.title}</p>
                    <button 
                        onClick={() => handleResolvedData(card.id)} 
                        className='btn bg-green-600 border-none mb-3 mt-1 text-white'
                    >
                        Complete
                    </button>
                </div>
            ))
           }
           
           {selectedCards.length === 0 && (
             <p className="text-gray-400 text-center py-4">No cards selected yet.</p>
           )}
        </div>
    );
};

export default TaskStatusCard;