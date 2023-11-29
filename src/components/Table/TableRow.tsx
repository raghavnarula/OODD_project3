import {GiCrossMark} from 'react-icons/gi';
export const TableRow = ({ teamName,handleDeleteUser,personDetails }) => {
  return (
    <>
    <tr>
      <td></td>
      <td></td>
      <td><b>Unity ID</b></td>
      <td></td>
    </tr>
    {personDetails.map((person, id) => (
      <tr key={id}>
        <td style={{paddingLeft:'20px'}}>{id+1}</td>
        <td></td>
        <td>{person.unityId}</td>
        <td>
        <button onClick={() => handleDeleteUser(teamName, person.id)}>
              <GiCrossMark color="red" size={20}/>
        </button>
        </td>
      </tr>
    ))}
    </>
  );
};
