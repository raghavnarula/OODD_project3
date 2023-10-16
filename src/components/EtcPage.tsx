import React from 'react';
import BasicExample from './BasicExample';
import PersonIcon from '@mui/icons-material/Person';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function EtcPage() {
  return (
    <div>
      <BasicExample name="John" icon={<PersonIcon />} />
      <BasicExample name="Alice" icon={<PersonPinIcon />} />
    </div>
  );
}

export default EtcPage;