import './App.css';

function App() {
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
    <div>
      <img src="img/work1.jpg" style={{ width: '18vw', height: '27vw', marginLeft: '1.5vw', borderRadius: '10px' }} className="work" />
    </div>
    <div>
      <img src="img/work2.jpg" style={{ width: '18vw', height: '27vw', marginLeft: '2vw', borderRadius: '10px' }} className="work" />
    </div>
    <div>
      <img src="img/work3.jpg" style={{ width: '18vw', height: '27vw', marginLeft: '2vw', borderRadius: '10px' }} className="work" />
    </div>
  </div>
</div>
<div className="testimony">
  <h1 style={{ textAlign: 'center', width: '100%', marginTop: '1vw', color: 'rgba(14, 64, 140, 0.8)', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Testimony</h1>
  <div style={{ display: 'flex', flexDirection: 'row', height: '30vw' }}>

<div style={{ width: '266px', height: '266px', background: 'linear-gradient(180deg, rgba(65, 88, 208, 0.50) 0%, rgba(200, 80, 192, 0.50) 53%, rgba(255, 204, 112, 0.50) 100%)', borderRadius: '9999px', filter: 'blur(50px)' }}></div>
<div style={{ width: '625px', height: '111px', textAlign: 'center', color: '#1E1C31', fontSize: '48px', fontFamily: 'Poppins', fontWeight: '600', lineHeight: '61px', wordWrap: 'break-word' }}>What Do Our Clients Says About Us</div>
<img style={{ width: '60px', height: '60px', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px' }} src="img/personsmall1.jpg" />
<img style={{ width: '60px', height: '60px', transformOrigin: '0 0', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px' }} src="img/personsmall2.jpg" />
<img style={{ width: '40px', height: '40px', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px' }} src="img/personsmall3.jpg" />
<img style={{ width: '40px', height: '40px', transformOrigin: '0 0', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px' }} src="img/personsmall4.jpg" />
<img style={{ width: '40px', height: '40px', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px' }} src="img/personsmall5.jpg" />
<img style={{ width: '40px', height: '40px', transformOrigin: '0 0', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px' }} src="img/personsmall6.jpg" />
  <div style={{ width: '100%' }}>
  <div style={{ marginLeft: '12.7vw', marginTop: '21vw', width: '499px', height: '121px', textAlign: 'center', color: 'black', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '400', lineHeight: '22px', wordWrap: 'break-word' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.
  </div>
  <img style={{ width: '100px', height: '100px', left: '437px', top: '278px', background: 'linear-gradient(0deg, #A5A5A5 0%, #A5A5A5 100%)', borderRadius: '9999px' }} src="img/person1.jpg" />
  <div style={{ marginLeft: '2vw', textAlign: 'center', color: '#1E1C31', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase', lineHeight: '22px', wordWrap: 'break-word' }}>
    James Jokovic
  </div>
  <div style={{ marginLeft: '22.6vw', width: '100px', textAlign: 'center', color: '#1E1C31', fontSize: '12px', fontFamily: 'Poppins', fontWeight: '400', textTransform: 'uppercase', lineHeight: '19px', wordWrap: 'break-word' }}>
    IT Consultant
  </div>
</div>
<div style={{ width: '113px', height: '41px',}}></div>
<div style={{ width: '71px', height: '12px', display: 'flex', flexDirection: 'row'}}>
  <div style={{ width: '12px', height: '12px', background: '#4270EB', borderRadius: '9999px' }}><button style={{ border: '0px', width: '12px', height: '15px', opacity: '0' }}></button></div>
  <div style={{ width: '10px', height: '10px', background: '#B3C7F8', borderRadius: '9999px' }}><button style={{ border: '0px', width: '12px', height: '15px', opacity: '0' }}></button></div>
  <div style={{ width: '10px', height: '10px', background: '#B3C7F8', borderRadius: '9999px' }}><button style={{ border: '0px', width: '12px', height: '15px', opacity: '0' }}></button></div>
  <div style={{ width: '10px', height: '10px', background: '#B3C7F8', borderRadius: '9999px' }}><button style={{ border: '0px', width: '12px', height: '15px', opacity: '0' }}></button></div>
</div>
                    </div>
                    </div>
                </div>



  );
}

export default App;