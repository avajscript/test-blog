import styled from "styled-components";
import Article from "./Article";
import { nanoid } from "nanoid";
const ResultsCont = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SearchResults = (props) => {
  const articles = props.articles.map((article) => {
    return <Article article={article} key={nanoid()} />;
  });
  return <ResultsCont>{articles}</ResultsCont>;
};

export default SearchResults;