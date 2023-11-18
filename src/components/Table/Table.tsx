import { info } from "../../data/info";
import { TableSection } from "./TableSection.jsx";
export const Table = () => {
  return (
    <table>
      <thead>
        <td></td>
        <th>Team Name</th>
        <th>Email</th>
        <th>Name</th>
      </thead>
      {info.map((personDetails, index) => (
        <TableSection personDetails={personDetails} index={index} />
      ))}
    </table>
  );
};