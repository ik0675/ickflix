import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const ImgContainer = styled.div``;

const Image = styled.div``;

const Rating = styled.span``;

const Year = styled.span``;

const Title = styled.span``;

const Poster = ({ id, title, rating, year, isMovie = false, imgUrl }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImgContainer>
        <Image bgUrl={imgUrl}>
          <Rating>
            <span role="img" aria-label="Rating">
              ⭐️
            </span>
            {rating}/10
          </Rating>
        </Image>
      </ImgContainer>
      <Title>{title}</Title>
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
