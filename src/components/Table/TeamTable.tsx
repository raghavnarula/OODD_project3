// TeamTable.tsx
import React, { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  age: number;
  city: string;
};

type Team = {
  [teamName: string]: User[];
};

const TeamTable: React.FC = () => {
  const [teamData, setTeamData] = useState<Team | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://64460e44ee791e1e29f5be26.mockapi.io/api/v1/name/testing2');
        const data = await response.json();
        delete data[data.length-1].id
        setTeamData(data[data.length-1])
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };
    fetchData();
  }, []);

  const handleEditTeamName = (oldTeamName: string, newTeamName: string) => {
    if (teamData && newTeamName !== null && newTeamName.trim() !== '') {
      const updatedTeamData = { ...teamData };
      updatedTeamData[newTeamName] = updatedTeamData[oldTeamName];
      delete updatedTeamData[oldTeamName];
      setTeamData(updatedTeamData);
      sendTeamDataToServer(updatedTeamData);
    }
  };

  const handleCreateNewTeam = () => {
    const newTeamName = prompt('Enter the name for the new team');
    if (newTeamName) {
      if (teamData) {
        const updatedTeamData = { ...teamData, [newTeamName]: [] };
        setTeamData(updatedTeamData);
        sendTeamDataToServer(updatedTeamData);
      }
    }
  };

  const handleAddNewUser = (teamName: string) => {
    const newUser: User = {
      name: prompt('Enter the unity ID for the new user') || 'New User',
    };

    if (teamData) {
      const updatedTeamData = { ...teamData };
      updatedTeamData[teamName].push(newUser);
      setTeamData(updatedTeamData);
      sendTeamDataToServer(updatedTeamData);
    }
  };

  const sendTeamDataToServer = async (data: Team) => {
    try {
      // Replace this URL with your server endpoint
      await fetch('https://64460e44ee791e1e29f5be26.mockapi.io/api/v1/name/testing2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error sending team data to the server:', error);
    }
  };

  if (!teamData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Team Information</h2>
      <button onClick={handleCreateNewTeam}>Create New Team</button>
      {Object.entries(teamData).map(([teamName, users]) => (
        <div key={teamName}>
          <h3>
            <span>{teamName}</span>
            <button onClick={() => handleEditTeamName(teamName, prompt('Enter new team name') || teamName)}>
              Edit Team Name
            </button>
            <button onClick={() => handleAddNewUser(teamName)}>Add New User</button>
          </h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TeamTable;
