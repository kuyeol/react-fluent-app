

import Buttons from '../ui/common/Buttons';

interface Props {
  message: string;
}

const Print: React.FC<Props> = ({ message }) => {
  return (
    <div>

      <div>
        <h1>{message}</h1>
      <Buttons name="버튼" />

        <p>[End]</p>
      </div>

    </div>
  );
};


export default Print;


// export default function Print() {


//   return (
//     <div>
//       <Buttons name="dddd" />
//     </div>
//   );

// }
