import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class EditPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      title: '',
      published_at: '',
      show : {artist_name: ''},
      duration: '',
      enclosure_url: '',
      likes_count: '',
      description: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    const { image_url, title, published_at, duration, enclosure_url, likes_count, description} = this.props.data;
    const { artist_name } = this.props.data.show;
    this.setState({
      show : {artist_name},
      image_url,
      title,
      published_at,
      duration,
      enclosure_url,
      likes_count,
      description
    })
  }

  onInputChange(e, type) {
    if (type === 'show') {
      this.setState({
        show : {artist_name: e.target.value}
      })
    } else {
      this.setState({
        [type] : e.target.value
      })
    }
  }

  handleOnClick() {
    this.props.editEpisode({...this.state})
  }

  render() {
    return (
      <div>
        <h2>Edit Episode Details</h2>
        Image URL : <input onChange={(e) => this.onInputChange(e, 'image_url')} type="url" value={this.state.image_url}></input>
        Title : <input onChange={(e) => this.onInputChange(e, 'title')} value={this.state.title}></input>
        Publish Date and Time : <input onChange={(e) => this.onInputChange(e, 'published_at')} type="datetime-local" value={moment(new Date(this.state.published_at)).format('YYYY-MM-DDThh:mm')}></input>
        Artist Name : <input onChange={(e) => this.onInputChange(e, 'show')} value={this.state.show.artist_name}></input>
        Audio URL : <input onChange={(e) => this.onInputChange(e, 'enclosure_url')} value={this.state.enclosure_url}></input>
        Likes : <input onChange={(e) => this.onInputChange(e, 'likes_count')} type="url" value={this.state.likes_count}></input>
        Description : <textarea onChange={(e) => this.onInputChange(e, 'description')} value={this.state.description}></textarea>
        <Link to='/'>
          <button onClick={this.handleOnClick} className="submit">Edit</button>
        </Link>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}