
import {useContext} from 'react'
import { UserContext } from '../store/user-context';

function Board() {

    const value = useContext(UserContext);
    return (  
      <div className="Board">
        <h2>Board!가 있지. 내 이름은...</h2>
        <h1>{value}</h1>
      </div>
    );
  }

  export default Board;