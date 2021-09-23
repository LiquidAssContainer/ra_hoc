import { useState } from 'react';

import { VideoContainer } from './components/VideoContainer/VideoContainer';
import { videoList } from './constants/videoList';

import './styles/app.css';

export const App = () => {
  const [list, setList] = useState(videoList);

  return <VideoContainer list={list} />;
};
