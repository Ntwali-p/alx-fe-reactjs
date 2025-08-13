import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <>
            <Header />
            <WelcomeMessage />
            <MainContent />

            {/* Example User Profiles */}
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <UserProfile name="Bob" age="30" bio="Enjoys cooking and traveling" />

            <Footer />
        </>
    );
}

export default App;

