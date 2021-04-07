import React from "react";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import ProfileDetails from "./ProfileDetails";
import Gallery from "./Gallery";
import ToDo from "./ToDo";
import Posts from "./Posts";
function TableDetail(props) {
  //console.log(props)

  return (
    <div>
      {/* <h1>{props.location.customNameData}</h1>
        <h2>{props.location.customNameData1}</h2> */}

      <div class="row">
        <div class="col-4">
          <div id="digu" className="card">
            <img
              class="rounded-circle z-depth-2 "
              alt="100x100"
              src={props.location.customNameData2}
              width="400"
              height="300"
              data-holder-rendered="true"
            />
            <p>
              <strong>{props.location.customNameData}</strong>
            </p>
            <h6>
              username:-<strong>{props.location.customNameData3}</strong>
            </h6>
            <br></br>
            <h6>
              email:-<strong>{props.location.customNameData4}</strong>
            </h6>
            <br></br>
            <h6>
              phone:-<strong>{props.location.customNameData5}</strong>
            </h6>
            <br></br>
            <h6>
              website:-<strong>{props.location.customNameData6}</strong>
            </h6>
            <hr></hr>

            <p>Company</p>
            <h6>
              Name:-<strong>{props.location.customNameData7}</strong>
            </h6>
            <h6>
              catchPhrase:-<strong>{props.location.customNameData6}</strong>
            </h6>
            <h6>
              bs:-<strong>{props.location.customNameData6}</strong>
            </h6>
          </div>
        </div>

        <div class="vl"></div>

        <div class="col-8">
          <p>Address</p>
          <h6>Street</h6>
        </div>
      </div>
    </div>
  );
}

export default TableDetail;
