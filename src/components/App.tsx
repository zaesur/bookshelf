import { FunctionComponent } from "react";
import Experience from "./Experience";
import styles from "./App.module.css";
import BookShelf from "./Bookshelf";
import { button, useControls } from "leva"

const App: FunctionComponent = () => {
  const {
    width,
    height,
    depth,
    shelves,
    thickness,
  } = useControls("properties", {
    width: {
      value: 1.5,
      step: 0.1,
      min: 0.5,
      max: 2
    },
    height: {
      value: 2,
      step: 0.1,
      min: 0.5,
      max: 3
    },
    depth: {
      value: 0.3,
      step: 0.05,
      min: 0.1,
      max: 1
    },
    shelves: {
      value: 4,
      step: 1,
      min: 1,
      max: 10,
    },
    thickness: {
      value: 0.02,
      step: 0.005,
      min: 0.01,
      max: 0.05,
    }
  })

  return (
    <div className={styles.experience}>
      <Experience>
        <BookShelf
          width={width}
          height={height}
          depth={depth}
          shelves={shelves}
          thickness={thickness} />
      </Experience>
    </div>
  );
};

export default App;
