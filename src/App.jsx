import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

// Define the admin object
const admin = {
    name: "Admin User",
    email: "admin@wase.com",
};

const App = () => {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const authData = useContext(AuthContext);

    // Check localStorage for logged-in user on page load
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (loggedInUser && loggedInUser.role) {
            console.log("User is already logged in");
            setUser(loggedInUser.role);
            setLoggedInUserData(loggedInUser.data || null); // Set user data if available
        }
    }, []);

    // Handle login logic
    const handleLogin = (email, password) => {
        if (email === "admin@wase.com" && password === "123") {
            setUser("admin");
            setLoggedInUserData(admin); // Use the defined admin object
            localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: admin }));
        } else if (authData) {
            const employee = authData.employees.find(
                (e) => e.email === email && e.password === password
            );
            if (employee) {
                setUser("employee");
                setLoggedInUserData(employee);
                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify({ role: "employee", data: employee })
                );
            } else {
                alert("Invalid login credentials");
            }
        } else {
            alert("Invalid login credentials");
        }
    };

    // Handle logout logic
    const handleLogout = () => {
        localStorage.removeItem("loggedInUser"); // Clear logged-in user data
        setUser(null); // Reset user state
        setLoggedInUserData(null); // Reset logged-in user data
    };

    return (
        <>
            {!user ? (
                <Login handleLogin={handleLogin} />
            ) : user === "admin" ? (
                <AdminDashboard
                    data={loggedInUserData}
                    handleLogout={handleLogout}
                    setLoggedInUserData={setLoggedInUserData} // Pass the setter
                />
            ) : user === "employee" ? (
                <EmployeeDashboard
                    data={loggedInUserData}
                    handleLogout={handleLogout}
                    setLoggedInUserData={setLoggedInUserData} // Pass the setter
                />
            ) : null}
        </>
    );
};

export default App;