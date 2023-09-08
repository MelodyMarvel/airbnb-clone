// import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import PropTypes from 'prop-types'; // Import PropTypes


function SearchResult(props) {
    const { img,
        location,
        title,
        description,
        star,
        price,
        total} = props
  return (
    <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
SearchResult.propTypes = {
    img: PropTypes.string.isRequired, // Here, img is defined as a required string prop
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    star: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,

  };

export default SearchResult