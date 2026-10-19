import { useState } from "react";
import {
  Search,
  Send,
  MoreVertical,
  Paperclip,
  Smile,
  Headphones,
  CheckCheck,
  MessageCircle,
  ShoppingBag,
  Truck,
} from "lucide-react";

function Messages() {
  const [activeChat, setActiveChat] = useState("support");
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: "support",
      name: "GEARNEST Support",
      type: "Customer Support",
      avatar: "G",
      online: true,
      lastMessage: "How can we help you today?",
      time: "Now",
      unread: 2,
    },
    {
      id: "order",
      name: "Order Support",
      type: "Order Assistance",
      avatar: "O",
      online: true,
      lastMessage: "Your order is being processed.",
      time: "2h",
      unread: 0,
    },
    {
      id: "delivery",
      name: "Delivery Team",
      type: "Delivery Assistance",
      avatar: "D",
      online: false,
      lastMessage: "Your package is on the way.",
      time: "Yesterday",
      unread: 0,
    },
  ];

  const chats = {
    support: [
      {
        id: 1,
        sender: "them",
        text: "Hello! Welcome to GEARNEST Support.",
        time: "10:24 PM",
      },
      {
        id: 2,
        sender: "them",
        text: "How can we help you today?",
        time: "10:24 PM",
      },
      {
        id: 3,
        sender: "me",
        text: "Hi! I want to ask about my order.",
        time: "10:25 PM",
      },
      {
        id: 4,
        sender: "them",
        text: "Sure! Please send us your order details and we'll be happy to assist you.",
        time: "10:25 PM",
      },
    ],

    order: [
      {
        id: 1,
        sender: "them",
        text: "Your order is currently being processed.",
        time: "8:30 PM",
      },
      {
        id: 2,
        sender: "me",
        text: "When will it be shipped?",
        time: "8:32 PM",
      },
      {
        id: 3,
        sender: "them",
        text: "Your order should be prepared for shipment soon.",
        time: "8:33 PM",
      },
    ],

    delivery: [
      {
        id: 1,
        sender: "them",
        text: "Your package is currently on the way.",
        time: "Yesterday",
      },
      {
        id: 2,
        sender: "me",
        text: "Thank you for the update!",
        time: "Yesterday",
      },
    ],
  };

  const activeConversation = conversations.find(
    (chat) => chat.id === activeChat
  );

  const currentMessages = chats[activeChat] || [];

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("Message:", message);

    setMessage("");
  };

  return (
    <div className="messages-page">

      {/* =========================================
          PAGE HEADER
      ========================================= */}
      <div className="messages-header">

        <div>
          <p className="messages-label">
            CUSTOMER SUPPORT
          </p>

          <h1>Messages</h1>

          <p>
            Chat with GEARNEST and get help with your shopping.
          </p>
        </div>

        <div className="messages-status">
          <span className="messages-online-dot"></span>
          Support Online
        </div>

      </div>


      {/* =========================================
          CHAT CONTAINER
      ========================================= */}
      <div className="messages-container">

        {/* =====================================
            CONVERSATION SIDEBAR
        ===================================== */}
        <div className="conversation-panel">

          <div className="conversation-top">

            <div>
              <h2>Conversations</h2>
              <span>
                {conversations.length} active chats
              </span>
            </div>

            <button
              className="conversation-new-btn"
              title="New message"
            >
              <MessageCircle size={17} />
            </button>

          </div>


          {/* SEARCH */}
          <div className="message-search">

            <Search size={16} />

            <input
              type="text"
              placeholder="Search conversations..."
            />

          </div>


          {/* CONVERSATIONS */}
          <div className="conversation-list">

            {conversations.map((chat) => (

              <button
                key={chat.id}
                className={`conversation-item ${
                  activeChat === chat.id
                    ? "active"
                    : ""
                }`}
                onClick={() => setActiveChat(chat.id)}
              >

                <div className="conversation-avatar">

                  {chat.avatar}

                  {chat.online && (
                    <span className="conversation-online"></span>
                  )}

                </div>


                <div className="conversation-content">

                  <div className="conversation-name-row">

                    <strong>
                      {chat.name}
                    </strong>

                    <span>
                      {chat.time}
                    </span>

                  </div>

                  <div className="conversation-message-row">

                    <p>
                      {chat.lastMessage}
                    </p>

                    {chat.unread > 0 && (
                      <b>
                        {chat.unread}
                      </b>
                    )}

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>


        {/* =====================================
            CHAT AREA
        ===================================== */}
        <div className="chat-panel">

          {/* CHAT HEADER */}
          <div className="chat-header">

            <div className="chat-user">

              <div className="chat-avatar">

                {activeConversation?.avatar}

                {activeConversation?.online && (
                  <span className="chat-online"></span>
                )}

              </div>

              <div>
                <h3>
                  {activeConversation?.name}
                </h3>

                <span>
                  {activeConversation?.online
                    ? "Online now"
                    : "Currently offline"}
                </span>
              </div>

            </div>


            <div className="chat-header-actions">

              <button title="Order information">
                <ShoppingBag size={18} />
              </button>

              <button title="More options">
                <MoreVertical size={19} />
              </button>

            </div>

          </div>


          {/* CHAT BODY */}
          <div className="chat-body">

            <div className="chat-date">
              TODAY
            </div>


            {currentMessages.map((item) => (

              <div
                key={item.id}
                className={`message-row ${
                  item.sender === "me"
                    ? "message-sent"
                    : "message-received"
                }`}
              >

                {item.sender === "them" && (
                  <div className="small-chat-avatar">
                    {activeConversation?.avatar}
                  </div>
                )}

                <div className="message-content">

                  <div className="message-bubble">
                    {item.text}
                  </div>

                  <div className="message-time">

                    {item.time}

                    {item.sender === "me" && (
                      <CheckCheck size={13} />
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* CHAT QUICK ACTIONS */}
          <div className="chat-quick-actions">

            <button
              onClick={() =>
                setMessage("I need help with my order.")
              }
            >
              <ShoppingBag size={14} />
              Order Help
            </button>

            <button
              onClick={() =>
                setMessage("Can you help me with delivery?")
              }
            >
              <Truck size={14} />
              Delivery
            </button>

            <button
              onClick={() =>
                setMessage("I need assistance with a product.")
              }
            >
              <Headphones size={14} />
              Product Help
            </button>

          </div>


          {/* MESSAGE INPUT */}
          <div className="message-input-area">

            <button
              className="message-attachment"
              title="Attach file"
            >
              <Paperclip size={18} />
            </button>

            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button
              className="message-emoji"
              title="Add emoji"
            >
              <Smile size={18} />
            </button>

            <button
              className="message-send"
              onClick={handleSend}
              disabled={!message.trim()}
            >
              <Send size={17} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Messages;