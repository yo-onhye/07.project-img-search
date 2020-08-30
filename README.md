# 이미지 갤러리 UI 만들기🖼

## Description.

- [ES6 수업](https://github.com/yo-onhye/05.es6-study/tree/master/200815-es6-class)에서 배운 Flickr API를 이용하여 ES6 page를 react page로 만든다.
- **Masonry** 를 사용하기 위해 `yarn add react-mansonry-component`로 패키지를 설치
- fetch 대신 axios 사용

## Tech Stack.

React, Axios, Masonry, ES6, Css

## Process.

**08.24**

- Flickr API 연동
- 초기화면 진입 시 인기순 10개 이미지 호출

**08.25**

- 검색 기능 구현
- 검색 시 데이터 재호출 구현

**08.26**

- 로고 애니메이션 추가
- Masonry를 이용해 게시글 정렬 → ~~Isotope로 변경 예정~~
- 서칭 결과 react에서 갤러리 정렬 시 Masonry를 더 많이 쓰는 것 같음..

**08.29**

- Search Animation 추가

**08.30**

- 페이지 로딩 시 max 게시글 수 변경
- 페이지 로딩 시 보여지는 게시글 수 10개로 지정
- 더보기 버튼 클릭 시 10개씩 추가로 보여지도록 구현
- 검색어 입력 시 limit값 초기값으로 재지정
