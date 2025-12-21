import card from 'daisyui/components/card';
import React from 'react';

const TaskStatusCard = ({handleResolvedData}) => {
    return (
        <div>
            <div className='flex flex-col gap-4 mt-2 bg-white rounded-lg p-4 shadow-md mb-4'>
                <p className='text-lg font-medium flex wrap-anywhere'>Card dddddddddddddddd</p>
                <button onClick={() => handleResolvedData(card.id)} className='btn bg-green-600 border-none mb-3 mt-1'>Complete</button>
            </div>
        </div>
    );
};

export default TaskStatusCard;