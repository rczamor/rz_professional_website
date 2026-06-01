"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const SUGGESTIONS = [
  "What is context architecture?",
  "Tell me about the thesis",
  "What's Riché's background?",
];

const GENERIC_ERROR =
  "Sorry — I couldn't reach the assistant just now. Please try again in a moment, or get in touch via the contact page.";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming) return;

      setShowWelcome(false);
      setInputValue("");
      setIsTyping(true);
      setIsStreaming(true);

      // Build the conversation payload from prior turns + this user message.
      const history = messages.map((m) => ({
        role: m.role === "bot" ? ("assistant" as const) : ("user" as const),
        content: m.text,
      }));
      const payload = [...history, { role: "user" as const, content: trimmed }];

      setMessages((prev) => [...prev, { role: "user", text: trimmed }]);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: payload }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          let msg = GENERIC_ERROR;
          try {
            const data = await res.json();
            if (data?.error) msg = data.error;
          } catch {
            /* keep generic */
          }
          setIsTyping(false);
          setMessages((prev) => [...prev, { role: "bot", text: msg }]);
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        let started = false;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          if (!started) {
            started = true;
            setIsTyping(false);
            setMessages((prev) => [...prev, { role: "bot", text: acc }]);
          } else {
            setMessages((prev) => {
              const next = [...prev];
              next[next.length - 1] = { role: "bot", text: acc };
              return next;
            });
          }
        }

        if (!started) {
          // Stream closed with no content.
          setIsTyping(false);
          setMessages((prev) => [...prev, { role: "bot", text: GENERIC_ERROR }]);
        }
      } catch (err) {
        if ((err as Error)?.name === "AbortError") return;
        setIsTyping(false);
        setMessages((prev) => [...prev, { role: "bot", text: GENERIC_ERROR }]);
      } finally {
        setIsStreaming(false);
        abortRef.current = null;
      }
    },
    [messages, isStreaming]
  );

  // Auto-scroll
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Abort any in-flight request on unmount
  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

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

  // Focus trapping when dialog is open
  useEffect(() => {
    if (!isOpen) return;
    const panel = widgetRef.current;
    if (!panel) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const focusable = panel!.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="chatbot-widget" ref={widgetRef}>
      {/* Floating Button */}
      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        title="Chat with Riché"
      >
        <span className="material-symbols-outlined">smart_toy</span>
      </button>

      {/* Chat Panel */}
      <div
        className={`chatbot-panel${isOpen ? " open" : ""}`}
        role="dialog"
        aria-label="Chat with Riché"
        aria-modal={isOpen ? "true" : undefined}
      >
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-title">
            Ask Riché
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
                  Hi! I&apos;m Riché&apos;s site assistant — a context management system
                  grounded in his knowledge base, writing, and frameworks. Ask me about
                  context architecture, AI product strategy, or Riché&apos;s work.
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
                  <div className="chatbot-bubble" style={{ whiteSpace: "pre-wrap" }}>
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div className="chatbot-bubble">{msg.text}</div>
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
            disabled={isStreaming}
            onClick={() => sendMessage(inputValue)}
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
