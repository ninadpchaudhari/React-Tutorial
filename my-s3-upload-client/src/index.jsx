import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { MyAdditionForm } from './MyAdditionForm';
import { MyS3UploadComponent } from "./MyS3UploadComponent.jsx";
//Import your custom css using
//import './index.css';

//IMPORTANT : Component should start with Upper case
class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello,
              <small className="text-muted">With faded secondary world!</small>
                </h1>
                <div className="container">
                    <MyS3UploadComponent/>
                </div>
            </div>



        );
    }
}
//Tell ReactDOM to find the div with id=root 
//and place the MyFirstComponent there.
ReactDOM.render(<MyFirstComponent />, document.getElementById("root"));