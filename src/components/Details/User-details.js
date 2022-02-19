export function UserDetails({
    userName,
    userLastName,
    userPortfolio,
    userTwitter,
    userBio,
}) {
    return (
        <div className="details__container">
            <i className="details__container-icon" />
            <p>
                Name: {userName} {userLastName}
            </p>
            <p>Portfolio: {userPortfolio}</p>
            <p>Twitter: {userTwitter}</p>
            <p>Bio: {userBio}</p>
        </div>
    );
}
