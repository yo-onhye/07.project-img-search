import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
	state = {
		loading: false,
		url: "https://www.flickr.com/services/rest/?",
		interest: "flickr.interestingness.getList",
		search: "flickr.photos.search",
		key: "b27343c07ef22647404873055e1a3b3e",
		per_page: 10,
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

			let response = '';

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
					<h1 className='logo'>Img Search</h1>
				</header>
				<section className='searchBox'>
					<form onSubmit={this.handleInsert}>
						<input type='text' value={this.state.tag} name='tag' id='search' onChange={this.handleChange} placeholder='검색어 입력' title='검색어를 입력하세요' />
						<button type='submit' className='searchBtn'>
							Search
						</button>
					</form>
				</section>
				<section className='content'>
					{loading && <h2 className='loadingTxt'>데이터 로딩 중 입니다:D</h2>}
					<ul id='list'>
						{!loading &&
							datas &&
							datas.photo.map((data) => (
								<li key={data.id}>
									<div>
										<a href={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`}>
											<img src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`} alt='' />
										</a>
										<p>{data.title}</p>
									</div>
								</li>
							))}
					</ul>
					<p className='alert'></p>
				</section>
			</div>
		);
	}
}

export default App;
