import Profile from './profile.js';
import PropTypes from 'prop-types';


function Profileview ({ items }) {
    return (
        avatar={item.avatar}
    
    )};

    Profileview.propTypes = {
        items: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
          }),
        ),
      };
      
      export default Profileview;