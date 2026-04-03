import Dashboard from "./pages/dashboard";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <div>
      <ThemeProvider>
        <UserProvider>
          <Header />
          <Dashboard />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}
export default App;