import { createPortal } from 'react-dom';

/*
 * Portals let your components render some of their children
 * into a different place in the DOM. This lets a part of your
 * component “escape” from whatever containers it may be in.
 */

/* 
* second paragraph visually appears outside the parent <div>
* second para <p> Tag got placed directly into the <body>
 */
export function PortalText() {
  return (
    <div style={{ border: '2px solid black' }}>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
    </div>
  );
}

// document.getElementById('root')
