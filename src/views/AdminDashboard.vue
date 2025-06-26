<template>
  <div class="admin-dashboard">
    <div class="admin-header">
      <h1>Admin Dashboard</h1>
      <p>Verwalte Blog-Beiträge für die Aktuelles-Seite</p>
    </div>

    <div class="admin-content">
      <div class="sidebar-stack">
        <div class="admin-sidebar">
          <div class="sidebar-section">
            <h3>Beiträge verwalten</h3>
            <button @click="showCreateForm = true" class="btn btn-primary">
              + Neuen Beitrag erstellen
            </button>
          </div>
          <div class="sidebar-section">
            <h3>Vorhandene Beiträge</h3>
            <div v-if="blogPosts.length === 0" class="no-posts">
              <p>Noch keine Beiträge vorhanden</p>
            </div>
            <div v-else class="posts-list">
              <div
                v-for="post in blogPosts"
                :key="post.id"
                class="post-item"
                :class="{ active: selectedPost && selectedPost.id === post.id }"
                @click="selectPost(post)"
              >
                <h4>{{ post.title }}</h4>
                <p class="post-date">{{ formatDate(post.createdAt) }}</p>
                <div class="post-actions">
                  <button @click.stop="editPost(post)" class="btn btn-small">
                    Bearbeiten
                  </button>
                  <button
                    @click.stop="deletePost(post.id)"
                    class="btn btn-small btn-danger"
                  >
                    Löschen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar-logout-area">
          <button @click="logout" class="btn btn-secondary logout-btn">
            Abmelden
          </button>
        </div>
      </div>
      <div class="admin-main">
        <div v-if="!showCreateForm && !selectedPost" class="welcome-message">
          <h2>Willkommen im Admin-Bereich</h2>
          <p>
            Wähle einen vorhandenen Beitrag aus oder erstelle einen neuen
            Beitrag.
          </p>
        </div>

        <!-- Formular für neuen Beitrag -->
        <div v-if="showCreateForm" class="form-container">
          <h2>Neuen Beitrag erstellen</h2>
          <form @submit.prevent="createPost" class="blog-form">
            <div class="form-group">
              <label for="title">Titel *</label>
              <input
                id="title"
                v-model="newPost.title"
                type="text"
                required
                placeholder="Titel des Beitrags"
              />
            </div>

            <div class="form-group">
              <label for="excerpt">Kurzbeschreibung *</label>
              <textarea
                id="excerpt"
                v-model="newPost.excerpt"
                required
                placeholder="Kurze Beschreibung des Beitrags (wird in der Übersicht angezeigt)"
                rows="3"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="author">Autor</label>
              <input
                id="author"
                v-model="newPost.author"
                type="text"
                placeholder="Name des Autors"
              />
            </div>

            <div class="form-group">
              <label for="image">Bild-URL</label>
              <input
                id="image"
                v-model="newPost.image"
                type="url"
                placeholder="https://example.com/bild.jpg"
              />
            </div>

            <div class="form-group">
              <label for="content">Inhalt *</label>
              <div class="content-editor">
                <div class="editor-toolbar">
                  <button
                    type="button"
                    @click="insertTag('h1')"
                    class="toolbar-btn"
                    title="Überschrift 1 (groß)"
                  >
                    <span class="btn-icon">H1</span>
                    <span class="btn-label">Überschrift 1</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('h2')"
                    class="toolbar-btn"
                    title="Überschrift 2 (mittel)"
                  >
                    <span class="btn-icon">H2</span>
                    <span class="btn-label">Überschrift 2</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('h3')"
                    class="toolbar-btn"
                    title="Überschrift 3 (klein)"
                  >
                    <span class="btn-icon">H3</span>
                    <span class="btn-label">Überschrift 3</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('p')"
                    class="toolbar-btn"
                    title="Absatz"
                  >
                    <span class="btn-icon">¶</span>
                    <span class="btn-label">Absatz</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('ul')"
                    class="toolbar-btn"
                    title="Aufzählungsliste"
                  >
                    <span class="btn-icon">•</span>
                    <span class="btn-label">Liste</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('ol')"
                    class="toolbar-btn"
                    title="Nummerierte Liste"
                  >
                    <span class="btn-icon">1.</span>
                    <span class="btn-label">Nummerierte Liste</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('li')"
                    class="toolbar-btn"
                    title="Listenpunkt"
                  >
                    <span class="btn-icon">-</span>
                    <span class="btn-label">Listenpunkt</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('strong')"
                    class="toolbar-btn"
                    title="Fettgedruckt"
                  >
                    <span class="btn-icon">B</span>
                    <span class="btn-label">Fett</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('em')"
                    class="toolbar-btn"
                    title="Kursiv"
                  >
                    <span class="btn-icon">I</span>
                    <span class="btn-label">Kursiv</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('a')"
                    class="toolbar-btn"
                    title="Link"
                  >
                    <span class="btn-icon">🔗</span>
                    <span class="btn-label">Link</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('img')"
                    class="toolbar-btn"
                    title="Bild"
                  >
                    <span class="btn-icon">🖼️</span>
                    <span class="btn-label">Bild</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('blockquote')"
                    class="toolbar-btn"
                    title="Zitat"
                  >
                    <span class="btn-icon">"</span>
                    <span class="btn-label">Zitat</span>
                  </button>
                </div>
                <textarea
                  id="content"
                  ref="contentTextarea"
                  v-model="newPost.content"
                  required
                  placeholder="Inhalt des Beitrags (HTML wird unterstützt)"
                  rows="15"
                  @paste="handlePaste('create', $event)"
                ></textarea>
              </div>
              <small class="form-help">
                Du kannst HTML-Tags verwenden oder die Toolbar-Buttons oben
                verwenden. Automatische Tag-Vervollständigung ist aktiviert.
              </small>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary">
                Beitrag erstellen
              </button>
              <button
                type="button"
                @click="cancelForm"
                class="btn btn-secondary"
              >
                Abbrechen
              </button>
            </div>
          </form>
        </div>

        <!-- Formular für Bearbeitung -->
        <div v-if="selectedPost && !showCreateForm" class="form-container">
          <h2>Beitrag bearbeiten</h2>
          <form @submit.prevent="updatePost" class="blog-form">
            <div class="form-group">
              <label for="edit-title">Titel *</label>
              <input
                id="edit-title"
                v-model="selectedPost.title"
                type="text"
                required
                placeholder="Titel des Beitrags"
              />
            </div>

            <div class="form-group">
              <label for="edit-excerpt">Kurzbeschreibung *</label>
              <textarea
                id="edit-excerpt"
                v-model="selectedPost.excerpt"
                required
                placeholder="Kurze Beschreibung des Beitrags"
                rows="3"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="edit-author">Autor</label>
              <input
                id="edit-author"
                v-model="selectedPost.author"
                type="text"
                placeholder="Name des Autors"
              />
            </div>

            <div class="form-group">
              <label for="edit-image">Bild-URL</label>
              <input
                id="edit-image"
                v-model="selectedPost.image"
                type="url"
                placeholder="https://example.com/bild.jpg"
              />
            </div>

            <div class="form-group">
              <label for="edit-content">Inhalt *</label>
              <div class="content-editor">
                <div class="editor-toolbar">
                  <button
                    type="button"
                    @click="insertTag('h1', 'edit')"
                    class="toolbar-btn"
                    title="Überschrift 1 (groß)"
                  >
                    <span class="btn-icon">H1</span>
                    <span class="btn-label">Überschrift 1</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('h2', 'edit')"
                    class="toolbar-btn"
                    title="Überschrift 2 (mittel)"
                  >
                    <span class="btn-icon">H2</span>
                    <span class="btn-label">Überschrift 2</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('h3', 'edit')"
                    class="toolbar-btn"
                    title="Überschrift 3 (klein)"
                  >
                    <span class="btn-icon">H3</span>
                    <span class="btn-label">Überschrift 3</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('p', 'edit')"
                    class="toolbar-btn"
                    title="Absatz"
                  >
                    <span class="btn-icon">¶</span>
                    <span class="btn-label">Absatz</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('ul', 'edit')"
                    class="toolbar-btn"
                    title="Aufzählungsliste"
                  >
                    <span class="btn-icon">•</span>
                    <span class="btn-label">Liste</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('ol', 'edit')"
                    class="toolbar-btn"
                    title="Nummerierte Liste"
                  >
                    <span class="btn-icon">1.</span>
                    <span class="btn-label">Nummerierte Liste</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('li', 'edit')"
                    class="toolbar-btn"
                    title="Listenpunkt"
                  >
                    <span class="btn-icon">-</span>
                    <span class="btn-label">Listenpunkt</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('strong', 'edit')"
                    class="toolbar-btn"
                    title="Fettgedruckt"
                  >
                    <span class="btn-icon">B</span>
                    <span class="btn-label">Fett</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('em', 'edit')"
                    class="toolbar-btn"
                    title="Kursiv"
                  >
                    <span class="btn-icon">I</span>
                    <span class="btn-label">Kursiv</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('a', 'edit')"
                    class="toolbar-btn"
                    title="Link"
                  >
                    <span class="btn-icon">🔗</span>
                    <span class="btn-label">Link</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('img', 'edit')"
                    class="toolbar-btn"
                    title="Bild"
                  >
                    <span class="btn-icon">🖼️</span>
                    <span class="btn-label">Bild</span>
                  </button>
                  <button
                    type="button"
                    @click="insertTag('blockquote', 'edit')"
                    class="toolbar-btn"
                    title="Zitat"
                  >
                    <span class="btn-icon">"</span>
                    <span class="btn-label">Zitat</span>
                  </button>
                </div>
                <textarea
                  id="edit-content"
                  ref="editContentTextarea"
                  v-model="selectedPost.content"
                  required
                  placeholder="Inhalt des Beitrags"
                  rows="15"
                  @paste="handlePaste('edit', $event)"
                ></textarea>
              </div>
              <small class="form-help">
                Du kannst HTML-Tags verwenden oder die Toolbar-Buttons oben
                verwenden. Automatische Tag-Vervollständigung ist aktiviert.
              </small>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary">
                Änderungen speichern
              </button>
              <button
                type="button"
                @click="cancelEdit"
                class="btn btn-secondary"
              >
                Abbrechen
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-if="showDeleteDialog" class="modal-overlay">
      <div class="modal-dialog">
        <h2>Beitrag löschen</h2>
        <p>Möchtest du diesen Beitrag wirklich löschen?</p>
        <div class="modal-actions">
          <button @click="confirmDelete" class="btn btn-primary">
            Löschen
          </button>
          <button @click="cancelDelete" class="btn btn-secondary">
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
  data() {
    return {
      blogPosts: [],
      selectedPost: null,
      showCreateForm: false,
      newPost: {
        title: "",
        excerpt: "",
        author: "",
        image: "",
        content: "",
      },
      // Tag-Vervollständigung
      supportedTags: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "ul",
        "ol",
        "li",
        "strong",
        "em",
        "a",
        "img",
        "blockquote",
        "div",
        "span",
      ],
      selfClosingTags: ["img", "br", "hr", "input"],
      showDeleteDialog: false,
      deletePostId: null,
    };
  },
  mounted() {
    this.checkAuthentication();
    this.loadBlogPosts();

    // Event-Listener für localStorage Änderungen
    window.addEventListener("storage", this.handleStorageChange);
  },
  beforeUnmount() {
    // Event-Listener entfernen
    window.removeEventListener("storage", this.handleStorageChange);
  },
  methods: {
    checkAuthentication() {
      const isAuthenticated =
        localStorage.getItem("adminAuthenticated") === "true";
      if (!isAuthenticated) {
        this.$router.push("/admin-login");
        return;
      }
    },
    loadBlogPosts() {
      const posts = localStorage.getItem("blogPosts");
      if (posts) {
        this.blogPosts = JSON.parse(posts).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }
    },
    selectPost(post) {
      this.selectedPost = { ...post };
      this.showCreateForm = false;
    },
    editPost(post) {
      this.selectedPost = { ...post };
      this.showCreateForm = false;
    },
    createPost() {
      const post = {
        id: Date.now().toString(),
        ...this.newPost,
        createdAt: new Date().toISOString(),
      };

      this.blogPosts.unshift(post);
      this.saveBlogPosts();
      this.resetForm();
      this.showCreateForm = false;
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
    updatePost() {
      const index = this.blogPosts.findIndex(
        (p) => p.id === this.selectedPost.id
      );
      if (index !== -1) {
        this.blogPosts[index] = { ...this.selectedPost };
        this.saveBlogPosts();
        this.selectedPost = null;
        this.$nextTick(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    },
    deletePost(postId) {
      this.showDeleteDialog = true;
      this.deletePostId = postId;
    },
    confirmDelete() {
      this.blogPosts = this.blogPosts.filter((p) => p.id !== this.deletePostId);
      this.saveBlogPosts();
      this.showDeleteDialog = false;
    },
    cancelDelete() {
      this.showDeleteDialog = false;
    },
    saveBlogPosts() {
      localStorage.setItem("blogPosts", JSON.stringify(this.blogPosts));
    },
    resetForm() {
      this.newPost = {
        title: "",
        excerpt: "",
        author: "",
        image: "",
        content: "",
      };
    },
    cancelForm() {
      this.showCreateForm = false;
      this.resetForm();
    },
    cancelEdit() {
      this.selectedPost = null;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("de-DE", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },

    // Tag-Vervollständigung Methoden
    insertTag(tagName, mode = "create") {
      const textarea =
        mode === "edit"
          ? this.$refs.editContentTextarea
          : this.$refs.contentTextarea;
      const content =
        mode === "edit" ? this.selectedPost.content : this.newPost.content;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = content.substring(start, end);
      let insertText = "";
      if (tagName === "a") {
        insertText = `<a href="">${selectedText || ""}</a>`;
      } else if (tagName === "li") {
        insertText = `<li>${selectedText || ""}</li>`;
      } else if (tagName === "ul" || tagName === "ol") {
        insertText = `<${tagName}>\n  <li></li>\n</${tagName}>`;
      } else if (tagName === "blockquote") {
        insertText = `<blockquote>${selectedText || ""}</blockquote>`;
      } else if (tagName === "img") {
        insertText = `<img src="" alt="${
          selectedText || "Bildbeschreibung"
        }" />`;
      } else if (
        ["p", "h1", "h2", "h3", "h4", "h5", "h6", "strong", "em"].includes(
          tagName
        )
      ) {
        insertText = `<${tagName}>${selectedText || ""}</${tagName}>`;
      } else {
        insertText = `<${tagName}>${selectedText || ""}</${tagName}>`;
      }
      const newContent =
        content.substring(0, start) + insertText + content.substring(end);
      if (mode === "edit") {
        this.selectedPost.content = newContent;
      } else {
        this.newPost.content = newContent;
      }
      this.$nextTick(() => {
        const newCursorPos = start + insertText.length;
        textarea.setSelectionRange(newCursorPos, newCursorPos);
        textarea.focus();
      });
    },

    handleStorageChange(event) {
      if (event.key === "adminAuthenticated" && event.newValue === "false") {
        this.$router.push("/admin-login");
      }
    },

    logout() {
      localStorage.removeItem("adminAuthenticated");
      this.$router.push("/admin-login");
    },

    handlePaste(mode, event) {
      const target =
        mode === "edit"
          ? this.$refs.editContentTextarea
          : this.$refs.contentTextarea;
      if (!target) return;
      const clipboardData = event.clipboardData || window.clipboardData;
      if (!clipboardData) return;
      const pastedText = clipboardData.getData("text");
      if (!pastedText) return;
      const value = target.value;
      const cursorPos = target.selectionStart;
      // Finde die nächste öffnende und schließende Anführungszeichen um den Cursor
      const before = value.lastIndexOf('"', cursorPos - 1);
      const after = value.indexOf('"', cursorPos);
      if (
        before !== -1 &&
        after !== -1 &&
        before < cursorPos &&
        cursorPos <= after
      ) {
        // Cursor ist innerhalb von "..."
        event.preventDefault();
        let insertValue = pastedText;
        // Wenn kompletter <img ...> oder <a ...> Tag eingefügt wird, extrahiere src/href
        const imgMatch = pastedText.match(/<img[^>]*src=["']([^"']+)["']/i);
        const aMatch = pastedText.match(/<a[^>]*href=["']([^"']+)["']/i);
        if (imgMatch) {
          insertValue = imgMatch[1];
        } else if (aMatch) {
          insertValue = aMatch[1];
        }
        const newValue =
          value.substring(0, before + 1) + insertValue + value.substring(after);
        if (mode === "edit") {
          this.selectedPost.content = newValue;
        } else {
          this.newPost.content = newValue;
        }
        this.$nextTick(() => {
          const newCursor = before + 1 + insertValue.length;
          target.setSelectionRange(newCursor, newCursor);
          target.focus();
        });
      }
      // Sonst: Standardverhalten (nichts tun)
    },
  },
};
</script>

<style scoped>
.admin-dashboard {
  padding: 2rem 0;
  margin-top: 82px;
  overflow-x: hidden;
}

.admin-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.admin-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0.5rem;
}

.admin-header p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
}

.admin-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.sidebar-stack {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}

.admin-sidebar {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content;
}

.sidebar-section {
  margin-bottom: 2rem;
}

.sidebar-section h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: #cc0000;
  color: white;
}

