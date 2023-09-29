import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Link } from "react-router-dom";
function Veggie() {
  const [veggie, setVeggie] = useState([]);

  // we want to run the function as soon as possible by rendered useEffect
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&number=9`
        `https://api.spoonacular.com/recipes/random?apiKey=54b46838ed4d4b229fa21f1b8a23ff84&number=20&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      // in local stor=only saved strings
      // getting after pulling back u r parsing the string into the array
      // setting it and fetching the api
      setVeggie(data.recipes);

      // console.log(data);
    }
  };
  if (!veggie) {
    return null;
  }
  return (
    <div>
      <div>
        <Wrapper>
          <h3>Vegiterian pics</h3>
          <Splide
            options={{
              perPage: 4,
              arrows: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {veggie.map((recipe) => {
              // local storage

              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={"/recipe/" + recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
      </div>
    </div>
  );
}

const Card = styled.div`
  border-radius: 2rem;
  min-height: 25rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* margin: 1rem; */
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: aliceblue;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient((1, 0, 0, 0), rgba(0, 0, 0, 0));
`;
export default Veggie;
