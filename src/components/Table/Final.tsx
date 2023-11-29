// TeamTable.tsx
import React, { useEffect, useState } from 'react';

type User = {
  id: number;
  unityId: string;
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
        if (newTeamName.trim() !== '') {
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
    if (teamData) {
      const newUnityId = prompt('Enter the Unity ID for the new user');
      if (newUnityId) {
        const newUser: User = {
          id: teamData[teamName].length + 1, // Using timestamp as a simple way to generate a unique ID
          unityId: newUnityId,
        };

        const updatedTeamData = { ...teamData };
        updatedTeamData[teamName].push(newUser);
        setTeamData(updatedTeamData);
        sendTeamDataToServer(updatedTeamData);
      }
    }
  };

  const handleDeleteUser = (teamName: string, userId: number) => {
    if (teamData) {
      const updatedTeamData = { ...teamData };
      updatedTeamData[teamName] = updatedTeamData[teamName].filter((user) => user.id !== userId);
      setTeamData(updatedTeamData);
      sendTeamDataToServer(updatedTeamData);
    }
  };
  const handleDeleteTeam = (teamName: string) => {
    if (teamData) {
      const updatedTeamData = { ...teamData };
      delete updatedTeamData[teamName];
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
            <button onClick={() => handleDeleteTeam(teamName)}>Delete Team</button>
          </h3>
          
          <button onClick={() => handleAddNewUser(teamName)}>Add New User</button>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Unity ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.unityId}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(teamName, user.id)}>Delete User</button>
                  </td>
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
