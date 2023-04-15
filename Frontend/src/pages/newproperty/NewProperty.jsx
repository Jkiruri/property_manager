import "./newProperty.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewProperty = ({ inputs, title }) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Property</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://images.pexels.com/photos/3254018/pexels-photo-3254018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Location" />
              <input type="text" placeholder="Care Taker" />
              <input type="number" placeholder="Units" />

              <button>Save</button>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProperty;
