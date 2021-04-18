import * as React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import Input from '../../components/Input';
import { RegisterRoomTypesDto } from '../../services/dto/register-room-types.dto';
import Button from '../../components/Button';

const RoomDetailsModal = (props) => {
  const { isVisible, onOk, onClose } = props;
  const [details, setDetails] = useState<RegisterRoomTypesDto>({
    name: '',
    inventory: '',
  });

  const addItem = () => {
    onOk(details);
    setDetails({
      name: '',
      inventory: '',
    });
  };

  const onCancel = () => {
    setDetails({
      name: '',
      inventory: '',
    });
    onClose();
  };

  const renderFooter = () => {
    return (
      <Button
        text="Add Room Type"
        onClick={addItem}
        type="primary"
        fullWidth={true}
      />
    );
  };

  return (
    <Modal
      title={null}
      visible={isVisible}
      okText="Submit"
      onOk={() => onOk}
      footer={renderFooter()}
      onCancel={onCancel}
    >
      <img src="../../assets/illustration.svg" />
      <div className="modal-description">
        Please enter the details of the staff member you would like to provide
        Sahala access to.
      </div>
      <form>
        <Input
          value={details.name}
          label="Hotel Name"
          onInput={(text) =>
            setDetails((prevState) => ({ ...prevState, name: text }))
          }
        />
        <Input
          value={details.inventory}
          label="Expected Hotel Inventory"
          onInput={(text) =>
            setDetails((prevState) => ({ ...prevState, inventory: text }))
          }
        />
      </form>
    </Modal>
  );
};

export default RoomDetailsModal;
