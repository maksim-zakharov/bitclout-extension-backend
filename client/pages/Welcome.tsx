import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { i18nContext } from '../contexts/i18n.context';

const Welcome = () => {
  const i18n = useContext(i18nContext);

  const [title, setTitle] = useState(
    'COVID-19 Institutional Quarantine Registration For Hotels',
  );

  useEffect(() => {
    console.log(i18n);
    changeTitle();
  }, [i18n]);

  const history = useHistory();

  const changeTitle = () => {
    if (i18n.lang === 'en') {
      setTitle('COVID-19 Institutional Quarantine Registration For Hotels');
    } else {
      setTitle('COVID-19 Institutional Quarantine Registration For Hotels');
    }
  };

  const chooseLanguage = ({ target: { value } }: any) => {
    i18n.setLang(value);
  };

  const optionsWithDisabled = [
    { label: 'English', value: 'en' },
    { label: 'عربي', value: 'ar' },
  ];

  return (
    <div className="form-signin text-center">
      <div>
        <img
          style={{ width: '30%', marginBottom: '3em' }}
          src="css/images/logo.png"
        />
        <img
          style={{ width: '17%', marginBottom: '3em', marginLeft: '1.5em' }}
          src="css/images/national_committee_logo.jpg"
        />
      </div>
      <h2
        style={{ fontWeight: 'bold', marginBottom: '3rem' }}
        className="cov19Title"
      >
        COVID-19 Institutional Quarantine Registration for Hotels
      </h2>
      <h3 className="lan_text">Select your language</h3>
      <div>
        <img src="css/images/translate.svg" className="trans_img" />
      </div>

      {/*<Radio.Group*/}
      {/*  options={optionsWithDisabled}*/}
      {/*  value={i18n.lang}*/}
      {/*  onChange={chooseLanguage}*/}
      {/*  optionType="button"*/}
      {/*  buttonStyle="solid"*/}
      {/*/>*/}
      <div>
        <button
          className="mdc-button mdc-button--raised start"
          onClick={() => history.push('/terms')}
        >
          <span className="mdc-button__label start_lan">
            {i18n.translate('start')}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
