import { PacmanLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PacmanLoader />
    </div>
  );
};

export default LoadingScreen;
