import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const getSearched = async (name) => {
    const check = localStorage.getItem("searchedRecipe");
    if (check) {
      setSearchedRecipe(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=54b46838ed4d4b229fa21f1b8a23ff84&query=chocolate&number=20`
      );
      const data = await api.json();
      localStorage.setItem("searchedRecipe", JSON.stringify(data));
      // console.log(recipes.results);
      setSearchedRecipe(data.recipes);
    }
  };

  return (
    <Grid>
      {searchedRecipe.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
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
export default Searched;
