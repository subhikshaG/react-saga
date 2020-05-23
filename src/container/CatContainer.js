
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { apiRequest } from '../action/action';
import {withRouter} from 'react-router'
import CatComponent from '../component/CatComponent';
function mapStateToProps(state,ownProps) {
    console.log(state) // state
    console.log(ownProps) // ownProps

    return {
       catImageUrl: state.catImageUrl,
       quoteText: state.quoteText,
       fetching: state.fetching,
       loading: state.loading

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ apiRequest },dispatch)
}

const withConnnect = connect(
    mapStateToProps,
    mapDispatchToProps
);
const CatContainer = withRouter(withConnnect(CatComponent))

export default CatContainer;



// function App() {
//   const { catImageUrl, quoteText } = useSelector(state => state);
//   const dispatch = useDispatch();

//   const handleClick = () => dispatch(apiRequest());

//   useEffect(() => {
//     dispatch(apiRequest());
//   }, [dispatch]);

//   return (
//     <div className="container">
//       <h1>Cats + Quotes</h1>
//       <div className="row">
//         <img src={catImageUrl} alt="A cat" />
//       </div>
//       <blockquote>{quoteText}</blockquote>
//       <button onClick={handleClick}>Gimme more...</button>
//     </div>
//   );
// }

// export default App;