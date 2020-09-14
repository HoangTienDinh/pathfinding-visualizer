import React, { useState, useEffect } from "react";
import Node from "./Node/Node";

import "./PathfindingVisualizer.css";

const PathfindingVisualizer = () => {
  const [nodes, setNodes] = useState([]);

  const componentDidMount = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push('[]');
      }
      grid.push(currentRow);
    }
    setNodes([...nodes, grid]);
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  return (
    <div className="grid">
      {nodes.map((row, rowInd) => {
        return (
          <div key={rowInd}>
            {row.map((node, nodeInd) => (
              <Node node={node} nodeInd={nodeInd}></Node>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PathfindingVisualizer;
