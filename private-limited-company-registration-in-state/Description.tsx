import Link from "next/link";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}
export interface DescriptionProps {
  state?: string;
  content: { para1: string; para2: string; para3: string } ;
}
const Description: React.FC<DescriptionProps> = ({ state, content }: DescriptionProps) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);
      }

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    };
    const initializePlayer = () => {
      if (!iframeRef.current) return;
      const newPlayer = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event:any) => event.target.pauseVideo(),
          onStateChange: (event:any) => handleStateChange(event),
        },
      });
      setPlayer(newPlayer);
    };
    const handleStateChange = (event:any) => {
      if (event.data === window.YT.PlayerState.ENDED) {
        setIsPlaying(false); // Show play icon after video ends
      }
    };
    loadYouTubeAPI();
  }, []);
  const togglePlay = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="description-component">
      <div className="description-container">
        <div className="description-left">
          <h2 className="description-heading">Watch How We Register Companies in Record Time! </h2>
          <p>
            {content?.para1}
          </p>
          <p>
           {content?.para2}
          </p>
          <p>
           {content?.para3}
          </p>
          <div className="description-button-container">
            <Link href="/contact-us" className="">
              Talk to Experts
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
        <div className="video-container">
          <div className="video-wrapper">
            {/* <div className="video-overlay" onClick={togglePlay}>
              {isPlaying ? (
                <Pause size={32} color="white" />
              ) : (
                <Play size={32} color="white" />
              )}
            </div> */}
            <iframe
              height="300"
              width="450"
              src="https://www.youtube.com/embed/_HU7i5peA24?enablejsapi=1&controls=0&rel=0"
              title="YouTube video player"
              allow=" autoplay; encrypted-media;  picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Description;
