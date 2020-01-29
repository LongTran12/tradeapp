import React from "react";

export default ({ number, bg, title, icon }) => {
  return (
    <div className={bg + "-bg mat-card"}>
      <button
        _ngcontent-wga-c52=""
        className="inline-block gene-fab-flat-icon mat-mini-fab mat-button-base mat-accent"
        mat-card-icon=""
        mat-mini-fab=""
      >
        <span className="mat-button-wrapper">
          <span
            _ngcontent-wga-c52=""
            className="mat-icon notranslate material-icons mat-icon-no-color"
            role="img"
            aria-hidden="true"
          >
            new_releases
          </span>
        </span>
        <div
          className="mat-button-ripple mat-ripple mat-button-ripple-round"
          matripple=""
        ></div>
        <div className="mat-button-focus-overlay"></div>
      </button>
      <div className="inline-block vertical-align-mid pad-wrap">
        <h5 className="mrgn-b-none">{title}</h5>
        <h5>{number}</h5>
      </div>
    </div>
  );
};
