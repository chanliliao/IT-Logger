import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog } from '../../actions/logAction';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const LogItem = ({ log, deleteLog }) => {
  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: 'Log deleted' });
  };

  const { id, tech, attention, date } = log;

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{id}</span> last updated by{' '}
          <span className='black-text'>{tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='mateerial-icons'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog })(LogItem);
