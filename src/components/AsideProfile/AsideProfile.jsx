function AsideProfile() {
    return (<div className="asideProfile">
        <span className="asideProfile__name">Profile Name</span>
        <span className="asideProfile__description">Description</span>
        <img alt="Аватар пользователя" src="" className="asideProfile__image"></img>
        <button className="asideProfile__editButton" type="button">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0253 3.46661L12.339 1.00828C12.1615 0.847474 11.9213 0.757202 11.6709 0.757202C11.4205 0.757202 11.1803 0.847474 11.0028 1.00828L1.47968 9.66661L0.610198 13.0833C0.580204 13.2082 0.581233 13.3376 0.613208 13.4621C0.645183 13.5866 0.707298 13.703 0.795015 13.8028C0.882731 13.9027 0.993834 13.9834 1.12021 14.0391C1.24658 14.0949 1.38503 14.1242 1.52544 14.1249C1.59087 14.131 1.65679 14.131 1.72222 14.1249L5.5159 13.3333L15.0253 4.68328C15.2019 4.52166 15.301 4.30294 15.301 4.07495C15.301 3.84695 15.2019 3.62824 15.0253 3.46661ZM5.05828 12.5833L1.50256 13.2624L2.31255 10.0874L9.43771 3.62495L12.1834 6.12495L5.05828 12.5833ZM12.7966 5.52078L10.0509 3.02078L11.6434 1.57911L14.3434 4.07911L12.7966 5.52078Z" fill="#545454" />
            </svg>
        </button>
    </div>);
}

export default AsideProfile;
