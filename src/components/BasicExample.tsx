import Card from 'react-bootstrap/Card';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function TextExample(props) {
  return (
    <Card style={{ width: '13rem' }} >
      <Card.Body>
        <Card.Title>
          <PersonAddIcon/>
        </Card.Title>
        <Card.Subtitle className="mx-auto">{props.name}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default TextExample;