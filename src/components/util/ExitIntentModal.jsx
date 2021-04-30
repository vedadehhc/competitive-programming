import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { withStyles } from '@material-ui/core/styles';
import ExitIntent from "./ExitIntent";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme =>  ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'rgb(0,0,0,.7)',
  },
  closeButton: {
    backgroundColor: theme.palette.secondary.main,
    color: '#111',
    width: 36,
    height: 36,
    '&:hover': {
      backgroundColor: '#f55',
      color: '#fff'
    }
  }
});

class ExitIntentModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

  }

  componentDidMount() {
    if (document.cookie.indexOf("modal_seen=true") < 0) {
      this.removeExitIntent = ExitIntent({
        threshold: 20,
        maxDisplays: 1,
        eventThrottle: 100,
        onExitIntent: () => {
          this.setState({show: true});
          document.body.style.overflow = 'hidden';
          // console.log('showing');
        },
      });
    }
  }

  componentWillUnmount() {
    if(this.removeExitIntent){
      this.removeExitIntent();
    }
    document.body.style.overflow = 'unset';
  }

  handleClose = () => {
    this.setState({show: false});
    document.body.style.overflow = 'unset';
  }

  componentDidUpdate() {
    if(this.state.show) {
      let expiryDate = new Date(
        Date.now() + 1 * (1000 * 60 * 60 * 24) // days * (ms * s * min * hours)
      );
      // expiryDate.setFullYear(expiryDate.getFullYear() + 1)
      document.cookie = "modal_seen=true; expires=" + expiryDate.toUTCString();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Backdrop className={classes.backdrop} key={'exit-intent-modal'} open={this.state.show}>
        <div style={{backgroundColor:'#eee', padding: 40, width:800, maxWidth:'90%'}} >
          <div style={{position: 'relative', float: 'right', top: -50, right: -50,}} onClick={this.handleClose}>
            <IconButton className={classes.closeButton}>
              <CloseIcon/>
            </IconButton>
          </div>
          {this.props.children}
        </div>
      </Backdrop>
    );
  }
}

export default withStyles(styles)(ExitIntentModal);