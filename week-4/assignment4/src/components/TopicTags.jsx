import React from "react";


const TopicTags = (props) => {
    const topicTags = props.topics.map((topic, index) => (
      <div className="tag tag-color">
        <span key={index}>{topic}</span>
        <br />
      </div>
    ));
    return (
      <>
        {topicTags}
      </>
    );
  };


export default TopicTags;