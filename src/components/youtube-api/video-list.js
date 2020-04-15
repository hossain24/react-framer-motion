import React, { Component } from 'react';
/* import YouTube from 'react-youtube'; */
import { Button, Card, Row, Col } from "react-bootstrap";
import './video-list.css';

/* const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
        autoplay: 0
    }
}; */

class VideoList extends Component {

    constructor() {
        super();

        this.state = { videos: [] };
    }

    componentWillMount() {
        fetch('https://portfolio-backend24.herokuapp.com/youtube-videos')
            .then(res => res.json())
            .then(videos => this.setState({ videos: videos }, () => {
                console.log('The list of videos is fetched ', videos);
            }))
    }

    render() {
        return (
            <div className="Video">
                <div className="Video-content">
                    <h2>Videos</h2>
                    <p>These videos are displayed from an YouTube API.</p>
                    <Row>
                        {this.state.videos.map(video =>
                            <Col sm={4} key={video.id}>
                                <Card.Img variant="top" src={video.snippet.thumbnails.default.url} />
                                <Card.Body>
                                    <Card.Title>{video.snippet.title} </Card.Title>
                                    <Button href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                                        variant="dark">Play Video</Button>
                                    {/* <YouTube
                                            videoId={video.snippet.resourceId.videoId}
                                            opts={opts}
                                            onReady={this._onReady}
                                        /> */}
                                </Card.Body>
                            </Col>
                        )}
                    </Row>

                    {/*<ul>
                        {this.state.videos.map(video =>
                            <li key={video.id}>
                                <div className="row">
                                    <div className="col-sm-4"></div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{video.snippet.title}}</h5>
                                            <YouTube
                                                videoId={video.snippet.resourceId.videoId}
                                                opts={opts}
                                                onReady={this._onReady}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul> */}
                </div>
            </div >

        );
    }
}

export default VideoList;