import { KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';

 function TimeTable() {
  const [selectedYear, setSelectedYear] = useState('2024/2025');
  const [selectedTerm, setSelectedTerm] = useState('Term');
  
  return (
    <div className="p-15">
      <div className="bg-purple-50 rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="p-6">
          <h1 className="text-2xl font-bold">Time Table</h1>
        </div>
        
        {/* Divider */}
        <hr className="border-gray-300" />
        
        {/* Filter Section */}
        <div className="p-6 flex justify-end space-x-4">
          {/* Year Dropdown */}
          <div className="relative">
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="appearance-none  border border-gray-300 rounded-lg py-2 px-4 pr-8 w-40 text-gray-700 focus:outline-none"
            >
              <option>2024/2025</option>
              <option>2023/2024</option>
              <option>2022/2023</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <KeyboardArrowDown />
            </div>
          </div>
          
          {/* Term Dropdown */}
          <div className="relative">
            <select 
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="appearance-none  border border-gray-300 rounded-lg py-2 px-4 pr-8 w-40 text-gray-700 focus:outline-none"
            >
              <option>Term</option>
              <option>First Term</option>
              <option>Second Term</option>
              <option>Third Term</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <KeyboardArrowDown />
            </div>
          </div>
        </div>
        
        {/* Contet  */}
        <div className="p-6 h-96">
          {/* Time Table Content */}         
        </div>
      </div>
    </div>
  );
}

export default TimeTable;