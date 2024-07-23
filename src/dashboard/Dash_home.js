import '../App.css';
import App_navbar from '../nav-bar/Nav-bar';
import Sidebar from '../side-bar/Sidebar';
import Content from '../content-container/Content';
import Footer from '../Footer/Footer';
import EditModal from '../edit-modal/EditModal';


function Dashboard() {
  return (
    <>
    <App_navbar />
    <div className="main-layout">
        <Content />
        <Sidebar />
    </div>
    <Footer />
    <EditModal />
    </>
  );
}

export default Dashboard;
