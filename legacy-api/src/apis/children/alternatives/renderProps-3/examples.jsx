function RenderPropComponent({ render }) {
  return <div>{render()}</div>;
}

export default function App() {
  return (
    <RenderPropComponent
      render={() => (
        <>
          <h1>This is a render prop example</h1>
          <p>It allows for greater flexibility in rendering content.</p>
        </>
      )}
    />
  );
}