import { createContext, useState } from 'react';

export const PageContext = createContext();

const PageContextProvider = (props) => {
    const [currPage, setCurrPage] = useState(1);
    return (
        <PageContext.Provider value={{currPage, setCurrPage}}>
            {props.children}
        </PageContext.Provider>
    );

}
export default PageContextProvider;