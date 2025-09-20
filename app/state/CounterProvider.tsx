import React from "react";

// 1. Crear el contexto con los valores por defecto
export const AppContext = React.createContext({
    value: 0,
    increment: () => { },
    decrement: () => { },
    reset: () => { }
});


// 2. Crear el proveedor del contexto
export const CounterProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = React.useState(0);

    const increment = () => {
        setValue(value + 1);
    }
    const decrement = () => {
        setValue(value - 1);
    }
    const reset = () => {
        setValue(0);
    }
    return (
        <AppContext.Provider value={{ value, increment, decrement, reset }}>
            {children}
        </AppContext.Provider>
    );
}

export default CounterProvider;