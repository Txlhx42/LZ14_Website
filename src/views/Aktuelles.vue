<template>
  <div class="aktuelles">
    <h1 class="page-title">Aktuelles</h1>

    <div class="content">
      <div v-if="loading" class="loading">
        <p>Lade Beiträge...</p>
      </div>

      <div v-else-if="blogPosts.length === 0" class="no-posts">
        <p>Aktuell sind keine Beiträge verfügbar.</p>
      </div>

      <div v-else class="blog-grid">
        <div
          v-for="post in blogPosts"
          :key="post.id"
          class="blog-card"
          @click="viewPost(post.id)"
        >
          <div class="blog-image" v-if="post.image">
            <img :src="post.image" :alt="post.title" />
          </div>
          <div class="blog-content">
            <h2 class="blog-title">{{ post.title }}</h2>
            <p class="blog-excerpt">{{ post.excerpt }}</p>
            <div class="blog-meta">
              <span class="blog-date">{{ formatDate(post.created_at) }}</span>
              <span class="blog-author" v-if="post.author"
                >von {{ post.author }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { blogService } from "../utils/supabase.js";

export default {
  name: "Aktuelles",
  data() {
    return {
      blogPosts: [],
      loading: true,
    };
  },
  mounted() {
    this.loadBlogPosts();
  },
  methods: {
    async loadBlogPosts() {
      try {
        this.blogPosts = await blogService.getAllPosts();
      } catch (error) {
        console.error("Error loading blog posts:", error);
        // Fallback - zeige leere Liste
        this.blogPosts = [];
      } finally {
        this.loading = false;
      }
    },
    viewPost(postId) {
      this.$router.push(`/aktuelles/${postId}`);
    },
    formatDate(dateString) {
      if (!dateString) return "Unbekanntes Datum";

      const date = new Date(dateString);

      // Prüfe ob das Datum gültig ist
      if (isNaN(date.getTime())) {
        return "Ungültiges Datum";
      }

      return date.toLocaleDateString("de-DE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>

<style scoped>
.aktuelles {
  padding: 2rem 0;
  margin-top: 82px;
  overflow-x: hidden;
}

.page-title {
  font-size: 3rem;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: bold;
  color: #000000;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.loading,
.no-posts {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #666;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.blog-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.blog-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-content {
  padding: 1.5rem;
}

.blog-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.blog-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #888;
}

.blog-date {
  font-weight: 500;
}

.blog-author {
  font-style: italic;
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .content {
    padding: 0 15px;
  }
}

@media (max-width: 600px) {
  .aktuelles {
    margin-top: 60px;
  }
}
</style>
