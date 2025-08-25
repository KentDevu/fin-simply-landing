import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navigation/navbar';
import HeroSection from './components/landing/hero-section';
import TeamSection from './components/team/team-section';
import AboutSection from './components/about/about-section';
import MissionVisionSection from './components/mission-vision/mission-vision-section';
import CustomersSection from './components/customers/customers-section';
import ContactsSection from './components/contacts/contacts-section';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection />
          <TeamSection />
          <AboutSection />
          <MissionVisionSection />
          <CustomersSection />
          <ContactsSection />
        </main>
      </div>
    </Router>
  );
}

export default App;
