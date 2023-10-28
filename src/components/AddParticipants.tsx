import React, { useState } from 'react';

type Props = {};

const AddParticipants = (props: Props) => {
  const [userLogin, setUserLogin] = useState('');
  const [role, setRole] = useState('participant');

  const handleAddUser = () => {
    
  };

  return (
    <div className="container">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
        <input
          type="text"
          placeholder="User Login"
          value={userLogin}
          onChange={(e) => setUserLogin(e.target.value)}
        />
        <button className = "btn btn-light" onClick={handleAddUser}>Add</button>
      </div>
      <div className="col-md-6">
        <label>
          <input
            type="radio"
            value="participant"
            checked={role === 'participant'}
            onChange={() => setRole('participant')}
          />
          Participant
        </label>
        <label>
          <input
            type="radio"
            value="reader"
            checked={role === 'reader'}
            onChange={() => setRole('reader')}
          />
          Reader
        </label>
        <label>
          <input
            type="radio"
            value="reviewer"
            checked={role === 'reviewer'}
            onChange={() => setRole('reviewer')}
          />
          Reviewer
        </label>
        <label>
          <input
            type="radio"
            value="submitter"
            checked={role === 'submitter'}
            onChange={() => setRole('submitter')}
          />
          Submitter
        </label>
      </div>
      </div>
      <div>
        <a style={{color:'brown'}} href="#">Copy Participants from Course</a> |
        <a style={{color:'brown'}} href="#"> Copy Participants to Course</a> | <br></br>
        <a style={{color:'brown'}} href="#"> Import Assignment Participants</a> |
        <a style={{color:'brown'}} href="#"> Export Assignment Participants</a> |
        <a style={{color:'brown'}} href="#"> Back</a>
      </div>
    </div>
    </div>
  );
}

export default AddParticipants;




