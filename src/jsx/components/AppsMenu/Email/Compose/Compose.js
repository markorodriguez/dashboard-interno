import React, { Fragment } from "react";
//import { Link } from "react-router-dom";
import DropFile from "./DropFile";

import PageTitle from "../../../../layouts/PageTitle";
//import { Dropdown } from "react-bootstrap";

const Compose = () => {
  return (
    <Fragment>
      <PageTitle activeMenu="Compose" motherMenu="Email" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="email-left-box px-0 mb-3">        
                </div>
                <div className="compose-content">
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        placeholder=" To:"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        placeholder=" Subject:"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        id="email-compose-editor"
                        className="textarea_editor form-control bg-transparent"
                        rows="15"
                        placeholder="Enter text ..."
                      ></textarea>
                    </div>
                  </form>
                  <h5 className="mb-4">
                    <i className="fa fa-paperclip"></i> Attatchment
                  </h5>
                  <DropFile />
                </div>
                <div className="text-left mt-4 mb-5">
                  <button
                    className="btn btn-primary btn-sl-sm mr-2"
                    type="button"
                  >
                    <span className="mr-2">
                      <i className="fa fa-paper-plane"></i>
                    </span>
                    Send
                  </button>
                  <button
                    className="btn btn-danger light btn-sl-sm"
                    type="button"
                  >
                    <span className="mr-2">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                    Discard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </Fragment>
  );
};

export default Compose;
