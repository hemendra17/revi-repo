
import header_logo from '../../images/header_logo.png'
import Man_On_Phone from '../../images/Man On Phone.svg'
import Group_70_1 from '../../images/Group 70 (1).png'
import bg_image from '../../images/bg-image.png'


export default function Menu() {
    return (
        <div className="navbar-wrapper">
            <div className="container">
                <nav className="navbar navbar-static-top my_nav">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="#"><img src={header_logo} alt /></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">The App</a></li>
                                <li><a href="#">For Business</a></li>
                                <li><a href="#">Log in</a></li>
                                {/* <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                          aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li role="separator" class="divider"></li>
                          <li class="dropdown-header">Nav header</li>
                          <li><a href="#">Separated link</a></li>
                          <li><a href="#">One more separated link</a></li>
                      </ul>
                  </li> */}
                                <div className="icon_btn">
                                    <a href="#"><img src={Man_On_Phone} alt /><span>Get Revi</span></a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}