import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let param = useParams();
  useEffect(() => {
    getCuisines(param.type);
    // console.log(param.type);
    // isko esae rehne dera taki future mai mujeko pta chle agr ...
  }, [param.type]);
  //   this will run only when the component mounts
  const getCuisines = async (name) => {
    const check = localStorage.getItem("cuisine");
    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=54b46838ed4d4b229fa21f1b8a23ff84&number=20&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("cuisine", JSON.stringify(data.recipes));
      // in local stor=only saved strings
      // getting after pulling back u r parsing the string into the array
      // setting it and fetching the api
      setCuisine(data.recipes);

      // console.log(data);
    }
    // const recipes = await data.json();
    // // console.log(recipes.results);
    // setCuisine(recipes.results);
  };

  return (
    <Grid
    // animate={{ opacity: 0 }}
    // initial={{ opacity: 0 }}
    // exit={{ opacity: 0 }}
    // transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="info" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine;
