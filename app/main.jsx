import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DragAndDrop } from '@progress/kendo-react-common';
import { DraggableButton } from './draggable-button';
import { DroppableBox } from './droppable-box';

const App = () => {
  const [box, setBox] = React.useState('A');
  const handleDrop = React.useCallback((id) => {
    setBox(id);
  }, []);
  return (
    <div
      style={{
        height: 300,
        display: 'grid',
        gridGap: 10,
        gridTemplateColumns: '100%',
      }}
    >
<div>Mandag (25-10-2023)</div>

      <DragAndDrop>
        <DroppableBox
          title="10:00 - 12:00"
          selected={box === 'A'}
          id="A"
          onDrop={handleDrop}
        >
          <DraggableButton name="Karsten Grau Rasmussen" />
          <DraggableButton name="Lise Hansen" />
        </DroppableBox>

        <DroppableBox
          title="12:00 - 13:00"
          selected={box === 'B'}
          id="B"
          onDrop={handleDrop}
        >
          <DraggableButton name="Peter Andresen" />          
        </DroppableBox>

        <DroppableBox
          title="13:00 - 14:00"
          selected={box === 'C'}
          id="C"
          onDrop={handleDrop}
        >
          
        </DroppableBox>

        <DroppableBox selected={box === 'D'} id="D" onDrop={handleDrop}>
          
        </DroppableBox>
      </DragAndDrop>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
