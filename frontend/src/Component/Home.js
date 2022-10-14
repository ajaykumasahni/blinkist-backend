import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.scss";
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Home = () => {
  const { loading, book } = useSelector((state) => state);

  const handleSave = () => {

  }
  return (
    <div className="home">
      <div className="flex">
        <div className="img_logo">
          <img
            src="https://media.tenor.com/R_AvsiBDADsAAAAC/book-monster.gif"
            alt="book app"
          />
        </div>
        <div className="flex_1">
          <li>
            <Link className="link" to="/all">
              Books
            </Link>
          </li>
          <li>
            <Link className="link" to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="link" to="/setting">
              Profile
            </Link>
          </li>
        </div>
      </div>

      <div>search</div>

      {/* to view book */}

      <div className="list">
        <div className="grid">
          <div className="grid-container">
            <div className="grid_row">
            <Link to="/single/:id">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png"
                alt=""
              />
              <h4>Name</h4>
              <p>Category</p>
              <h5>status</h5>
            </Link>
            <div>
              <BookmarkIcon onClick={handleSave}/>
            </div>
            </div>
          </div>

          <div className="grid-container">
            <div className="grid_row">
            <Link to="/single/:id">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png"
                alt=""
              />
              <h4>Name</h4>
              <p>Category</p>
              <h5>status</h5>
            </Link>
            <div>
              <BookmarkIcon onClick={handleSave}/>
            </div>
            </div>
            
          </div>

          <div className="grid-container">
            <div className="grid_row">
            <Link to="/single/:id">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png"
                alt=""
              />
              <h4>Name</h4>
              <p>Category</p>
              <h5>status</h5>
            </Link>
            <div>
              <BookmarkIcon onClick={handleSave}/>
            </div>
            </div>
          </div>

          <div className="grid-container">
            <div className="grid_row">
            <Link to="/single/:id">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png"
                alt=""
              />
              <h4>Name</h4>
              <p>Category</p>
              <h5>status</h5>
            </Link>
            <div>
              <BookmarkIcon onClick={handleSave}/>
            </div>
            </div>
          </div>

          <div className="grid-container">
            <div className="grid_row">
            <Link to="/single/:id">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png"
                alt=""
              />
              <h4>Name</h4>
              <p>Category</p>
              <h5>status</h5>
            </Link>
            <div>
              <BookmarkIcon onClick={handleSave}/>
            </div>
            </div>
           
          </div>

          <div className="grid-container">
            <div className="grid_row">
            <Link to="/single/:id">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png"
                alt=""
              />
              <h4>Name</h4>
              <p>Category</p>
              <h5>status</h5>
            </Link>
            <div>
              <BookmarkIcon onClick={handleSave}/>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* to view book */}
    </div>
  );
};

export default Home;
