import React from 'react';
import { Link } from 'react-router-dom';
import '../css/EditPodcast.css';

export default class EditPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      title: '',
      date: '',
      time: '',
      artist_name: '',
      likes_count: '',
      description: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnImageUpload = this.handleOnImageUpload.bind(this);
    this.imageURL = React.createRef();
  }

  componentDidMount() {
    const {
      artist_name,
      image_url,
      title,
      date,
      time,
      likes_count,
      description
    } = this.props.data;

    this.setState({
      artist_name,
      image_url,
      title,
      date,
      time,
      likes_count,
      description
    });
  }

  onInputChange(e, type) {
      this.setState({
        [type]: e.target.value
      });
  }

  handleOnClick(e) {
    if (!Number(this.state.likes_count)) {
      alert('likes must be a number!')
      e.preventDefault();
    } else {
      this.props.editEpisode({ ...this.state });
    }
  }

  handleOnImageUpload(e) {
    let image = URL.createObjectURL(e.target.files[0]);
    this.imageURL.current.value = image;
    this.setState({
      image_url: image
    })
  }

  render() {
    return (
      <div className="editPod">
        <h2>Edit Episode Details</h2>
        Image URL :
        <input type="file" onChange={this.handleOnImageUpload}/> or external link :
        <input
          ref={this.imageURL}
          onChange={e => this.onInputChange(e, 'image_url')}
          type="url"
          value={this.state.image_url}
        />
        Title :
        <input
          onChange={e => this.onInputChange(e, 'title')}
          value={this.state.title}
        />
        Publish Date :
        <input
          onChange={e => this.onInputChange(e, 'date')}
          type="date"
          value={this.state.date}
        />
        Publish Time :
        <input
          onChange={e => this.onInputChange(e, 'time')}
          type="time"
          value={this.state.time}
        />
        Artist Name :
        <input
          onChange={e => this.onInputChange(e, 'artist_name')}
          value={this.state.artist_name}
        />
        Likes :
        <input
          onChange={e => this.onInputChange(e, 'likes_count')}
          type="url"
          value={this.state.likes_count}
        />
        Description :
        <textarea
          onChange={e => this.onInputChange(e, 'description')}
          value={this.state.description}
          rows="4"
          cols="50"
        />
        <Link to="/">
          <button onClick={this.handleOnClick} className="submit">
            Edit
          </button>
        </Link>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}
