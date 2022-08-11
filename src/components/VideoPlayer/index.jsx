import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const SRC =
  'https://v16-webapp.tiktok.com/af6be2e8e3559cb671366196a5c757b3/62f4b172/video/tos/useast2a/tos-useast2a-ve-0068c003/55e236935fd9487f919ceb92ecc9a7f6/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1334&bt=667&btag=80000&cs=0&ds=3&ft=gKSYZ84uo0PD1rLl8sg9wkPE75LiaQ2D~ca&mime_type=video_mp4&qs=0&rc=ZjM1OWQ3ZmlkOTc0NWk4O0Bpam1lZDQ6ZnZ2ZTMzNzczM0AxMzU2MGM1Ni4xLzIuLS5eYSMuNF80cjRnc21gLS1kMTZzcw%3D%3D&l=20220811013513010217134208240A753A';

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const video =  useRef()
  const handlePlay = () => {
    if(playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  );
}
