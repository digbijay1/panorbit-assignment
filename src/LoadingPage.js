import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import { useHistory } from "react-router-dom";
import TableDetail from "./TableDetail";

function LoadingPage() {
     let history = useHistory();
  const [fetchUserName, setFetchUserName] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let dataUrl = "https://panorbit.in/api/users.json";
    axios
      .get(dataUrl)
      .then((response) => {
        console.log(response.data.users[0]);
        setFetchUserName(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      });
  }, []);

  function clicked(val){
      //console.log(id)
//  alert(JSON.stringify(val))
 console.log(typeof(val))
     history.push({
       pathname: "/tableDetail",
       customNameData: val.name,
       customNameData1: val.email,
       customNameData2: val.profilepicture,
       customNameData3: val.username,
       customNameData4: val.email,
       customNameData5: val.phone,
       customNameData6: val.website,
       customNameData7:val.company.name,
       customNameData8:val.company.catchPhrase,
       customNameData9:val.company.bs
     });
     
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Select an account</h5>
          <div className="digu">
            <table className="table table-dark">
              <tbody>
                {!loading ? (
                  <tr></tr>
                ) : (
                  fetchUserName.users.map((val, id) => {
                    return (
                      <tr onClick={()=>clicked(val)} key={id}>
                          
                        <td>
                          <img
                            src={val.profilepicture}
                            alt="BigCo Inc. logo"
                            width="50"
                            height="50"
                          />
                        </td>
                        <td>{val.name}</td>
                      </tr>
                    );
                  })
               
                )}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
