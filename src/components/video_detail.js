import React from 'react';

const VideoDetail = ({video}) => {

 	if(!video){
 		return <div>Loading...</div>;
 	}

//grabs the video id from the video object (use console.log(video) to check)
const videoId = video.id.videoId;
//use backwards tick to inject videoId into the url string
const embedURL = `https://www.youtube.com/embed/${videoId}`;


	return(
			<div className = "video-detail col-md-7">
				<div className = "embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={embedURL}></iframe>
				</div>
				<div className = "details">
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>

				</div>
			</div>
		);

};

export default VideoDetail;