import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const videoLink = videoId ? `/video/${videoId}` : demoVideoUrl;
  const channelLink = snippet?.channelId
    ? `/channel/${snippet.channelId}`
    : demoChannelUrl;

  const thumbnailUrl = snippet?.thumbnails?.high?.url || demoThumbnailUrl;
  const videoTitle = snippet?.title || demoVideoTitle;
  const channelTitle = snippet?.channelTitle || demoChannelTitle;

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={videoLink}>
        <CardMedia
          image={thumbnailUrl}
          alt={videoTitle}
          sx={{
            width: {
              xs: '100%',
              sm: '358px',
              md: '320px',
            },
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoLink}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {videoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelLink}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
