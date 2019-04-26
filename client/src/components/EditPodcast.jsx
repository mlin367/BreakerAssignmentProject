import React from 'react';

export default class EditPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      title: '',
      published_at: '',
      duration: '',
      enclosure_url: '',
      likes_count: '',
      description: ''
    }
  }

  componentDidMount() {
    const { image_url, title, published_at, duration, enclosure_url, likes_count, description} = this.props.data;
    this.setState({
      image_url,
      title,
      published_at,
      duration,
      enclosure_url,
      likes_count,
      description
    })
  }

  render() {
    return (
      <div>
        <h2>Edit Episode Details</h2>
        Image URL : <input type="url" value={this.state.image_url}></input>
        Title : <input value={this.state.title}></input>
        Publish Date : <input type="date"></input>
        Publish Time : <input type="time"></input>
        Audio URL : <input value={this.state.enclosure_url}></input>
        Likes : <input type="url" value={this.state.likes_count}></input>
        Description : <textarea value={this.state.description}></textarea>
      </div>
    )
  }
}