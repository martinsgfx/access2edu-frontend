import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Calendar() {
    // Get current date
    const [currentDate] = useState(new Date());
    const [selectedWeekStart, setSelectedWeekStart] = useState(() => {
      // Get the start of the current week (Sunday)
      const today = new Date();
      const dayOfWeek = today.getDay(); 
      const diff = today.getDate() - dayOfWeek;
      return new Date(today.setDate(diff));
    });
    
    // Generate dates for the week
    const weekDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(selectedWeekStart);
      date.setDate(date.getDate() + i);
      return date;
    });
    
    // Check if a date is today
    const isToday = (date) => {
      return date.getDate() === currentDate.getDate() &&
             date.getMonth() === currentDate.getMonth() &&
             date.getFullYear() === currentDate.getFullYear();
    };
    
    // Navigate to previous week
    const previousWeek = () => {
      const newStart = new Date(selectedWeekStart);
      newStart.setDate(newStart.getDate() - 7);
      setSelectedWeekStart(newStart);
    };
    
    // Navigate to next week
    const nextWeek = () => {
      const newStart = new Date(selectedWeekStart);
      newStart.setDate(newStart.getDate() + 7);
      setSelectedWeekStart(newStart);
    };
    
    // Format month and year for header
    const formatMonthYear = () => {
      const lastDate = new Date(selectedWeekStart);
      lastDate.setDate(lastDate.getDate() + 6);
      
      // If the week spans two months
      if (selectedWeekStart.getMonth() !== lastDate.getMonth()) {
        const startMonth = selectedWeekStart.toLocaleString('default', { month: 'long' });
        const endMonth = lastDate.toLocaleString('default', { month: 'long' });
        return `${startMonth}-${endMonth} ${lastDate.getFullYear()}`;
      }
      
      return `${selectedWeekStart.toLocaleString('default', { month: 'long' })} ${selectedWeekStart.getFullYear()}`;
    };
    
    return (
      <div className="w-full  bg-white rounded-3xl border border-gray-200 shadow p-4 mb-10">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={previousWeek} 
            className="text-gray-600"
            aria-label="Previous week"
          >
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-2xl font-bold text-center">
            {formatMonthYear()}
          </h2>
          <button 
            onClick={nextWeek} 
            className="text-gray-600"
            aria-label="Next week"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-between">
          {weekDates.map((date, index) => {
            const dayName = date.toLocaleString('default', { weekday: 'short' });
            const dateNum = date.getDate();
            const isTodayDate = isToday(date);
            
            return (
              <div key={index} className="flex flex-col items-center">
                <div className={`text-[16px] font-semibold mb-4 px-2 py-0.5 rounded-md ${
                  isTodayDate ? 'bg-[#785491] text-white font-medium' : 'text-gray-700'
                }`}>
                  {dayName}
                </div>
                <div className={`flex items-center justify-center w-8 h-8 ${
                  isTodayDate ? 'bg-[#785491] text-white font-medium rounded-full' : 'text-gray-800'
                }`}>
                  {dateNum}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

export default Calendar;