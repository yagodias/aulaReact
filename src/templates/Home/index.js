// import { Component, useState } from "react";

// import "./styles.css";

// import { Posts } from "../../components/Posts";
// import { loadPosts } from "../../utils/load-posts";
// import { Button } from "../../components/Button";
// import { TextInput } from "../../components/TextInput";

// export const Home = () => {
//   // state = {
//   //   posts: [],
//   //   allPosts: [],
//   //   page: 0,
//   //   postsPerPage: 2,
//   //   searchValue: "",
//   // };

//   const [posts, setPosts] = useState([]);
//   const [allPosts, setAllPosts] = useState([]);
//   const [page, setPage] = useState([0]);
//   const [postsPerPage, setPostsPerPage] = useState([10]);
//   const [searchValue, setSearchValue] = useState([]);

//   const noMorePosts = page + postsPerPage >= allPosts.length;

//   return (
//     <section className="container">
//       <div className="searchContainer">
//         {!!searchValue && <h1>Search value: {searchValue}</h1>}

//         <TextInput searchValue={searchValue} handleChange={this.handleChange} />
//       </div>

//       {/* {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

//       {filteredPosts.length === 0 && <p>Não existem posts</p>} */}

//       <div class="buttonContainer">
//         {!searchValue && (
//           <Button
//             text="Load More posts"
//             onClick={this.loadMorePosts}
//             disabled={noMorePosts}
//           />
//         )}
//       </div>
//     </section>
//   );
// };

// export class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 2,
//     searchValue: "",
//   };

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;
//     const postsAndPhotos = await loadPosts();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   };

//   loadMorePosts = () => {
//     const { page, postsPerPage, allPosts, posts } = this.state;
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage });
//   };

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//   };

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !!searchValue
//       ? allPosts.filter((post) => {
//           return post.title.toLowerCase().includes(searchValue.toLowerCase());
//         })
//       : posts;

//     return (
//       <section className="container">
//         <div className="searchContainer">
//           {!!searchValue && <h1>Search value: {searchValue}</h1>}

//           <TextInput
//             searchValue={searchValue}
//             handleChange={this.handleChange}
//           />
//         </div>

//         {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

//         {filteredPosts.length === 0 && <p>Não existem posts</p>}

//         <div class="buttonContainer">
//           {!searchValue && (
//             <Button
//               text="Load More posts"
//               onClick={this.loadMorePosts}
//               disabled={noMorePosts}
//             />
//           )}
//         </div>
//       </section>
//     );
//   }
// }

export const Home = () => {
  return <div>Hello world</div>;
};
