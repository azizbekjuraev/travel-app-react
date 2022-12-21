export default function ({ item }) {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={item.img} />
      </div>
      <div className="card-text">
        <div className="country-ul">
          <ul>
            <img src="./img/Fill 219.png" />
          </ul>
          <li>{item.country}</li>
          <li className="grey">View on Google Maps</li>
        </div>
        <h1 className="header">{item.place}</h1>
        <div className="card-date-bold">
          <p>{item.date}</p>
        </div>
        <div className="card-info">
          <p>{item.info}</p>
        </div>
      </div>
    </div>
  );
}
