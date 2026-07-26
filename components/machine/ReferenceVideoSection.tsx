import { ReferenceVideo } from "@/lib/content/schema";
import { hasReferenceVideos, TOC_IDS } from "@/lib/content/toc";

function ReferenceVideoCard({ video }: { video: ReferenceVideo }) {
  return (
    <div className="video-card">
      <div className="video-embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeVideoId}`}
          title={video.title}
          loading="lazy"
          allowFullScreen
        />
      </div>
      {/* Attribution is always rendered — schema requires channelName/channelUrl,
          so a video entry cannot exist without this line. */}
      <p className="video-attribution">
        参考動画：
        <a href={video.channelUrl} target="_blank" rel="noopener noreferrer nofollow">
          {video.channelName}
        </a>
        様
      </p>
      <h3>{video.title}</h3>
      <p>{video.summary}</p>
      <div className="original-analysis">
        <h4>🐶 ワンちゃんの考察</h4>
        <p>{video.originalAnalysis}</p>
      </div>
    </div>
  );
}

export default function ReferenceVideoSection({ videos }: { videos: ReferenceVideo[] }) {
  if (!hasReferenceVideos(videos)) return null;
  return (
    <section id={TOC_IDS.videos} className="card reference-video" aria-labelledby="reference-video-heading">
      <h2 id="reference-video-heading">参考動画</h2>
      <p className="section-note">出典を明記した上で引用しています。</p>
      {videos.map((video) => (
        <ReferenceVideoCard key={video.youtubeVideoId} video={video} />
      ))}
    </section>
  );
}
