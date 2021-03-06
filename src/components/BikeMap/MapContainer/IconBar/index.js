import React, {Component} from 'react';
import {Row,Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaUser from 'react-icons/lib/fa/user';
import FaExclamation from 'react-icons/lib/fa/exclamation';
import MdDirectionsBike from 'react-icons/lib/md/directions-bike';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

  const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class IconBar extends Component {

    constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

handleChange = (value) => {
    this.setState({
      value: value,
    })
  }

  render(){

    return (
      <div className="bar-icons">
      <MuiThemeProvider>
        <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Tab A" value="a">
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            
          </div>
        </Tab>
        <Tab label="Tab B" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
        <Tab label="Tab C" value="c">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default IconBar;