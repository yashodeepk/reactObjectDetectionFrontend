import React, { useState } from "react";
import axios from "axios";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function MyApp() {
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <div>
      <DateRangePicker
        onChange={onChange}
        value={value}
      />
      <button onClick={(e) => {
        console.log(value);
        // axios({
        //   // Endpoint to send files
        //   url: "http://localhost:8080/files",
        //   method: "POST",
        //   // Attaching the form data
        //   data: {
        //   },
        // })
        //   .then((res) => { }) // Handle the response from backend here
        //   .catch((err) => { });
      }}>
        DOWNLOAD
      </button>
    </div>
  );
}

class App extends React.Component {
  state = {
    files: null,
  };

  handleFile(e) {
    // Getting the files from the input
    let files = e.target.files;
    this.setState({ files });
  }
  
  handleUpload(e) {
    let files = this.state.files;
  
    let formData = new FormData();
  
    //Adding files to the formdata
    formData.append("image", files);
    formData.append("name", "Name");
  
    axios({
      // Endpoint to send files
      url: "http://localhost:8080/files",
      method: "POST",
      // Attaching the form data
      data: formData,
    })
      .then((res) => { }) // Handle the response from backend here
      .catch((err) => { }); // Catch errors if any
  }
  
  render() {
    return (
      <div>
        <h1>Select your files</h1>
        <input
          type="file"
          multiple="multiple"  //To select multiple files
          onChange={(e) => this.handleFile(e)}
        />
        <button onClick={(e) => this.handleUpload(e)}
        >Send Files</button>
        {/* <img></img> */}
        <br/>
        <br/>
        <h1>
          Download CSV
        </h1>
        <div>
          <MyApp />
        </div>
      </div>
    );
  }
}
  
export default App;