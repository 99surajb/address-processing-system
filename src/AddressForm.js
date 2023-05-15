import React, { useState } from 'react';


const AddressForm = () => {
  const [inputAddress, setInputAddress] = useState('');
  const [parsedAddress, setParsedAddress] = useState({});

  const handleInputChange = (e) => {
    setInputAddress(e.target.value);
  };

  const parseAddress = () => {
    try {
      const lines = inputAddress.split('\n');
      const parsedAddressData = {};

      lines.forEach((line) => {
        const [key, value] = line.split(':').map((item) => item.trim().replace(/["']/g, ''));
        parsedAddressData[key.toLowerCase()] = value;
      });

      const parsedAddress = {
        house: parsedAddressData.house || '',
        locality: parsedAddressData.address || '',
        landmark: parsedAddressData.landmark || '',
        area: parsedAddressData.area|| '',
        city: parsedAddressData.city || '',
        state: parsedAddressData.state || '',
        country: parsedAddressData.country || 'India',
        pincode: parsedAddressData.pincode || ''
        
      };
      

      setParsedAddress(parsedAddress);
    } catch (error) {
      console.error('Error parsing address:', error);
    }
  };

  return (
    <div>
      <textarea value={inputAddress} onChange={handleInputChange} placeholder="Enter address..." />
      <button onClick={parseAddress}>Parse Address</button>
      <h2>Parsed Address:</h2>
      <pre>{JSON.stringify(parsedAddress, null, 2)}</pre>
    </div>
  );
};

export default AddressForm;
