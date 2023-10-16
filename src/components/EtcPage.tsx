import React from 'react';
import BasicExample from './BasicExample';
import PersonIcon from '@mui/icons-material/Person';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function EtcPage() {
  const tester = {
    1: ["John", <PersonIcon />],
    2: ["Alice", <PersonPinIcon/>]
  }


  return (
    <div>
      {Object.entries(tester).map(([key, value]) => (
        <div>
          <BasicExample name={value[0]} icon={value[1]}/>
        </div>
      ))}
    </div>
  );
}

export default EtcPage;