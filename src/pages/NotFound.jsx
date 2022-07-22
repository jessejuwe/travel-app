import LoadingSpinner from '../components/UI/LoadingSpinner';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>
        <LoadingSpinner /> Error 404: Page Not Found!
      </h1>
    </div>
  );
};

export default NotFound;
