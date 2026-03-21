import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner" role="status" aria-label="Loading content">
      <div className="loading-spinner__container">
        <div className="loading-spinner__ring">
          <div className="loading-spinner__dot"></div>
          <div className="loading-spinner__dot"></div>
          <div className="loading-spinner__dot"></div>
        </div>
        <span className="loading-spinner__text">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
