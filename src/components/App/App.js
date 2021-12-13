import React, { Component } from "react";
import "./App.css";
import fetchImages from '../../services/api';
import Searchbar from "../Searchbar/Searchbar";
import Modal from "../Modal/Modal";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

class App extends Component {

  state = {
    gallery: [],
    search: '',
    page: 1,
    isModalOpen: false,
    largeImage: '',
    total: 0,
    loading: false,
    error: null
  };

  fetchGallery = () => {
    const { search, page } = this.state;
    // console.log(search);
    this.setState({ loading: true });

    fetchImages(search, page)
      .then(({ hits, total }) => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
          total,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };


  componentDidMount() {
      this.setState({loading: true});
      this.fetchGallery();
  }

 
  componentDidUpdate(prevProps, prevState) {
    const prevSearchItem = prevState.search;
    const nextSearchItem = this.state.search;
    if (prevSearchItem !== nextSearchItem) {
      this.fetchGallery();
    }
  }
  
  handleSubmit = (searchItem) => {
    this.setState({ search: searchItem, gallery: [], page: 1 });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  handleOpenPicture = largeIMG => {
    console.log(largeIMG);
    this.setState({ largeImage: largeIMG });
    this.toggleModal();
  };

  render() {
    const { isModalOpen, gallery, largeImage, loading } = this.state;
   return (
      <div>
<Searchbar onSubmit={this.handleSubmit} />
{loading && <Loader />}
{gallery.length > 0 && <ImageGallery gallery={gallery} openImg={this.handleOpenPicture} />}
<Button onClick={this.fetchGallery} />
{isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={largeImage} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
