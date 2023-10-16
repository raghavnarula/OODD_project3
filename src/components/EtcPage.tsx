import React from 'react';
import BasicExample from './BasicExample';
import PersonIcon from '@mui/icons-material/Person';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function EtcPage() {
  const tester = {
    1: ["John", <PersonIcon />],
    2: ["Alice", <PersonPinIcon />],
    3: ["Alice", <PersonPinIcon />],
    4: ["Alice", <PersonPinIcon />],
    5: ["Alice", <PersonPinIcon />],
    6: ["Alice", <PersonPinIcon />],
    7: ["Alice", <PersonPinIcon />],
  }

  return (
    <div className="container">
      <div className="row">
        {Object.entries(tester).map(([key, value]) => (
          <div className="col-md-3" key={key}>
            <BasicExample name={value[0]} icon={value[1]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EtcPage;
