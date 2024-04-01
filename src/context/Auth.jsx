"use client";

import React, { createContext, useState } from "react";

const initState = {
    isOpen: false,
    setIsOpen: () => { },
};

const AuthContext = createContext(initState);

const AuthProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                isOpen,
                setIsOpen,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
module.exports = { AuthContext, AuthProvider };