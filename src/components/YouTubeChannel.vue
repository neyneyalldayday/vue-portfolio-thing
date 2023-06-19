<template>
  <div>
    <h1>{{ channelTitle }}</h1>
    <ul>
      <li
        v-for="video in videoList"
        :key="video.videoId"
        @click="playVideo(video.videoId)"
      >
      <span class="video-title">{{ video.title }}</span>
        <img :src="video.thumbnailUrl" :alt="video.title" />
      </li>
    </ul>
    <h2>{{ videoTitle }}</h2>
    <div v-html="embeddedPlayer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channelTitle: "",
      videoList: [],
      videoId: "WuOd9R5w7Gk",
      videoTitle: "",
      embeddedPlayer: "",
    };
  },
  mounted() {
    this.fetchChannelData();
    this.fetchPlaylistData();
    this.fetchVideoDetails();
  },
  methods: {
    fetchChannelData(){
        const apiKey = "AIzaSyCEt2LxHTzV7M9JEVkZZfiFnpWfNvBHXRI";
        const channelId = 'UCaHYzfP3a-uNic29DerEiLw'
        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`


        fetch(channelUrl)
            .then(res => res.json())
            .then(data => {
                
                const channelDetails = data.items[0].snippet
                console.log(channelDetails, "get the title")
                this.channelTitle = channelDetails.title
            })
    },

    fetchVideoDetails() {
      const apiKey = "AIzaSyCEt2LxHTzV7M9JEVkZZfiFnpWfNvBHXRI";
      const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.videoId}&key=${apiKey}`;

      fetch(videoUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "video shit");
          if (data.items.length > 0) {
            const videoDetails = data.items[0].snippet;
            this.videoTitle = videoDetails.title;

            this.embeddedPlayer = this.generateEmbeddedPlayer(this.videoId);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    generateEmbeddedPlayer(videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;

      const playerVars = {
        autoplay: 1,
        controls: 1,
        modestbranding: 1,
      };

      const params = new URLSearchParams(playerVars).toString();
      const embedSrc = `${embedUrl}?${params}`;

      return `<iframe width="560"  height="315" src="${embedSrc}" frameborder="0" allowfullscreen></iframe>`;
    },

    fetchPlaylistData() {
      const apiKey = "AIzaSyCEt2LxHTzV7M9JEVkZZfiFnpWfNvBHXRI";
      const playlistUrl =
        "https://www.youtube.com/watch?v=0iMpaerb-9c&list=PLrN49NSQJLP8L-p9IZe6wbVg3tNAFr-v9";
      const playlistId = this.extractPlaylistId(playlistUrl);
      const maxResults = 10; // Set the maximum number of results you want to retrieve

      const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`;
      // const channelId = 'UCaHYzfP3a-uNic29DerEiLw';

      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const videos = data.items.map((item) => {
            const video = item.snippet;
            return {
              videoId: video.resourceId?.videoId || "",
              title: video.title || "",
              thumbnailUrl: video.thumbnails.high.url || "",
            };
          });
          this.videoList = videos;
        })
        .catch((error) => {
          console.error("Error fetching channel data:", error);
        });
    },
    extractPlaylistId(url) {
      const regex = /[?&]list=([^&]+)/;
      const match = url.match(regex);
      return match ? match[1] : "";
    },
    playVideo(videoId) {
      this.videoId = videoId;
      this.fetchVideoDetails();
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  margin: 0.5rem;
  cursor: pointer;
}

img {
  width: 200px;
  height: auto;
}

.video-title {
    display: block;
    text-align: center;
    margin-bottom: 5px;
  }
</style>
