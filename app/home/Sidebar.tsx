import { FaTachometerAlt, FaCube, FaPlus, FaCog } from 'react-icons/fa';

interface SidebarOption {
  icon: JSX.Element;
  label: string;
}

const SidebarOptions: SidebarOption[] = [
  { icon: <FaTachometerAlt />, label: 'Dashboard' },
  { icon: <FaCube />, label: 'Productos' },
  { icon: <FaPlus />, label: 'Más' },
  { icon: <FaCog />, label: 'Ajustes' }
];
// /logo-creceidea.svg
const Sidebar: React.FC = () => {
    return (
      <div className="relative h-screen bg-cyan-700 text-white w-64 p-5 space-y-4 m-4 rounded-xl shadow-lg opacity-70 overflow-y-auto">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2 mb-10 ">
          <img src="/logo-creceidea.svg" alt="logo" className=" h-40 w-40" />
        </div>
  
        {/* Menu Items */}
        <nav className="space-y-1 pt-10">
          {SidebarOptions.map((option, index) => (
            <a href="#" key={index} className="flex items-center py-2 px-3 rounded-md hover:bg-cyan-900 transition duration-150">
              <div className="text-lg">{option.icon}</div>
              <span className="ml-3">{option.label}</span>
            </a>
          ))}
        </nav>
      </div>
    );
  };

export default Sidebar;