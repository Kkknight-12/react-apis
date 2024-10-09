import { useState } from 'react';

/*
 * Render props serve as an alternative to traditional children
 * methods. With render props, you pass a function as a prop to
 * a component, and this function returns JSX. This approach can
 * increase flexibility and reusability
 */

/*
 * In a render props pattern, the parent component doesn’t
 * run the child’s callback. Instead, the parent component
 * provides a function (the render prop) to the child.
 * The child component then calls this function to render its content.
 *
 * Essentially:
 * The parent component passes a function (render prop) to the child component.
 * The child component calls this function to determine what it should render.
 */

// Parent
export default function RenderPropComponent() {
  return (
    <TabSwitcher
      tabIds={['first', 'second', 'third']}
      // RenderProp
      getHeader={(tabId) => {
        // make first letter capital then add the rest of the string
        // first =>  F                + irst
        return tabId[0].toUpperCase() + tabId.slice(1);
      }}
      // RenderProp
      renderContent={(tabId) => {
        return <p>This is the {tabId} item.</p>;
      }}
    />
  );
}

// Child
function TabSwitcher({ tabIds, getHeader, renderContent }) {
  const [selectedId, setSelectedId] = useState(tabIds[0]);
  return (
    <>
      {tabIds.map((tabId) => (
        <button key={tabId} onClick={() => setSelectedId(tabId)}>
          {getHeader(tabId)}
        </button>
      ))}
      <hr />
      <div key={selectedId}>
        <h3>{getHeader(selectedId)}</h3>
        {renderContent(selectedId)}
      </div>
    </>
  );
}
