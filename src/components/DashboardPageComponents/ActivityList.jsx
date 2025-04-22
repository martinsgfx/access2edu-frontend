import React from 'react';

function ActivityList() {
    const dueDate = new Date(2025, 0, 5, 16, 30); // Jan 5, 2025, 4:30 PM

    function formatDate(date) {
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getFullYear();
        const time = date.toLocaleString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        });
        
        return `${day} ${month} ${year}, ${time}`;
      }


    return (
        <div>
            <h1 className='mb-6 mt-12 text-2xl font-bold '>Activity List</h1>
            <div className='flex gap-4 items-center bg-[#F3EFF8] rounded-2xl mb-4'>
                <div className="bg-[#D9D9D9] w-20 h-20 rounded-lg mr-4">
                </div>
                <div>
                    <h3 className='font-bold text-lg mt-2'>Ass. Submission</h3>
                    <p className='text-[#464646]'>{formatDate(dueDate)}</p>
                </div>
            </div>
            <div className='flex gap-4 items-center bg-[#F3EFF8] rounded-2xl mb-4'>
                <div className="bg-[#D9D9D9] w-20 h-20 rounded-lg mr-4">
                </div>
                <div>
                    <h3 className='font-bold text-lg mt-2'>Ass. Submission</h3>
                    <p className='text-[#464646]'>{formatDate(dueDate)}</p>
                </div>
            </div>
            <div className='flex gap-4 items-center bg-[#F3EFF8] rounded-2xl mb-4'>
                <div className="bg-[#D9D9D9] w-20 h-20 rounded-lg mr-4">
                </div>
                <div>
                    <h3 className='font-bold text-lg mt-2'>Ass. Submission</h3>
                    <p className='text-[#464646]'>{formatDate(dueDate)}</p>
                </div>
            </div>
        </div>
    )
}

export default ActivityList;