import BasicExample from './components/BasicExample';
import Button from 'react-bootstrap/Button'; 

function App() {
  return (
    <>
      <div className='container'>
        <div className="row mt-4">
          <div className="d-flex justify-content-center col-sm mb-3">
          <BasicExample name="Hello"/>
          </div>
          <div className="d-flex justify-content-center col-sm mb-3">
          <BasicExample name="Hello"/>
          </div>
          <div className="d-flex justify-content-center col-sm mb-3">
          <BasicExample name="Hello"/>
          </div>
          <div className="d-flex justify-content-center col-sm mb-3">
          <BasicExample name="Hello"/>
          </div>
          <div className="d-flex justify-content-center col-sm mb-3">
          <BasicExample name="Hello"/>
          </div>
          <div className="d-flex justify-content-center col-sm mb-3">
          <BasicExample name="Hello"/>
          </div>
        </div>
      </div>
    </>)
    }

export default App