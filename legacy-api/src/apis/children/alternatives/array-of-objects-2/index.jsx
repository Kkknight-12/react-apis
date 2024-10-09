import { useState } from "react";

export default function App() {
  return (
    <TabSwitcher
      tabs={[
        {
          id: "first",
          header: "First",
          content: <p>This is the first item.</p>,
        },
        {
          id: "second",
          header: "Second",
          content: <p>This is the second item.</p>,
        },
        {
          id: "third",
          header: "Third",
          content: <p>This is the third item.</p>,
        },
      ]}
    />
  );
}

function TabSwitcher({ tabs }) {
  const [selectedId, setSelectedId] = useState(tabs[0].id);
  const selectedTab = tabs.find((tab) => tab.id === selectedId);

  return (
    <>
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => setSelectedId(tab.id)}>
          {tab.header}
        </button>
      ))}
      <hr />
      <div key={selectedId}>
        <h3>{selectedTab.header}</h3>
        {selectedTab.content}
      </div>
    </>
  );
}