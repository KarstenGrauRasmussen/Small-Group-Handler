import * as React from 'react';
import { useDroppable } from '@progress/kendo-react-common';
export const DroppableBox = (props) => {
  const title = props.title;
  const element = React.useRef(null);
  const [isInside, setIsInside] = React.useState(false);
  const handleDragEnter = React.useCallback(() => {
    setIsInside(true);
  }, []);
  const handleDragLeave = React.useCallback(() => {
    setIsInside(false);
  }, []);
  const handleDrop = React.useCallback(() => {
    props.onDrop(props.id);
  }, [props.onDrop, props.id]);
  useDroppable(element, {
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
  });
  return (
    <div
      ref={element}
      style={{
        padding: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '200px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '5px',
        borderColor: !props.selected && isInside ? 'orange' : 'lightgray',
        transition: 'border-color .2s ease-in-out',
      }}
    >
      <div>{title}</div>
      {props.children}
    </div>
  );
};
