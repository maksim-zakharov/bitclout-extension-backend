import * as React from 'react';
import { useState } from 'react';
import * as api from '../../services/api.service';
import * as NotificationService from '../../services/notification.service';

import '../../css/form_styles.css';
import RoomDetailsModal from './RoomDetailsModal';
import RoomDetails from './RoomDetails';
import Input from '../../components/Input';
import Section from '../../components/Section';
import Button from '../../components/Button';
import NewStaffModal from './NewStaffModal';
import MemberDetails from './MemberDetails';
import Uploader from '../../components/Upload';

const Index = () => {
  const [state, setState] = useState<any>({
    contractedHotels: [],
    members: [],
    crFiles: [],
    hotelsFiles: [],
  });

  const {
    name,
    legalCompanyName,
    crNumber,
    crPerson,
    signatoryName,
    signatoryPhoneNumber,
    signatoryEmail,
    focalName,
    focalEmail,
    focalPhoneNumber,
    members,
    contractedHotels,
    isStaffModalVisible,
    isModalVisible,
  } = state;

  const addItem = (item) => {
    setState((prev) => ({
      ...prev,
      contractedHotels: prev.contractedHotels.concat(item),
      isModalVisible: false,
    }));
  };

  const deleteRoom = (item) => {
    setState((prev) => ({
      ...prev,
      contractedHotels: prev.contractedHotels.filter((r) => r !== item),
      isModalVisible: false,
    }));
  };

  const deleteMember = (item) => {
    setState((prev) => ({
      ...prev,
      members: prev.members.filter((r) => r !== item),
      isStaffModalVisible: false,
    }));
  };

  const addStaffMember = (member) => {
    setState((prev) => ({
      ...prev,
      members: prev.members.concat(member),
      isStaffModalVisible: false,
    }));
  };

  const register = async () => {
    const { id, error } = await api.register(state);
    if (error) {
      NotificationService.error(error.message);
    } else {
      await api.uploadCrFiles(id, state.crFiles);
      await api.uploadHotelFiles(id, state.hotelsFiles);
      NotificationService.success('Hotel successfully registered');
    }
  };

  const showModal = () => {
    setState((prev) => ({ ...prev, isModalVisible: true }));
  };

  const showStaffModal = () => {
    setState((prev) => ({ ...prev, isStaffModalVisible: true }));
  };

  const onClose = () => {
    setState((prev) => ({
      ...prev,
      isModalVisible: false,
      isStaffModalVisible: false,
    }));
  };

  return (
    <>
      <div className="container mainTextDir">
        <div style={{ width: '40rem' }}>
          <h1 style={{ fontWeight: 'bold' }} id="registrationPage">
            Sahala DMC Registration
          </h1>
          <div style={{ textAlign: 'center' }}>
            <img
              src="css/images/register_image.png"
              style={{ width: '30rem' }}
            />
          </div>

          <Section
            title="DMC Details"
            description="Please enter your DMC details below, and your CR details"
          />

          <Input
            value={name}
            label="DMC Name"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, name: text }))
            }
          />
          <Input
            value={legalCompanyName}
            label="Legal Company Name (as written on CR)"
            onInput={(text) =>
              setState((prevState) => ({
                ...prevState,
                legalCompanyName: text,
              }))
            }
          />
          <Input
            value={crNumber}
            label="CR Number"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, crNumber: text }))
            }
          />
          <Input
            value={crPerson}
            label="Contact Person (as listed on CR)"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, crPerson: text }))
            }
          />
          <Input
            value={signatoryName}
            label="Authorized Signatory Name"
            onInput={(text) =>
              setState((prevState) => ({
                ...prevState,
                signatoryName: text,
              }))
            }
          />
          <Input
            value={signatoryPhoneNumber}
            label="Authorized Signatory Phone Number"
            onInput={(text) =>
              setState((prevState) => ({
                ...prevState,
                signatoryPhoneNumber: text,
              }))
            }
          />
          <Input
            value={signatoryEmail}
            label="Authorized Signatory Email"
            onInput={(text) =>
              setState((prevState) => ({
                ...prevState,
                signatoryEmail: text,
              }))
            }
          />
          <Uploader
            title="Please Upload a copy of the CR"
            onUpload={(text) =>
              setState((prevState) => ({ ...prevState, crFiles: text }))
            }
          />

          <Section
            title="DMC Focal Point"
            description="Please share the name and the contact details of the focal point within your DMC. The focal point needs to be a person that eMushrif can communicate with when needed."
          />
          <Input
            value={focalName}
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, focalName: text }))
            }
            label="Focal Point Name"
          />
          <Input
            value={focalEmail}
            label="Focal Point Email"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, focalEmail: text }))
            }
          />
          <Input
            value={focalPhoneNumber}
            label="Focal Point Phone Number"
            onInput={(text) =>
              setState((prevState) => ({
                ...prevState,
                focalPhoneNumber: text,
              }))
            }
          />
          <Uploader
            title="Please Upload a copy of the list of contracted hotels"
            onUpload={(text) =>
              setState((prevState) => ({ ...prevState, hotelsFiles: text }))
            }
          />

          <Section
            title="Sahala Access"
            description="Please share the information about the staff you would like to provide Sahala platform access to. The staff will be able to log into the platform using either their mobile number or email.

Please enter the details of a minimum of 2 and a maximum of 5 staff members (contact us if you need more resources). "
          />

          <MemberDetails details={members} onDelete={deleteMember} />
          <Button
            withIcon={true}
            text="Add A New Staff Member"
            onClick={showStaffModal}
            type="primary"
          />

          <Section
            title="List of Contracted Hotels"
            description="Please share the list of contracted hotels. Add each hotel and their details seprately
In addition, please attach a stamped and signed copy of the list of hotel names on your company’s letterhead."
          />

          <RoomDetails details={contractedHotels} onDelete={deleteRoom} />

          <Button
            withIcon={true}
            text="Add A New Contracted hotel"
            onClick={showModal}
            type="primary"
          />

          <Button
            text="Submit Registration Form"
            onClick={register}
            fullWidth={true}
          />
          <br />
          <br />
        </div>
      </div>
      <NewStaffModal
        isVisible={isStaffModalVisible}
        onOk={addStaffMember}
        onClose={onClose}
      />
      <RoomDetailsModal
        isVisible={isModalVisible}
        onOk={addItem}
        onClose={onClose}
      />
    </>
  );
};

export default Index;
