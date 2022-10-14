import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Setting.scss";

const Setting = () => {
  return (
    <div className="setting">
      <div className="setting_flex">
        <div className="swetting_flex_1">
          <img
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            alt=""
          />
        </div>
        <div className="flex">
          <h3>username</h3>
          <h4>email</h4>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom_line">
        <Link to="/setting">AllBook</Link>
          <Link to="/saved">Saved Post</Link>
          <div className="top_line"></div>
          <div className="book">
            <div class="grid-container">
              <div className="grid">
                <img
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt=""
                />
                <p>status</p>
                <p>author</p>
                <p>Book category</p>
              </div>
              <div className="grid">
                <img
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt=""
                />
                <p>status</p>
                <p>author</p>
                <p>Book category</p>
              </div>
              <div className="grid">
                <img
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt=""
                />
                <p>status</p>
                <p>author</p>
                <p>Book category</p>
              </div>
              <div className="grid">
                <img
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt=""
                />
                <p>status</p>
                <p>author</p>
                <p>Book category</p>
              </div>
              <div className="grid">
                <img
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt=""
                />
                <p>status</p>
                <p>author</p>
                <p>Book category</p>
              </div>
              <div className="grid">
                <img
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt=""
                />
                <p>status</p>
                <p>author</p>
                <p>Book category</p>
              </div>
              <div className="grid">
                <img
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt=""
                />
                <p>status</p>
                <p>author</p>
                <p>Book category</p>
              </div>
              <div className="grid">
                <img
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt=""
                />
                <p>status</p>
                <p>author</p>
                <p>Book category</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
