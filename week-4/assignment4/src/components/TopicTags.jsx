import React from "react";


const TopicTags = (props) => {
    const topicTags = props.topics.map((topic, index) => (
        <span className="tag tag-color" key={index}>{topic}</span>
    ));
    return (
      <div className="box-row">
        {topicTags}
      </div>
    );
  };


export default TopicTags;