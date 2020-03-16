import React from 'react'
import {Modal} from 'react-materialize'
import {Button} from 'react-materialize'
class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  handleDeleteLogo = () => {
    console.log("handleDeleteLogo");
    console.log(this.boom2);
    this.props.goToDeleteLogoCallback();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Modal actions={[
                <Button flat modal="close" node="button" waves="green">Cancel</Button>,
                <Button flat  node="button" waves="green" onClick={this.handleDeleteLogo}>Agree</Button>
              ]}
                bottomSheet={false}
                trigger ={<Button node="button">&#128465;</Button>}
                >
                  <h3 backgroundColor="green">
                    Are you sure you want to delete this logo?
                  </h3>
              </Modal>
            </li>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;