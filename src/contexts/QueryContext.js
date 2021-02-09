import { createContext, useState } from 'react';

export const QueryContext = createContext();

const QueryContextProvider = (props) => {
    const [query, setQuery] = useState({
      q: '', 
      type: '',
      l: '',
      o: '',
      s: '',
    });
    console.log(query)
    return (
        <QueryContext.Provider value={{query, setQuery}}>
            {props.children}
        </QueryContext.Provider>
    );

}
export default QueryContextProvider;