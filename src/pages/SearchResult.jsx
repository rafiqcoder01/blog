import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Search } from "../components/index";
import { useGetBlogSearchQuery } from "../redux/api/bogApi";
import Spinner from "../components/Spinner/Spinner";

const SearchResult = () => {
  const [searchData, setSearchData] = React.useState("string");

  const { data, error, isLoading } = useGetBlogSearchQuery(searchData);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const myParam = params.get("search");

  console.log("myParam:", myParam);
  useEffect(() => {
    setSearchData(myParam);
  }, [myParam]);

  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return <Search data={data.blogs} />;
};

export default SearchResult;
