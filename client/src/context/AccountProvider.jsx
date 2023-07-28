
import { createContext, useState ,useEffect,useRef} from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {

    const [ account, setAccount ] = useState();  
    const [newMessageFlag,setNewMessageFlag]=useState(false);
    const [person , setPerson]=useState({});
    const [activeUsers, setActiveUsers] = useState([]);

    const socket = useRef();

    useEffect(() => {
        socket.current = io();
    }, [])

  return (
    <AccountContext.Provider value={{ 
        account, 
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlag       
    }}>
        {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider
