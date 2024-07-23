// apiConfig.js
let baseUrl;
let socketUrl;

if (import.meta.env.VITE_NODE_ENV === "production") {
  baseUrl = "https://simple-chat-app-pearl.vercel.app/";
  socketUrl = "wss://simple-chat-app-pearl.vercel.app//";
} else {
  baseUrl = "http://localhost:8000";
  socketUrl = "ws://localhost:8000";
}

export { baseUrl, socketUrl };
