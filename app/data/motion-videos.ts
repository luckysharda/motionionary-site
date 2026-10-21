export type MotionVideo = {
  id: string;
  title: string;
  duration: string;
  src: string;
  poster: string;
};

// Add future studio-supplied clips here; keep filenames and display order in sync.
const motionVideos: MotionVideo[] = [
  { id: 'motion-study-01', title: 'Motion Study 01', duration: '0:32', src: '/videos/motion-study-01.mp4', poster: '/videos/motion-study-01.jpg' },
  { id: 'motion-study-02', title: 'Motion Study 02', duration: '0:40', src: '/videos/motion-study-02.mp4', poster: '/videos/motion-study-02.jpg' },
  { id: 'motion-study-03', title: 'Motion Study 03', duration: '0:14', src: '/videos/motion-study-03.mp4', poster: '/videos/motion-study-03.jpg' },
  { id: 'motion-study-04', title: 'Motion Study 04', duration: '5:06', src: '/videos/motion-study-04.mp4', poster: '/videos/motion-study-04.jpg' },
  { id: 'motion-study-05', title: 'Motion Study 05', duration: '0:19', src: '/videos/motion-study-05.mp4', poster: '/videos/motion-study-05.jpg' },
  { id: 'motion-study-06', title: 'Motion Study 06', duration: '0:11', src: '/videos/motion-study-06.mp4', poster: '/videos/motion-study-06.jpg' },
  { id: 'motion-study-07', title: 'Motion Study 07', duration: '0:15', src: '/videos/motion-study-07.mp4', poster: '/videos/motion-study-07.jpg' },
];

export default motionVideos;
