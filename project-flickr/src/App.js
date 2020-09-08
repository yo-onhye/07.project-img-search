import React, { Component } from "react";
import axios from "axios";
import Masonry from "react-masonry-component";
import "./App.css";

const masonryOptions = {
	transitionDuration: 0,
};

const imagesLoadedOptions = { background: ".item" };

class App extends Component {
	state = {
		url: "https://www.flickr.com/services/rest/?",
		interest: "flickr.interestingness.getList",
		search: "flickr.photos.search",
		key: "b27343c07ef22647404873055e1a3b3e",
		per_page: 100,
		tagmode: "any",
		privacy_filter: 10,
		format: "json",
		nojsoncallback: 1,
		tag: "",
		limit: 10,
		datas: null,
		showData: null,
		isShowMore: true,
		isSearchOpen: false,
		loading: false,
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
				datas: response.data.photos.photo,
			});
		} catch (e) {
			console.error(e);
		}
		this.setState({
			loading: false,
			limit: 10,
		});
		this.handleSortList();
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
		});
	};

	handleInsert = (e) => {
		e.preventDefault();

		if (!this.state.isSearchOpen) {
			this.setState({
				isSearchOpen: true,
			});
		} else if (this.state.isSearchOpen && this.state.tag !== "") {
			this.setState({
				isSearchOpen: false,
				tag: "",
			});
			this.getData();
		}
	};

	handleSortList = () => {
		if (this.state.datas !== null) {
			this.setState({
				showData: this.state.datas.slice(0, this.state.limit),
			});
		}
	};

	handleShowMore = () => {
		const { limit, datas, per_page } = this.state;

		if (limit >= per_page - 10) {
			this.setState({
				isShowMore: false,
			});
		} else {
			this.setState({
				limit: limit + 10,
				showData: datas.slice(0, limit + 10),
			});
		}
	};

	renderButton = () => {
		if (!this.state.isShowMore) return null;
		return (
			<button type='button' className='ProjectBtnMore' onClick={this.handleShowMore}>
				<span>더보기</span>
			</button>
		);
	};

	letterJS = (selector) => {
		const wrap = document.querySelector(selector);
		let str = wrap.innerText;
		wrap.innerText = "";
		let index = 0;

		for (let i of str) {
			let newSpan = document.createElement("span");
			newSpan.classList.add("s" + index);
			newSpan.innerText = i;
			newSpan.style.animationDelay = 0.1 * index + "s";
			wrap.appendChild(newSpan);
			index++;
		}
	}

	componentDidMount() {
		this.getData();
		this.letterJS('.logo');
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.showData !== prevProps.showData) {
			this.handleSortList();
			this.setState({
				showData: this.statedatas.slice(0, this.state.limit + 10),
			});
		}
	}

	render() {
		const { datas, showData, loading, isSearchOpen } = this.state;

		return (
			<div className='projectMain'>
				<header className='projcetLogo'>
					<h1 className='logo'>ImgSearch</h1>
				</header>
				<section className={`projectSearchBox ${isSearchOpen && "active"}`}>
					<form className='projectSearch' onSubmit={this.handleInsert}>
						<input type='text' value={this.state.tag} name='tag' className='projectSearchInput' onChange={this.handleChange} placeholder='검색어 입력' title='검색어를 입력하세요' />
						<button type='submit' className='projectSearchBtn'>
							<i className='icoSearch'></i>
							<span className='blind'>검색하기</span>
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
							<p className='loadingText'>Loading...</p>
						</div>
					)}
					{!loading && datas !== null && (
						<Masonry elementType={"ul"} className={"projectList"} options={masonryOptions} imagesLoadedOptions={imagesLoadedOptions}>
							{showData !== null &&
								showData.map((data) => (
									<li key={data.id} className='item'>
										<div>
											<a href={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`}>
												<img src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`} alt='' />
											</a>
											<p>{data.title}</p>
										</div>
									</li>
								))}
						</Masonry>
					)}
					{this.renderButton()}
				</section>
			</div>
		);
	}
}

export default App;
