import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPasswords, deletePassword} = props
  const {id, website, username, password} = passwordDetails

  const onDelete = () => {
    deletePassword(id)
  }

  return (
    <li className="password-item">
      <div className="details">
        <p className="website">{website}</p>
        <p className="username">{username}</p>

        {showPasswords ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>

      <button
        type="button"
        data-testid="delete"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
