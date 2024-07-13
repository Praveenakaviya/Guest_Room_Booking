import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchBar = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    dateRange: [null, null],
    members: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (update) => {
    setFormData({ ...formData, dateRange: update });
  };

  const handleSearch = () => {
    onSearch(formData);
  };

  const { state, city, dateRange, members } = formData;
  const [startDate, endDate] = dateRange;

  return (
    <div className="search-bar">
      <input
        type="text"
        name="state"
        placeholder="State"
        value={state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={city}
        onChange={handleChange}
      />
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
        placeholderText="Select Date Range"
        dateFormat="dd/MM/yyyy"
      />
      <input
        type="number"
        name="members"
        placeholder="Members"
        value={members}
        onChange={handleChange}
        min="1"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
