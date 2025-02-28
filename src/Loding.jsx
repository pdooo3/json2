const Loading = ({ isLoading }) => {
  return <>{isLoading && <div className="loading"></div>}</>;
};
export default Loading;
