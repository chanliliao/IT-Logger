import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techAction';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const TechItem = ({ deleteTech, tech }) => {
  const onDelete = (e) => {
    deleteTech(tech.id);
    M.toast({ html: 'Tech Deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-icon'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
