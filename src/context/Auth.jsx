"use client";

import React, { createContext, useState } from "react";

const initState = {
    isOpen: false,
    setIsOpen: () => { },
    setIsAdmin: () => { },
    isAdmin: false,
    setIsLogin: () => { },
    isLogin: false,
};

const AuthContext = createContext(initState);

const AuthProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    return (
        <AuthContext.Provider
            value={{
                isOpen,
                setIsOpen,
                isAdmin,
                setIsAdmin,
                isLogin,
                setIsLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
module.exports = { AuthContext, AuthProvider };