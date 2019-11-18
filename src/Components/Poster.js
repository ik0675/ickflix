import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props =>
    `https://image.tmdb.org/t/p/w300${props.bgUrl}`});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImgContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Poster = ({ id, title, rating, year, isMovie = false, imgUrl }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImgContainer>
        <Image bgUrl={imgUrl}>
          <Rating>
            <span role="img" aria-label="Rating">
              ⭐️
            </span>{" "}
            {rating}/10
          </Rating>
        </Image>
      </ImgContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  isMovie: PropTypes.bool,
  year: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Poster;
