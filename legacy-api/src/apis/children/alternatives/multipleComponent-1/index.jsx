import { RowList, Row } from './RowList.js';

export default function App() {
  return (
    <RowList>
      <Row>
        <p>This is the first item.</p>
      </Row>
      <MoreRows />
    </RowList>
  );
}

function MoreRows() {
  return (
    //  will be rendered as seperate elements
    <>
      <Row>
        <p>This is the second item.</p>
      </Row>
      <Row>
        <p>This is the third item.</p>
      </Row>
    </>
  );
}


export function RowList({ children }) {
  return <div className='RowList'>{children}</div>;
}

export function Row({ children }) {
  return <div className='Row'>{children}</div>;
}
