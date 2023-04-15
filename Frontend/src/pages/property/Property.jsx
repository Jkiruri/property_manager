import "./property.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PropertyData from "../../components/propertyData/propertyData";
import axios from "axios";
const Property = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <PropertyData />
      </div>
    </div>
  );
};

export default Property;
