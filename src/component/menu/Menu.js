import React, { useState } from "react";
import styled from "styled-components";

import { FaAlignJustify, FaCcVisa } from "react-icons/fa";
import img1 from "../../assets/images/pro-thumb.jpg";
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar-area mat-drawer mat-sidenav ng-tns-c3-0 ng-trigger ng-trigger-transform mat-drawer-side mat-drawer-opened ng-star-inserted">
      <div className="mat-drawer-inner-container">
        <div className="sidebar-panel gene-sidenav">
          <div className="ps">
            <div className="ps-content">
              <div className="sidebar-container">
                <Wrap>
                  {/* <IconMenu onClick={() => setOpen(!open)}>
                                        <FaAlignJustify />
                                    </IconMenu> */}
                  <div className="gene-user-thumb text-center">
                    <img
                      alt="user list image"
                      className="img-responsive img-circle"
                      height="107"
                      src={img1}
                      width="107"
                    />
                    <div className="gene-user-name">John Hobbs</div>
                  </div>
                  <div className="sidenav-scrollbar-container">
                    <div className="navigation mat-nav-list mat-list-base ng-star-inserted">
                      {/* <div className="mat-list-item ng-star-inserted">
                        <div className="mat-list-item-content">
                          <div
                            className="mat-list-item-ripple mat-ripple"
                            mat-ripple=""
                          ></div>
                          <div className="mat-list-text"></div>
                          <a
                            _ngcontent-sso-c4=""
                            className="gene-relative ng-star-inserted"
                            mat-ripple=""
                            menutoggle=""
                            routerlinkactive="active-link"
                            href="/horizontal/dashboard/crm"
                          >
                            <div
                              _ngcontent-sso-c4=""
                              className="mat-icon notranslate material-icons mat-icon-no-color"
                              role="img"
                              aria-hidden="true"
                            >
                              horizontal_split
                            </div>
                            <span _ngcontent-sso-c4="">Top Menu</span>
                            <span
                              _ngcontent-sso-c4=""
                              className="sidebar-label ng-star-inserted"
                            >
                              New
                            </span>
                          </a>
                          <span _ngcontent-sso-c4=""></span>
                        </div>
                      </div> */}
                      {/* <div className="mat-list-item ng-star-inserted">
                        <div className="mat-list-item-content">
                          <div
                            className="mat-list-item-ripple mat-ripple"
                            mat-ripple=""
                          ></div>
                          <div className="mat-list-text"></div>
                          <a
                            className="gene-relative ng-star-inserted"
                            mat-ripple=""
                            menutoggle=""
                            routerlinkactive="active-link"
                            href="/horizontal/dashboard/crm"
                          >
                            <div
                              className="mat-icon notranslate material-icons mat-icon-no-color"
                              role="img"
                              aria-hidden="true"
                            >
                              horizontal_split
                            </div>
                            <span>Top Menu</span>
                            <span className="sidebar-label ng-star-inserted">
                              New
                            </span>
                          </a>
                          <span></span>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  {/* {
                                       
                                        <div>
                                            <Tabbar>
                                                <Ul>
                                                    <Li>
                                                        <FaAlignJustify />
                                                        <span style={{ marginRight: 8 }} ></span>
                                                        <div>Crypto</div>
                                                    </Li>
                                                    <Li>
                                                        <FaCcVisa />
                                                        <span style={{ marginRight: 8 }} ></span>
                                                        <div>Bitcon Daily</div>
                                                    </Li>
                                                </Ul>
                                            </Tabbar>
                                          
                                        </div>
                                    } */}
                </Wrap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
const Ul = styled.ul`
  padding-top: 7em;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 20px 25px;

  :hover {
    opacity: 0.8;
    background: #0c0f2c;
  }
`;

const Wrap = styled.div`
  height: 100vh;
`;
const Tabbar = styled.div`
  /* position:fixed;
    width:256px;
    height:100vh;
    background:#18206f;
    top:0;
    left:0;
    z-index:1199;
    transition: all .7s ease; */
`;
const IconMenu = styled.div`
  svg {
    fill: #fff;
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1280px) {
    left: 30px;
  }
`;
