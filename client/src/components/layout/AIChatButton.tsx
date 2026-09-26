import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";

import "./AIChatButton.css";

/* =========================================================
ABN AI CHAT BUTTON
PUBLIC WEBSITE
========================================================= */

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  message: string;
};

const INITIAL_MESSAGE: ChatMessage = {
  id: 1,
  role: "assistant",
  message:
    "Halo, saya ABN AI Assistant. Saya siap membantu menjelaskan ABN EMS, ABN Fleet, IoT, AI, integration, dan solusi teknologi ABN.",
};

function AIChatButton() {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);

  /* =======================================================
TOGGLE
======================================================= */

  const toggleChat = () => {
    setOpen((current) => !current);
  };

  /* =======================================================
SEND
======================================================= */

  const handleSend = () => {
    const text = input.trim();

    if (!text) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      message: text,
    };

    const assistantMessage: ChatMessage = {
      id: Date.now() + 1,
      role: "assistant",
      message:
        "Terima kasih. Pertanyaan Anda sudah diterima. ABN AI Intelligence akan dapat memberikan jawaban berbasis data perusahaan setelah AI service dihubungkan.",
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);

    setInput("");
  };

  /* =======================================================
ENTER
======================================================= */

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      handleSend();
    }
  };

  return (
    <>
      {/* ===================================================
CHAT PANEL
=================================================== */}

      {open && (
        <section className="ai-chat-panel" aria-label="ABN AI Assistant">
          {/* HEADER */}

          <div className="ai-chat-header">
            <div className="ai-chat-header-left">
              <div className="ai-chat-avatar">
                <Bot size={19} strokeWidth={2} />
              </div>

              <div>
                <strong>ABN AI Assistant</strong>

                <span>
                  <i className="ai-chat-online-dot" />
                  AI Intelligence
                </span>
              </div>
            </div>

            <button
              type="button"
              className="ai-chat-close"
              onClick={toggleChat}
              aria-label="Close AI Assistant"
            >
              <X size={18} />
            </button>
          </div>

          {/* MESSAGES */}

          <div className="ai-chat-messages">
            {messages.map((item) => (
              <div key={item.id} className={`ai-chat-message-row ${item.role}`}>
                <div className="ai-chat-message">{item.message}</div>
              </div>
            ))}
          </div>

          {/* QUICK PROMPTS */}

          <div className="ai-chat-prompts">
            <button type="button" onClick={() => setInput("Apa itu ABN EMS?")}>
              Apa itu ABN EMS?
            </button>

            <button
              type="button"
              onClick={() => setInput("Apa itu ABN Fleet?")}
            >
              ABN Fleet
            </button>

            <button
              type="button"
              onClick={() => setInput("Apakah ABN bisa integrasi SAP?")}
            >
              Integrasi SAP
            </button>
          </div>

          {/* INPUT */}

          <div className="ai-chat-input">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask ABN AI..."
              aria-label="Ask ABN AI"
            />

            <button
              type="button"
              onClick={handleSend}
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </section>
      )}

      {/* ===================================================
      FLOATING BUTTON
      =================================================== */}

      <button
        type="button"
        className={`ai-chat-button ${open ? "open" : ""}`}
        onClick={toggleChat}
        aria-label={open ? "Close ABN AI Assistant" : "Open ABN AI Assistant"}
        title="ABN AI Assistant"
      >
        {open ? (
          <X size={22} strokeWidth={2} />
        ) : (
          <>
            <Sparkles size={18} strokeWidth={2} className="ai-chat-spark" />

            <MessageCircle size={22} strokeWidth={2} />
          </>
        )}

        {!open && <span className="ai-chat-label">ABN AI</span>}
      </button>
    </>
  );
}

export default AIChatButton;
