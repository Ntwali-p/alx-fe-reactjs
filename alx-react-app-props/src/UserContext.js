import { createContext } from 'react';

// Initialize with default value
const UserContext = createContext({
  name: '',
  email: ''
});

// Export the context
export default UserContext;