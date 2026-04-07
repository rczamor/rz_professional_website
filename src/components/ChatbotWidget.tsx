"use client";

import { useState, useEffect, useCallback, useRef } from "react";

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c]);
}

const SUGGESTIONS = [
  "What is context architecture?",
  "Tell me about the thesis",
  "What's Riché's background?",
];

const BOT_RESPONSE = `The Context Layer Engine is currently in development. In the meantime, you can explore Riché's <a href="/thesis" style="color: var(--chatbot-accent); text-decoration: underline;">thesis</a>, <a href="/work" style="color: var(--chatbot-accent); text-decoration: underline;">work history</a>, or <a href="/contact" style="color: var(--chatbot-accent); text-decoration: underline;">get in touch</a> directly.`;

type Message = {
  role: "user" | "bot";
  html: string;
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      setShowWelcome(false);
      setMessages((prev) => [...prev, { role: "user", html: escapeHtml(trimmed) }]);
      setInputValue("");
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { role: "bot", html: BOT_RESPONSE }]);
      }, 1500);
    },
    []
  );

  // Auto-scroll
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node) && isOpen) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [isOpen]);

  return (
    <div className="chatbot-widget" ref={widgetRef}>
      {/* Floating Button */}
      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label="Open chat"
        title="Chat with Riché"
      >
        <span className="material-symbols-outlined">smart_toy</span>
      </button>

      {/* Chat Panel */}
      <div className={`chatbot-panel${isOpen ? " open" : ""}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-title">
            Context Layer Engine
            <span className="chatbot-beta-badge">beta</span>
          </div>
          <button
            className="chatbot-close"
            onClick={() => setIsOpen(false)}
            type="button"
            aria-label="Close chat"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages" ref={messagesRef}>
          {showWelcome && (
            <div className="chatbot-message bot">
              <div className="chatbot-avatar">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div style={{ flex: 1 }}>
                <div className="chatbot-bubble">
                  Hi! I&apos;m Riché&apos;s Context Layer Engine — an AI grounded in his
                  knowledge base, writing, and frameworks. Ask me about context
                  architecture, AI product strategy, or Riché&apos;s work.
                </div>
                <div className="chatbot-suggestions">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      className="chatbot-suggestion"
                      type="button"
                      onClick={() => sendMessage(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`chatbot-message ${msg.role}`}>
              {msg.role === "bot" && (
                <div className="chatbot-avatar">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
              )}
              {msg.role === "bot" ? (
                <div style={{ flex: 1 }}>
                  <div
                    className="chatbot-bubble"
                    dangerouslySetInnerHTML={{ __html: msg.html }}
                  />
                </div>
              ) : (
                <div className="chatbot-bubble">{msg.html}</div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="chatbot-message bot">
              <div className="chatbot-avatar">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div className="chatbot-typing">
                <div className="chatbot-typing-dot" />
                <div className="chatbot-typing-dot" />
                <div className="chatbot-typing-dot" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="chatbot-input-area">
          <input
            ref={inputRef}
            type="text"
            className="chatbot-input-field"
            placeholder="Ask me anything..."
            aria-label="Message input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(inputValue);
              }
            }}
          />
          <button
            className="chatbot-send-btn"
            type="button"
            aria-label="Send message"
            onClick={() => sendMessage(inputValue)}
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