.btn-primary:hover {
  background-color: #990000;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-small {
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
}

.no-posts {
  text-align: center;
  color: #666;
  font-style: italic;
}

.posts-list {
  max-height: 400px;
  overflow-y: auto;
}

.post-item {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.post-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-item.active {
  border-color: #cc0000;
  background-color: #fff5f5;
}

.post-item h4 {
  font-size: 1rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.post-date {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.8rem;
}

.post-actions {
  display: flex;
  gap: 0.5rem;
}

.admin-main {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.welcome-message {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.welcome-message h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #000000;
}

.form-container h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 2rem;
}

.blog-form {
  max-width: 100%;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 500;
  color: #000000;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #cc0000;
}

.content-editor {
  border: 2px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}

.editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding: 0.5rem;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.toolbar-btn {
  padding: 0.4rem 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  min-width: 60px;
}

.toolbar-btn:hover {
  background: #cc0000;
  color: white;
  border-color: #cc0000;
}

.btn-icon {
  font-size: 1rem;
  font-weight: bold;
}

.btn-label {
  font-size: 0.7rem;
  font-weight: normal;
}

.content-editor textarea {
  border: none;
  border-radius: 0;
  resize: vertical;
}

.form-help {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.sidebar-logout-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0;
  margin-top: 2rem;
  width: 100%;
}

.logout-btn {
  width: 100%;
  max-width: 220px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .admin-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .sidebar-stack {
    width: 100%;
  }
  .sidebar-logout-area {
    width: 100%;
    margin-left: 0;
    margin-top: 1.5rem;
  }
  .logout-btn {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .admin-header h1 {
    font-size: 2rem;
  }

  .admin-content {
    padding: 0 15px;
  }

  .form-actions {
    flex-direction: column;
  }

  .post-actions {
    flex-direction: column;
  }

  .editor-toolbar {
    flex-direction: column;
  }

  .toolbar-btn {
    text-align: center;
  }
}

@media (max-width: 600px) {
  .admin-dashboard {
    margin-top: 60px;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-dialog {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
}

.modal-dialog h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 2rem;
}

.modal-dialog p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  background-color: #cc0000;
  color: white;
}

.btn-primary:hover {
  background-color: #990000;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
}
</style>
