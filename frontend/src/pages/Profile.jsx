import { useState } from "react";
import {
  User,
  Mail,
  CalendarDays,
  Edit3,
  Lock,
  Package,
  Heart,
  MessageCircle,
  LogOut,
  X,
  Check,
  Camera,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

function Profile({
  user,
  onLogout,
  onPageChange,
}) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const userName = user?.name || "Guest User";
  const userEmail = user?.email || "No email available";

  const [editName, setEditName] = useState(userName);
  const [editEmail, setEditEmail] = useState(userEmail);

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleLogout = () => {
    setShowLogoutConfirm(false);
    onLogout();
  };

  const firstLetter = (isEditing ? editName : userName)
    .charAt(0)
    .toUpperCase();

  return (
    <div className="profile-page">

      {/* =========================================
          HEADER
      ========================================= */}
      <div className="profile-header">

        <div>
          <p className="profile-label">
            MY ACCOUNT
          </p>

          <h1>
            Profile
          </h1>

          <p>
            Manage your GEARNEST account and preferences.
          </p>
        </div>

        <div className="profile-header-badge">
          <ShieldCheck size={17} />
          <span>Secure Account</span>
        </div>

      </div>


      {/* =========================================
          MAIN PROFILE CARD
      ========================================= */}
      <div className="profile-main-card">

        <div className="profile-cover-glow"></div>

        {/* AVATAR */}
        <div className="profile-avatar-wrapper">

          <div className="profile-avatar-large">
            {firstLetter}
          </div>

          <button
            className="profile-camera-btn"
            type="button"
            title="Change profile photo"
          >
            <Camera size={15} />
          </button>

        </div>


        {/* USER INFO */}
        <div className="profile-user-info">

          {isEditing ? (
            <input
              className="profile-name-input"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Your name"
            />
          ) : (
            <h2>{userName}</h2>
          )}

          {isEditing ? (
            <input
              className="profile-email-input"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
              placeholder="Your email"
            />
          ) : (
            <p>{userEmail}</p>
          )}

          <span className="profile-status">
            <span className="status-dot"></span>
            Active Account
          </span>

        </div>


        {/* EDIT / SAVE */}
        <div className="profile-main-actions">

          {isEditing ? (
            <>
              <button
                className="profile-save-btn"
                onClick={handleSaveProfile}
              >
                <Check size={17} />
                Save Changes
              </button>

              <button
                className="profile-cancel-edit"
                onClick={() => {
                  setEditName(userName);
                  setEditEmail(userEmail);
                  setIsEditing(false);
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="profile-edit-btn"
              onClick={() => setIsEditing(true)}
            >
              <Edit3 size={17} />
              Edit Profile
            </button>
          )}

        </div>

      </div>


      {/* =========================================
          ACCOUNT STATS
      ========================================= */}
      <div className="profile-stats-grid">

        <div
          className="profile-stat-card"
          onClick={() => onPageChange("orders")}
        >
          <div className="profile-stat-icon">
            <Package size={20} />
          </div>

          <div>
            <strong>Orders</strong>
            <span>View purchases</span>
          </div>

          <ChevronRight size={17} />
        </div>


        <div
          className="profile-stat-card"
          onClick={() => onPageChange("wishlist")}
        >
          <div className="profile-stat-icon">
            <Heart size={20} />
          </div>

          <div>
            <strong>Wishlist</strong>
            <span>Saved products</span>
          </div>

          <ChevronRight size={17} />
        </div>


        <div
          className="profile-stat-card"
          onClick={() => onPageChange("messages")}
        >
          <div className="profile-stat-icon">
            <MessageCircle size={20} />
          </div>

          <div>
            <strong>Messages</strong>
            <span>Contact support</span>
          </div>

          <ChevronRight size={17} />
        </div>

      </div>


      {/* =========================================
          ACCOUNT INFORMATION
      ========================================= */}
      <div className="profile-section">

        <div className="profile-section-title">

          <div>
            <h2>Account Information</h2>
            <p>
              Your personal account details
            </p>
          </div>

          <Sparkles
            size={20}
            className="profile-section-sparkle"
          />

        </div>


        <div className="profile-info-grid">

          {/* NAME */}
          <div className="profile-info-box">

            <div className="profile-info-icon">
              <User size={20} />
            </div>

            <div>
              <span>Full Name</span>
              <strong>{userName}</strong>
            </div>

          </div>


          {/* EMAIL */}
          <div className="profile-info-box">

            <div className="profile-info-icon">
              <Mail size={20} />
            </div>

            <div>
              <span>Email Address</span>
              <strong>{userEmail}</strong>
            </div>

          </div>


          {/* MEMBER SINCE */}
          <div className="profile-info-box">

            <div className="profile-info-icon">
              <CalendarDays size={20} />
            </div>

            <div>
              <span>Member Since</span>

              <strong>
                {user?.created_at
                  ? new Date(
                      user.created_at
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "Recently joined"}
              </strong>
            </div>

          </div>


          {/* PASSWORD */}
          <div className="profile-info-box">

            <div className="profile-info-icon">
              <Lock size={20} />
            </div>

            <div>
              <span>Password</span>
              <strong>••••••••</strong>
            </div>

            <button
              className="profile-change-btn"
              type="button"
            >
              Change
            </button>

          </div>

        </div>
      </div>


      {/* =========================================
          QUICK ACTIONS
      ========================================= */}
      <div className="profile-section">

        <div className="profile-section-title">
          <div>
            <h2>Quick Access</h2>
            <p>
              Explore your GEARNEST account
            </p>
          </div>
        </div>


        <div className="profile-actions-grid">

          <button
            className="profile-action-card"
            onClick={() => onPageChange("orders")}
          >
            <div className="profile-action-icon">
              <Package size={22} />
            </div>

            <div>
              <strong>My Orders</strong>
              <span>
                View your orders and purchases
              </span>
            </div>

            <ChevronRight size={18} />
          </button>


          <button
            className="profile-action-card"
            onClick={() => onPageChange("wishlist")}
          >
            <div className="profile-action-icon heart-icon">
              <Heart size={22} />
            </div>

            <div>
              <strong>Wishlist</strong>
              <span>
                View your saved products
              </span>
            </div>

            <ChevronRight size={18} />
          </button>


          <button
            className="profile-action-card"
            onClick={() => onPageChange("messages")}
          >
            <div className="profile-action-icon message-icon">
              <MessageCircle size={22} />
            </div>

            <div>
              <strong>Messages</strong>
              <span>
                Check your messages
              </span>
            </div>

            <ChevronRight size={18} />
          </button>

        </div>

      </div>


      {/* =========================================
          LOGOUT
      ========================================= */}
      <div className="profile-logout-section">

        <div className="profile-logout-content">

          <div className="profile-logout-icon">
            <LogOut size={20} />
          </div>

          <div>
            <h3>Sign out of GEARNEST</h3>

            <p>
              You can log back in anytime using your account credentials.
            </p>
          </div>

        </div>

        <button
          className="profile-logout-btn"
          onClick={() => setShowLogoutConfirm(true)}
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>


      {/* =========================================
          LOGOUT CONFIRMATION
      ========================================= */}
      {showLogoutConfirm && (
        <div className="logout-overlay">

          <div className="logout-modal">

            <button
              className="logout-close"
              onClick={() =>
                setShowLogoutConfirm(false)
              }
            >
              <X size={20} />
            </button>


            <div className="logout-icon">
              <LogOut size={24} />
            </div>


            <h2>
              Logout from GEARNEST?
            </h2>

            <p>
              Are you sure you want to logout from your account?
            </p>


            <div className="logout-modal-buttons">

              <button
                className="logout-cancel-btn"
                onClick={() =>
                  setShowLogoutConfirm(false)
                }
              >
                Cancel
              </button>


              <button
                className="logout-confirm-btn"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                Logout
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Profile;