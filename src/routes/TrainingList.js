import FrameLayout from '../components/FrameLayout'
import React  from 'react';
import { connect } from 'react-redux' 
import TrainTable from '../components/TrainTable'
// import cognitoUtils from '../lib/cognitoUtils'
import {withTranslation} from 'react-i18next'


const mapStateToProps = state => {
  return { session: state.session ,language: state.lang.language, languageList: state.lang.languageList}
}

const MapDispatchTpProps = (dispatch) => {
  return {
      changeLang: (key)=>dispatch({type: 'change_language',data: key})
  }
}

class  TrainingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    
  }

  componentWillUnmount(){
  }

  render(){
    const c = <TrainTable history={this.props.history} />
    return  <FrameLayout breadcrumb="TrainingList" component={c} />
  }
}

export default connect(mapStateToProps,MapDispatchTpProps)(withTranslation()(TrainingList));

