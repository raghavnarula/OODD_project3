import { info } from "../../data/info";
import { TableSection } from "./TableSection.jsx";
export const Table = () => {
  // info.map((personDetails, index) => (
  //   console.log(personDetails)
  // ))
  return (
    <table>
      <thead>
        <td></td>
        <th>Email</th>
        <th>Name</th>
      </thead>
      {info.map((personDetails, index) => (
        <TableSection personDetails={personDetails} index={index} />
      ))}
    </table>
  );
};