export default function NavBar2() {
  const open_menu = ()=>{
    const menu_btn= document.querySelector('.hamburger')
    const mobile_menu = document.querySelector('.mobile-nav')
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
  }
  window.onload = function (){
    window.addEventListener('scroll', (e)=>{
      if (window.pageYOffset > 100) {
        document.querySelector('header').classList.add('is-scrolling');
      }else{
        document.querySelector('header').classList.remove('is-scrolling');
      }
    })
  }
  return (
    <div className="container-navbar">
      <header>
        <div className="navbar">
          <h2>
            <span>Code</span>Boss
          </h2>
          <nav className="desktop-nav">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>
          <button className="hamburger" onClick={open_menu}>
            <div className="bar"></div>
          </button>
        </div>
      </header>
      <nav className="mobile-nav">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
}
