import Spinner from "react-bootstrap/Spinner";
const LoadingSpinner = () => {
  return (
    <div style={{height: '40vh', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;
