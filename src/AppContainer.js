import App from './App';
import { connect } from 'react-redux';

const AppContainer = (props) => {
    return <App {...props} />
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps)(AppContainer);