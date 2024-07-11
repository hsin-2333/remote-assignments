import React, { useState, useEffect } from "react";
import TopicTags from "./TopicTags";

const Visibility = (props) => (
  <div className="tag">
    <span>{props.visibility}</span>
  </div>
);

const List = () => {
  // const repo = [
  //   {
  //     id: 455600,
  //     node_id: "MDEwOlJlcG9zaXRvcnk0NTU2MDA=",
  //     name: "hhvm",
  //     description: "A virtual machine for executing programs written in Hack.",
  //     visibility: "public",
  //     topics: ["hhvm"],
  //   },
  //   {
  //     id: 455610,
  //     node_id: "MDEwOlJlcG9zaXRvcnk0NTU2MDA2=",
  //     name: "meta",
  //     description: "Python wrapper for RE2",
  //     visibility: "public",
  //     topics: ["hack", "hacklang", "hhvm", "php"],
  //   },
  // ];
  const [repoData, setRepoData] = useState([]);
  const [askCount, setAskCount] = useState(1);

  // setAskCount(askCount => askCount + 1);

  useEffect(() => {
    fetch(
      `https://api.github.com/orgs/facebook/repos?per_page=5&page=${askCount}`
    )
      .then((response) => {
        return response.json();
      })
      // .then((repoData) => setRepoData(repoData))
      .then((prevData) => setRepoData([...repoData, ...prevData]))
      .catch((error) => console.error(error));
  }, [askCount]);

  const repoList =
    repoData.length > 0
      ? repoData.map((item) => (
          <li className="listContainer" key={item.id}>
            <div className="box box-row">
              <span className="title">{item.name}</span>
              <Visibility visibility={item.visibility} />
            </div>
            <div className="box">
              <span>{item.description}</span>
              <TopicTags topics={item.topics} />
            </div>
          </li>
        ))
      : null;

  return (
    <div className="apiContent">
      <span>{repoList}</span>
      <div className="loadMore">
        <button className="loadBtn" onClick={() => setAskCount((askCount) => askCount + 1)}>
          More
        </button>
      </div>
    </div>
  );
};

export default List;
