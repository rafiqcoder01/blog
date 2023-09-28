import React from "react";
import { useLocation, useNavigate } from "react-router";
import chevronDown from "../../assets/icons/chevronDown.svg";
import time from "../../assets/images/time.svg";
import image1 from "../../assets/images/windmill.png";
import {
  useGetBlogsQuery,
  useGetCategoryBlogsQuery,
} from "../../redux/api/bogApi";
import styles from "./BlogMain.module.css";
import Post from "./Post/Post";
import SideCard from "./SideCard/SideCard";
import Spinner from "../Spinner/Spinner";
const BlogMain = () => {

  const [category,setCategory] = React.useState("All");
  const [data,setData] = React.useState([]);
  const { data: allData,error,isLoading } = useGetBlogsQuery("1");
  const {
    data: blogData,
    error: blogError,
    isLoading: blogIsLoading,
  } = useGetCategoryBlogsQuery(category);

  const location = useLocation();
  const navigate = useNavigate();
  

  React.useEffect(() => {
  
    if (category === "All") {
      setData(allData);
    } else {
      setData(blogData);
    }
  },[allData,blogData,category]);
  

  if (isLoading || blogIsLoading || !data) {
    return <Spinner />;
  }
  if (error || blogError) {
    console.log(error);
    return <div>Something went wrong</div>;
  }



console.log("data:", data);
  console.log("blogData:", allData);


  const GoToDetail = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div>
      <div className={`${styles.SecContainer} `}>
        <div className={`${styles.recentPostContainer} mainContainer`}>
          <div className={styles.articleSectionHeading}>
            <span>Recent posts</span>
          </div>
          <div className={styles.recentPost}>
            {allData?.blogs[0] ? (
              <div
                className={styles.topPost}
                onClick={() => GoToDetail(allData.blogs[0].id)}
              >
                <Post post={allData?.blogs[0]}></Post>
              </div>
            ) : (
              <div className={styles.noData}>No Data Found</div>
            )}

            <div className={styles.sideCardContainer}>
              {allData?.blogs[0] ? (
                allData?.blogs?.slice(1, 5)?.map((item, i) => {
                  return (
                    <div onClick={() => GoToDetail(item.id)} key={item.id}>
                      <SideCard
                        data={item}
                        onClick={() => GoToDetail(item.id)}
                      ></SideCard>
                    </div>
                  );
                })
              ) : (
                <div className={styles.noData}>No Data Found</div>
              )}
            </div>
          </div>
        </div>
        <hr className="hr" />
      </div>
      <div className={styles.relatedPostContainer}>
        <div className={`${styles.relatedPost} mainContainer`}>
          <div className={styles.articleSectionHeading}>
            <span>You may also like</span>
            <div>
              <span className={styles.categoriesHeading}>Categories :</span>
              <select
                className={styles.categories}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="All" selected>
                  {category !== "All" ? "All" : category}
                </option>
                <option value="Energy">Energy</option>
                <option value="Policy">Policy</option>
                <option value="Social-Governance">Social Governance</option>
                <option value="Sustainability">Sustainability</option>
                <option value="Investing">Sustainable Investing</option>

                <span className={styles.dropdownIcon}>
                  <img src={chevronDown} alt="" />
                </span>
              </select>
            </div>
          </div>
          <div className={styles.PostsSec}>
            {data?.no_of_blogs === 0 ? (
              <h1 className={styles.noData}>No Data Found</h1>
            ) : (
              data?.blogs?.map((item, i) => {
                return (
                  <div
                    className={styles.cardBorder}
                    key={item.id}
                    onClick={() => GoToDetail(item.id)}
                  >
                    <Post post={item}></Post>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default BlogMain;
