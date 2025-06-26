<template>
  <div class="blog-post">
    <div v-if="loading" class="loading">
      <p>Lade Beitrag...</p>
    </div>

    <div v-else-if="!post" class="not-found">
      <h1>Beitrag nicht gefunden</h1>
      <p>Der gesuchte Beitrag existiert nicht oder wurde gelöscht.</p>
      <router-link to="/aktuelles" class="back-link"
        >Zurück zu Aktuelles</router-link
      >
    </div>

    <div v-else class="content">
      <div class="post-header">
        <router-link to="/aktuelles" class="back-button">
          ← Zurück zu Aktuelles
        </router-link>

        <h1 class="post-title">{{ post.title }}</h1>

        <div class="post-meta">
          <span class="post-date">{{ formatDate(post.createdAt) }}</span>
          <span class="post-author" v-if="post.author"
            >von {{ post.author }}</span
          >
        </div>
      </div>

      <div class="post-image" v-if="post.image">
        <img :src="post.image" :alt="post.title" />
      </div>

      <div class="post-content" v-html="sanitizedContent(post.content)"></div>

      <div class="post-footer">
        <router-link to="/aktuelles" class="back-link">
          ← Zurück zu allen Beiträgen
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import DOMPurify from "dompurify";
import { blogService } from "../utils/supabase.js";

export default {
  name: "BlogPost",
  data() {
    return {
      post: null,
      loading: true,
    };
  },
  mounted() {
    this.loadPost();
  },
  watch: {
    $route(to, from) {
      if (to.params.id !== from.params.id) {
        this.loadPost();
      }
    },
  },
  methods: {
    async loadPost() {
      const postId = this.$route.params.id;

      try {
        this.post = await blogService.getPost(postId);
      } catch (error) {
        console.error("Error loading blog post:", error);
        this.post = null;
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("de-DE", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    sanitizedContent(content) {
      return DOMPurify.sanitize(content);
    },
  },
};
</script>

<style scoped>
.blog-post {
  padding: 2rem 0;
  margin-top: 82px;
  overflow-x: hidden;
}

.loading,
.not-found {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #666;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.post-header {
  margin-bottom: 2rem;
}

.back-button {
  display: inline-block;
  color: #cc0000;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 1rem;
  transition: color 0.2s ease;
}

.back-button:hover {
  color: #990000;
  text-decoration: underline;
}

.post-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.post-date {
  font-weight: 500;
}

.post-author {
  font-style: italic;
}

.post-image {
  width: 100%;
  max-width: 400px;
  margin: 0 auto 2rem auto;
  overflow: visible;
  border-radius: 8px;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 3rem;
}

.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
  color: #000000;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.post-content h1 {
  font-size: 2rem;
}
.post-content h2 {
  font-size: 1.8rem;
}
.post-content h3 {
  font-size: 1.6rem;
}
.post-content h4 {
  font-size: 1.4rem;
}
.post-content h5 {
  font-size: 1.2rem;
}
.post-content h6 {
  font-size: 1.1rem;
}

.post-content p {
  margin-bottom: 1.5rem;
}

.post-content ul,
.post-content ol {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.post-content li {
  margin-bottom: 0.5rem;
}

.post-content blockquote {
  border-left: 4px solid #cc0000;
  padding-left: 1rem;
  margin: 2rem 0;
  font-style: italic;
  color: #666;
}

.post-content a {
  color: #cc0000;
  text-decoration: none;
}

.post-content a:hover {
  text-decoration: underline;
}

.post-footer {
  border-top: 1px solid #eee;
  padding-top: 2rem;
  text-align: center;
}

.back-link {
  display: inline-block;
  color: #cc0000;
  text-decoration: none;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  border: 2px solid #cc0000;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.back-link:hover {
  background-color: #cc0000;
  color: white;
}

.post-content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1.5rem auto;
}

@media (max-width: 768px) {
  .post-title {
    font-size: 2rem;
  }

  .content {
    padding: 0 15px;
  }

  .post-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 600px) {
  .blog-post {
    margin-top: 60px;
  }

  .post-title {
    font-size: 1.8rem;
  }
}
</style>
