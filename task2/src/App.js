import './App.css';
import React, { useState } from 'react';

const testimonyPhotos = [
  "img/person1.jpg",
  "img/person2.png",
  "img/person3.jpg",
  "img/person4.jpg"
];

const testimonyText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb.",
  "Like a Jew in ancient Spain And for Christ's name did pay with pain Modern day Inquisition What is the link between these crafts? Doctors and thieves, they both wear masks Overpaid meat magicians",
  "Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you",
  "Finished with my woman 'cause She couldn't help me with my mind People think I'm insane because I am frowning all the time All day long I think of things But nothing seems to satisfy Think I'll lose my mind If I don't find something to pacify"
];

const testimonyPerson = [
  'James Jokovic, IT consultant',
  'John Doe, Teacher',
  'Rick Astley, Singer',
  'Taras Shevchenko, Writer'
];



function App() {

  const [speech, setText1] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb.");
  const [persName, setText2] = useState("James Jokovic, IT consultant");
  const [source, setPhoto] = useState('img/person1.jpg');
  


  const updateText = (newText1, newText2, newSource) => {
    setText1(newText1);
    setText2(newText2);
    setPhoto(newSource);
  };

  const [activeImage, setActiveImage] = useState(null);

    const openOverlay = (imageIndex) => {
        setActiveImage(imageIndex);
    };

    const closeOverlay = () => {
        setActiveImage(null);
    };

    const imageList = [
        "img/work1.jpg",
        "img/work2.jpg",
        "img/work3.jpg"
    ];


  return (
    <div>
    <div className="portfolio">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h1 style={{ width: '100%', textAlign: 'left', marginTop: '1vw', color: 'rgba(14, 64, 140, 0.8)', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Take a look at our portfolio!</h1>
        <div style={{ width: '40vw' }}>
          <a href="portfolio.html"><button className="viewallbutton">View all</button></a>
        </div>
      </div>
    <div className="works">
    {imageList.map((image, index) => (
                <div key={index} className={`work-container ${activeImage === index ? 'blurred' : ''}`} onClick={() => openOverlay(index)}>
                    <img src={image} alt={`Work ${index + 1}`} className="work" style={{height: '27vw', margin: '1vw', borderRadius: '15px'}}/>
                </div>
            ))}
                        {activeImage !== null && (
                <div className="overlay" onClick={closeOverlay}>
                    <div className="overlay-content">
                        <img src={imageList[activeImage]} alt={`Work ${activeImage + 1}`} className="overlay-image" style={{}}/>
                        <p style={{fontSize: '24px', marginTop: '-0.5vw', width: '60vw'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb.
                        </p>
                    </div>
                </div>
            )}
  </div>
</div>

<div className="testimony">
  <div style={{ width: '256px', display: 'flex', flexDirection: 'row'}}>
<img style={{ width: '40px', height: '40px', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px', marginTop: '15vw', marginLeft: '2vw' }} src="img/personsmall3.jpg" />
<img style={{ width: '60px', height: '60px', transformOrigin: '0 0', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px', marginTop: '5vw', marginLeft: '3vw' }} src="img/personsmall2.jpg" />
<img style={{ width: '40px', height: '40px', transformOrigin: '0 0', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px', marginTop: '25vw', marginLeft: '2vw' }} src="img/personsmall4.jpg" />
    </div>

  <div style={{ display: 'flex', flexDirection: 'column', height: '30vw' }}>
    <h1 style={{ textAlign: 'center', width: '100%', color: 'rgba(14, 64, 140, 0.8)', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Testimony</h1>
    <div style={{ width: '625px', height: '111px', textAlign: 'center', color: '#1E1C31', fontSize: '48px', fontFamily: 'Poppins', fontWeight: '600', lineHeight: '61px', wordWrap: 'break-word' }}>What Do Our Clients Says About Us</div>
    <img style={{ width: '100px', height: '100px', left: '437px', top: '278px', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px', marginLeft: '14vw', marginTop: '2vw'}} src={source}/>
    <div style={{ width: '499px', height: '121px', textAlign: 'center', color: 'black', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word', marginLeft: '3.5vw', marginTop: '1vw' }}>
    {speech}
  </div>
  <div style={{ textAlign: 'center', color: '#1E1C31', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase', lineHeight: '22px', wordWrap: 'break-word', marginTop: '3vw' }}>
  {persName}
  </div>
 
  <div style={{ width: '71px', height: '14px', display: 'flex', flexDirection: 'row', marginLeft: '13.7vw', marginTop: '2vw'}}>
  <div style={{ width: '14px', height: '14px', background: '#4270EB', borderRadius: '9999px', margin: '5px' }}><button style={{ border: '0px', width: '15px', height: '17px', opacity: '0', cursor: 'pointer' }} onClick={() => updateText(testimonyText[0], testimonyPerson[0], testimonyPhotos[0])}></button></div>
  <div style={{ width: '14px', height: '14px', background: '#4270EB', borderRadius: '9999px', margin: '5px' }}><button style={{ border: '0px', width: '15px', height: '17px', opacity: '0', cursor: 'pointer' }} onClick={() => updateText(testimonyText[1], testimonyPerson[1], testimonyPhotos[1])}></button></div>
  <div style={{ width: '14px', height: '14px', background: '#4270EB', borderRadius: '9999px', margin: '5px' }}><button style={{ border: '0px', width: '15px', height: '17px', opacity: '0', cursor: 'pointer' }} onClick={() => updateText(testimonyText[2], testimonyPerson[2], testimonyPhotos[2])}></button></div>
  <div style={{ width: '14px', height: '14px', background: '#4270EB', borderRadius: '9999px', margin: '5px' }}><button style={{ border: '0px', width: '15px', height: '17px', opacity: '0', cursor: 'pointer' }} onClick={() => updateText(testimonyText[3], testimonyPerson[3], testimonyPhotos[3])}></button></div>
  </div>
  </div>
<div style={{ width: '256px', display: 'flex', flexDirection: 'row'}}>
<img style={{ width: '40px', height: '40px', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px', marginTop: '27vw', marginLeft: '2vw' }} src="img/personsmall5.jpg" />
<img style={{ width: '60px', height: '60px', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px', marginLeft: '2vw', marginTop: '3vw' }} src="img/personsmall1.jpg" />
<img style={{ width: '40px', height: '40px', transformOrigin: '0 0', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px', marginLeft: '2vw', marginTop: '15vw' }} src="img/personsmall6.jpg" />
</div>
</div>
</div>
  );
}

export default App;