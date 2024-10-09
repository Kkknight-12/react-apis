import React from "react";

// This is our component that uses render props
const MouseTracker = ({ render }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {render(mousePosition)}
    </div>
  );
};

// This is how we use the MouseTracker component
const MouseTrackerComponent = () => {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      )}
    />
  );
};

export default MouseTrackerComponent;