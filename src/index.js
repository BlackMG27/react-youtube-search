import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const api_key = 'AIzaSyCPCKI-_VAx8q5XlEtxbgaav_iZ-jjWtsM';


//works like the $.ajax function in jquery or the fetch() in ES6

//create a component and component should produce HTML

 //const = constant as in never changes ES6 concept
 //arrow replaces the anonymous function

class App extends Component  {

	constructor(props) {
		super(props);

		this.state = {
			videos: [], 
			selectedVideo: null 
		};
		 this.videoSearch('jonathan young');
	}

	videoSearch(term){
		YTSearch({key: api_key, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		
		});
	}

	render(){
 	//makes the javascript much more readable
 	const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 600);
 	return ( 
 		<div>
 			<SearchBar onSeachTermChange = {videoSearch}/>
 			<VideoDetail video={this.state.selectedVideo}/>
 			<VideoList 
 			onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
 			videos={this.state.videos} />
 		</div>
 	);
 }
 }

//take the generated HTML and 
//put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));





