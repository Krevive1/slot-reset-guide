import { ReferenceVideo } from "@/lib/content/schema";

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
        <h4>当サイトの考察</h4>
        <p>{video.originalAnalysis}</p>
      </div>
    </div>
  );
}

export default function ReferenceVideoSection({ videos }: { videos: ReferenceVideo[] }) {
  if (videos.length === 0) return null;
  return (
    <section className="card reference-video" aria-labelledby="reference-video-heading">
      <h2 id="reference-video-heading">参考動画（出典明記）</h2>
      {videos.map((video) => (
        <ReferenceVideoCard key={video.youtubeVideoId} video={video} />
      ))}
    </section>
  );
}
