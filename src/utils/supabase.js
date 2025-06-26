import { createClient } from "@supabase/supabase-js";

// Sichere Umgebungsvariablen - API-Keys nicht im Code!
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validierung der Umgebungsvariablen
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase Umgebungsvariablen fehlen! Prüfen Sie VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY"
  );
}

// FALLBACK für Tests ohne Supabase
const DEMO_MODE = false; // Echtes Supabase Backend mit korrektem API-Key!

// Sichere Supabase Client Konfiguration
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // Verhindert Session-Hijacking über URL
    flowType: "pkce", // Sichere PKCE Flow
  },
  global: {
    headers: {
      "X-Client-Info": "lz14-website-secure",
    },
  },
});

// Blog Posts Funktionen
export const blogService = {
  // Alle Blog Posts laden
  async getAllPosts() {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  // Einzelnen Post laden
  async getPost(id) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  // Neuen Post erstellen
  async createPost(post) {
    const { data, error } = await supabase
      .from("blog_posts")
      .insert([
        {
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          author: post.author,
          image: post.image,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Post aktualisieren
  async updatePost(id, post) {
    const { data, error } = await supabase
      .from("blog_posts")
      .update({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        author: post.author,
        image: post.image,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Post löschen
  async deletePost(id) {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);

    if (error) throw error;
  },
};

// Authentifizierung Funktionen
export const authService = {
  // Admin Login
  async signIn(email, password) {
    if (DEMO_MODE) {
      // DEMO: Einfacher Login für Tests
      if (email === "admin@lz14.de" && password === "admin123") {
        localStorage.setItem("demoAuth", "true");
        return { user: { email: "admin@lz14.de" } };
      } else {
        throw new Error("Demo-Login: Verwenden Sie admin@lz14.de / admin123");
      }
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  // Logout
  async signOut() {
    if (DEMO_MODE) {
      localStorage.removeItem("demoAuth");
      return;
    }

    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  // Aktuellen User abrufen
  async getCurrentUser() {
    if (DEMO_MODE) {
      const isAuth = localStorage.getItem("demoAuth") === "true";
      return isAuth ? { email: "admin@lz14.de" } : null;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  },

  // Auth State änderungen überwachen
  onAuthStateChange(callback) {
    if (DEMO_MODE) {
      // Demo-Modus: Einfacher Event-Handler
      return { unsubscribe: () => {} };
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(callback);

    // Rückgabe einer konsistenten Unsubscribe-Funktion
    return {
      unsubscribe: () => {
        if (subscription && typeof subscription.unsubscribe === "function") {
          subscription.unsubscribe();
        }
      },
    };
  },
};
