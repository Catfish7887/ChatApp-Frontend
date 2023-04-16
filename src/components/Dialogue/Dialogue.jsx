function Dialogue() {
  const lastMessageIsMine = true;
  const isRidden = true;

  return (<li className="dialogue">
    <img alt="" className="dialogue__image" />
    <span className="dialogue__username">User Name</span>
    <p className="dialogue__lastMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam nulla ea?</p>
    <span className="dialogue__time">10:30</span>
    <div className="dialogue__messageStatus">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.558228 4L3.69076 7L8.91164 1" stroke="#4399FF" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </li>);
}

export default Dialogue;
