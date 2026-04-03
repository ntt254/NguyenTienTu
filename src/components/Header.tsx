import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button, Avatar } from "antd";

const Navbar = () => {
    const context = useContext(UserContext);

    if (!context) return null;

    const { user, setUser } = context;

    const handleLogin = () => {
        setUser({
            name: "Nguyễn Tiến Tú",
            avatar: "https://i.pravatar.cc/150?img=3"
        });
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
            <h2>My App</h2>

            {user ? (
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Avatar src={user.avatar} />
                    <span>{user.name}</span>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            ) : (
                <Button onClick={handleLogin}>Login</Button>
            )}
        </div>
    );
};

export default Navbar;