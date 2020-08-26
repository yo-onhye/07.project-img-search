import React, { Component } from "react";
import axios from "axios";
import Masonry from 'react-masonry-component';
import "./App.css";

const masonryOptions = {
	transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class App extends Component {
	state = {
		loading: false,
		url: "https://www.flickr.com/services/rest/?",
		interest: "flickr.interestingness.getList",
		search: "flickr.photos.search",
		key: "b27343c07ef22647404873055e1a3b3e",
		per_page: 30,
		tagmode: "any",
		privacy_filter: 5,
		format: "json",
		nojsoncallback: 1,
		tag: "",
		datas: null,
	};

	getData = async () => {
		try {
			this.setState({
				loading: true,
			});

			let response = "";

			if (this.state.tag === "") {
				response = await axios.get(`${this.state.url}method=${this.state.interest}&api_key=${this.state.key}&per_page=${this.state.per_page}&tagmode=${this.state.tagmode}&privacy_filter=${this.state.privacy_filter}&format=${this.state.format}&nojsoncallback=${this.state.nojsoncallback}`);
			} else {
				response = await axios.get(`${this.state.url}method=${this.state.search}&api_key=${this.state.key}&per_page=${this.state.per_page}&tagmode=${this.state.tagmode}&privacy_filter=${this.state.privacy_filter}&format=${this.state.format}&nojsoncallback=${this.state.nojsoncallback}&tags=${this.state.tag}`);
			}

			this.setState({
				datas: response.data.photos,
			});
		} catch (e) {
			console.error(e);
		}
		this.setState({
			loading: false,
		});
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
		});
	};

	handleInsert = (e) => {
		e.preventDefault();

		this.setState({
			tag: "",
		});
		this.getData();
	};

	componentDidMount() {
		this.getData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.datas !== prevProps.datas) {
			this.getData();
		}
	}

	render() {
		const { datas, loading } = this.state;

		return (
			<div className='projectMain'>
				<header className='projcetLogo'>
					<h1 className='logo'>
						<span className="s1">I</span>
						<span className="s2">m</span>
						<span className="s3">g</span>
						<span className="s4">S</span>
						<span className="s5">e</span>
						<span className="s6">a</span>
						<span className="s7">r</span>
						<span className="s8">c</span>
						<span className="s8">h</span>
					</h1>
				</header>
				<section className='projectSearchBox'>
					<form onSubmit={this.handleInsert}>
						<input type='text' value={this.state.tag} name='tag' className='projectSearchInput' onChange={this.handleChange} placeholder='검색어 입력' title='검색어를 입력하세요' />
						<button type='submit' className='projectSearchBtn'>
							Search
						</button>
					</form>
				</section>
				<section className='projectContent'>
					{loading && (
						<div className='projcetLoader'>
							<span className='bar1'></span>
							<span className='bar2'></span>
							<span className='bar3'></span>
							<span className='bar4'></span>
							<span className='bar5'></span>
							<span className='bar6'></span>
							<p className="loadingText">Loading...</p>
						</div>
					)}
					<Masonry
						elementType={'ul'}
						className={'projectList'}
						options={masonryOptions}
						imagesLoadedOptions={imagesLoadedOptions}
					>
						{!loading &&
							datas &&
							datas.photo.map((data) => (
								<li key={data.id} className="item">
									<div>
										<a href={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`}>
											<img src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`} alt='' />
										</a>
										<p>{data.title}</p>
									</div>
								</li>
							))}
					</Masonry>
				</section>
			</div>
		);
	}
}

export default App;
