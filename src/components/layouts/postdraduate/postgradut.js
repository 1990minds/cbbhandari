import React from 'react';
// import Pinfo from './pinfo'
import Loadable from 'react-loadable';



const LoadablePInfoComponent = Loadable({
    loader: () => import('./pinfo'),
    loading: 'Loading...',
  });

const Postgradut = () => {
    return (
        <div className="container">
            <LoadablePInfoComponent/>
        </div>
    );
};

export default Postgradut;