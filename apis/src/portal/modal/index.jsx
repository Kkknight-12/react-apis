import NoPortalExample from './NoPortalExample';
import PortalExample from './PortalExample';
import './index.css';

/*
 * clipping-container ->  overflow: hidden
 * 1. NoPortalExample: Modal is clipped by the parent container
 * 2. PortalExample: Modal is not clipped by the parent container
 *   - Modal is rendered outside the parent container
 */
export default function PortalModal() {
  return (
    <>
      <div className='clipping-container'>
        <NoPortalExample />
      </div>
      <div className='clipping-container'>
        <PortalExample />
      </div>
    </>
  );
}
