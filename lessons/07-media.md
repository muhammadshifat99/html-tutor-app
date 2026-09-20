# Lesson 7 — Media: Audio & Video

Duration: 60 minutes
Level: Intermediate

## Learning objectives
- Embed audio and video using `<audio>` and `<video>`.
- Provide accessible captions, transcripts, and controls.
- Use `<track>` for captions and subtitles and explain `kind="captions"` vs `kind="subtitles"`.
- Provide fallback content and downloadable media alternatives.
- Use responsive techniques and `poster`/`preload`/`autoplay` considerations.

## Materials
- Sample media files in `media/` folder (mp3, mp4, webm)
- Editor & browser with devtools (and caption testing tools)

## Outline
1. Quick recap (5 min)
   - Media enhances content but needs accessibility: captions and transcripts.

2. Basic audio (10 min)
   - Example:
     ```html
     <audio controls>
       <source src="media/song.mp3" type="audio/mpeg">
       Your browser does not support the audio element.
     </audio>
     ```
   - Provide fallback message or link to downloadable file.

3. Basic video and captions (20 min)
   - Example:
     ```html
     <video controls width="640" poster="media/poster.jpg">
       <source src="media/video.mp4" type="video/mp4">
       <track kind="captions" srclang="en" src="media/video-en.vtt" label="English">
       Your browser does not support the video element.
     </video>
     ```
   - Explain WebVTT format briefly and show a simple caption file example.
   - `kind` values: `subtitles`, `captions`, `descriptions`, `chapters`, `metadata`.

4. Accessibility & best practices (15 min)
   - Always provide captions for videos (especially spoken content).
   - Provide a transcript for audio-only content.
   - Avoid autoplay; if used, ensure it's muted and consider `prefers-reduced-motion`.
   - Use `controls` so users can play/pause/seek.

5. Responsive media (5 min)
   - Use CSS to make video scale: `max-width:100%;height:auto;`.

6. Hands-on exercise (homework)
   - Add a short video with captions and a transcript file in the lesson folder.
   - Ensure the video has `controls` and a `poster` image.

## Teacher notes
- Explain legal/accessibility reasons for captions and transcripts.
- Encourage using free captioning tools or manual WebVTT creation for exercises.

---

Next: Lesson 8 — DOM & HTML APIs (I'll prepare examples and interactive activities).