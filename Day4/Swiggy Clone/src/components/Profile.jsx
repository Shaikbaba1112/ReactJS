const Profile = () => {
    return (
        <div className="profile-page">

            <div className="profile-header">
                <img src="https://imgs.search.brave.com/vvgTiXkAmUwbf_mqxc7g4i2ROZTY4VnoPGhO8FUVTx0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/MDM0MjY1MS9waG90/by9zb2Z0d2FyZS1k/ZXZlbG9wZXJzLWF0/LXRoZS1vZmZpY2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUc2WkZyVUJhRGhr/alI0RS02VllkTGdk/Wk9ZeWJsYzl4UF9X/WWtBaWU5QnM9" alt="User" />
                <div>
                    <h2>Shaik Baba</h2>
                    <p>+91 98765 43210</p>
                </div>
            </div>

            <div className="profile-section">
                <div className="profile-item">
                    <span>🛒</span>
                    <p>My Orders</p>
                </div>

                <div className="profile-item">
                    <span>📍</span>
                    <p>Saved Addresses</p>
                </div>

                <div className="profile-item">
                    <span>💳</span>
                    <p>Payments & Refunds</p>
                </div>

                <div className="profile-item">
                    <span>🎁</span>
                    <p>Swiggy One</p>
                </div>

                <div className="profile-item">
                    <span>⚙️</span>
                    <p>Account Settings</p>
                </div>

                <div className="profile-item logout">
                    <span>🚪</span>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;