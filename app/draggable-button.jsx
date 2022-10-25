import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { useDraggable, Icon } from '@progress/kendo-react-common';
export const DraggableButton = (props) => {
  const hint = React.useRef(null);
  const button = React.useRef(null);
  const [dragged, setDragged] = React.useState(false);
  const [initial, setInitial] = React.useState(null);
  const handleDragStart = React.useCallback((event) => {
    setDragged(true);
    setInitial({
      x: event.clientX,
      y: event.clientY,
    });
  }, []);
  const handleDrag = React.useCallback(
    (event) => {
      if (!hint.current || !hint.current.element || !initial) {
        return;
      }

      const transform = `translate(${event.clientX - initial.x}px, ${
        event.clientY - initial.y
      }px)`;
      hint.current.element.style.transition = 'none';
      hint.current.element.style.transform = transform;
    },
    [initial]
  );
  const handleDragEnd = React.useCallback(() => {
    if (!hint.current || !hint.current.element) {
      return;
    }

    hint.current.element.style.transition = 'transform .3s ease-in-out';
    hint.current.element.style.transform = null;
    setDragged(false);
    setInitial(null);
  }, []);
  useDraggable(
    button,
    {
      onDragStart: handleDragStart,
      onDrag: handleDrag,
      onDragEnd: handleDragEnd,
    },
    {
      hint: hint,
    }
  );
  return (
    <React.Fragment>
      <Button
        ref={button}
        {...props}
        style={{
          zIndex: 10,
          // position: 'absolute',
          margin: 2,
          opacity: dragged ? '0.7' : undefined,
        }}
        themeColor={'primary'}
      >
        <Icon name="move" size="small" /> {props.name}
      </Button>
      {dragged && (
        <Button
          ref={hint}
          {...props}
          style={{
            zIndex: 10,
            // position: 'absolute',
          }}
          themeColor={'primary'}
        >
          <Icon name="move" size="small" /> {props.name}
        </Button>
      )}
    </React.Fragment>
  );
};
