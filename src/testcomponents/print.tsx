import React from 'react';
import Buttons from '../ui/Buttons';

interface Props {
  message: string;
}

const Print: React.FC<Props> = ({ message }) => {
  return (
    <div>

      <div>
        <p>{message}</p>
        <h5><p>[Start]</p></h5>
        
      </div>
      <Buttons name="Test" />
      <div>

        <p><h5>[End]</h5></p>
      </div>

    </div>
  );
};


export default Print;