import React from 'react';
import VideoListItem from './video_list_item';

const VideoList  = (props) => {



	const VideoItems = props.videos.map((video) => {
		return <VideoListItem 
					//takes the props that was passed in app on index and taking down to video_list
					onVideoSelect = {props.onVideoSelect}
					//calls on the id from the video object
					key={video.etag} 
					video={video} 
				/>
	});

	return (
		<ul className = "col-md-5 list-group">
			{VideoItems}
		</ul>
  );
};

export default VideoList;