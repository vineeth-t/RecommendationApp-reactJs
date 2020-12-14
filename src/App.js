import React, { useState } from "react";
import "./styles.css";

var places = {
  HitechCity: [
    {
      name: "Cyber-Towers",
      About:
        "The Hyderabad Information Technology and Engineering Consultancy City, abbreviated as HITEC City, is an Indian information technology, engineering, health informatics, and bioinformatics, financial business district located in Hyderabad, Telangana, India.",
      Contact:
        "https://www.bing.com/maps?q=cyberTowers&cvid=8af72d38401e441fba9ae73c8fb5d179&pglt=43&FORM=ANNTA1&PC=U531",
      photo:
        "https://1.bp.blogspot.com/-N9x0EKA03sA/T9YkvQFDhEI/AAAAAAAAArg/WCUp4vzlmts/s1600/_DSC0290.jpg"
    },
    {
      name: "Cloud-Dining",
      About:
        "Enjoy Dinner In Sky With Cloud Dining. The Fly Dining experience. The CloudDining (Dinner in the Air) Concept. Amazing dinner at hanging restaurant. On-board Dinner In The Clouds. Sky Dining Wonder in India.CloudDining restaurant is the newest fine dine place in Hyderabad. Cloud Dining is situated opposite Shilparamam in HiTech City",
      Contact: "https://clouddining.in/",
      photo: "https://i.ytimg.com/vi/UmdXtF3Q_u8/maxresdefault.jpg"
    }
  ],

  Madhapur: [
    {
      name: "Carpe-diem",
      About:
        "Gastro Pub, Awesome Dj, Music and Ambience, Live Dj, Sound System, Deck",
      rating: "4.9/5",
      Contact: "https://www.zomato.com/hyderabad/carpe-diem-jubilee-hills",
      photo:
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/k/x/p49341-15447092905c1264aa79f23.jpg?w=1200"
    },
    {
      name: "Kodi Kura Chitti Gare",
      About:
        "Best Authentic food available here and you must try KODI KURRA WITH CHILLI GAREE",
      rating: "4.5/5",
      Contact: "http://kodikurachittigaare.com/",
      photo:
        "http://kodikurachittigaare.com/wp-content/uploads/2017/12/chicken-poori.png"
    }
  ],
  Gachibowli: [
    {
      name: "Prism",
      About:
        "Prism Club and Kitchen in Hyderabad is a first-of-its-kind nightclub which carefully curates the ultimate party experience with its spectacular use of lights, an impressive bar island, and one of the largest dance floors in the India.Ranked #1 night club in India and #47 in the world",
      rating: "4/5",
      Contact: "https://www.prismclubs.com/",
      photo:
        "https://res.cloudinary.com/prismclubs/image/upload/v1578997695/krewella-at-prismturns1_il68pm.jpg"
    },
    {
      name: "DLF Food Street",
      About:
        "The best Place for street food. Vara lakshmi tiffin center and AP-PM Fast Food are the best",
      rating: "5/5",
      Contact:
        "https://www.bing.com/maps/directions?rtp=adr.~pos.17.44870948791504_78.35575103759766_Gachibowli%2c+Hyderabad%2c+Telangana_DLF+Street+Food_",
      photo: "https://img4.nbstatic.in/tr:w-500/5bbb30fc7d560d000da9708f.jpg"
    }
  ]
};

export default function App() {
  const [selectedPlace, setPlace] = useState("Madhapur");
  function placeHandler(place) {
    setPlace(place);
  }
  return (
    <div className="App">
      <h1>Hyderabad Famous Places</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout Some of the famous places of Hyderabad
      </p>

      <div>
        {Object.keys(places).map((place) => (
          <button onClick={() => placeHandler(place)} className="btn-menu">
            {place}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {places[selectedPlace].map((place) => (
            <li key={place.name} className="list-style">
              <div className="Place-name">{place.name}</div>
              <div className="about-place">
                {place.About}
                {"  "}
              </div>
              <img className="img" src={place.photo} alt="x" />
              <div className="link primary">
                <a className="link" href={place.Contact}>
                  Visit
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer className="footer">Hyderabad |ⓒ 2020 | PVR </footer>
    </div>
  );
}
