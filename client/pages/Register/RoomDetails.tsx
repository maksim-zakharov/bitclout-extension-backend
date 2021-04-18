import * as React from 'react';

import '../../css/form_styles.css';
import { RegisterRoomTypesDto } from '../../services/dto/register-room-types.dto';

const RoomDetails: React.FC<{ details: RegisterRoomTypesDto[]; onDelete }> = ({
  details,
  onDelete,
}) => {
  return (
    <>
      {' '}
      {details?.length > 0 &&
        details.map((item, key) => (
          <div className="details-container" key={key}>
            <div className="row">
              <div>Hotel Name</div>
              <div>{item.name}</div>
            </div>
            <div className="row">
              <div>Expected Hotel Inventory</div>
              <div>{item.inventory}</div>
            </div>
            <button className="delete-btn" onClick={() => onDelete(item)}>
              Delete
            </button>
          </div>
        ))}
    </>
  );
};

export default RoomDetails;
