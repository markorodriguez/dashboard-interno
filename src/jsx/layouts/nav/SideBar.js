import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

///
// import icon1 from "../../../images/icon1.png";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    //  this.mm("dispose");
    // console.log(this.mm);
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");

    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }

    btn.addEventListener("click", toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector(".heart");

    function heartBlast() {
      //return handleheartBlast.classList.toggle("heart-blast");
    }

    //handleheartBlast.addEventListener("click", heartBlast);
  }
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    /// Active menu
    let deshBoard = [
      "",
      "doctors",
      "doctors-review",
      "patient-details",
      "doctors-details",
    ],
      app = [
        "app-profile",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "post-details",
        "ecom-product-detail",
      ],
      email = ["email-compose", "email-inbox", "email-read"],
      shop = [
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "ecom-product-detail",
      ],
      charts = [
        "chart-rechart",
        "chart-flot",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-apexchart",
      ],
      bootstrap = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        "ui-media-object",
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      plugins = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-noui-slider",
        "map-jqvmap",
      ],
      widget = ["widget-basic"],
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "form-validation-jquery",
      ],
      table = ["table-bootstrap-basic", "table-datatable-basic"],
      pages = [
        "page-register",
        "page-login",
        "page-lock-screen",
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ],
      error = [
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
              <ul aria-expanded="false">
                <li>
                  <Link className={`${path === "" ? "mm-active" : ""}`} to="/">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "doctors" ? "mm-active" : ""}`}
                    to="/citas"
                  >
                    Citas
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "doctors-details" ? "mm-active" : ""
                      }`}
                    to="/resultados"
                  >
                    Pacientes
                  </Link>
                </li>

              </ul>
            </li>

            <li className={`${app.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Reportes</span>
              </Link>
              <ul aria-expanded="false">
                <li>
                  <Link className={`${path === "app-profile" ? "mm-active" : ""}`} to="/citas-mes">
                    Citas
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "app-calender" ? "mm-active" : ""}`}
                    to="/ganancias-mes"
                  >
                    Ganancias
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "doctors-details" ? "mm-active" : ""
                      }`}
                    to="/resultados-generales"
                  >
                    Pacientes
                  </Link>
                </li>

              </ul>
            </li>

            


          </MM>

        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
