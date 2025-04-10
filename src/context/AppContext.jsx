import { createContext, useState } from "react";

export const AppContext = createContext();

const users = [
    { id: 1, name: "Lucio" },
    { id: 2, name: "Juan" },
];

const allTasks = {
    1: ["Comprar leche", "Llamar al médico"],
    2: ["Pasear al perro", "Estudiar React", "Tomar curso de Python"],
};

export const AppProvider = ({ children }) => {
    const [currentUserId, setCurrentUserId] = useState(1);
    const currentUser = users.find((usr) => usr.id == currentUserId);
    const tasks = allTasks[currentUserId] || [];

    const datosCompartidos = {
        users,
        currentUserId,
        setCurrentUserId,
        currentUser,
        tasks,
    }
    return (
        <AppContext.Provider value= {datosCompartidos}>
            {children}
        </AppContext.Provider>
    );
}