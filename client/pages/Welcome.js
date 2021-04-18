"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var antd_1 = require("antd");
var i18n_context_1 = require("../contexts/i18n.context");
var Welcome = function () {
    var i18n = react_1.useContext(i18n_context_1.i18nContext);
    var _a = react_1.useState('COVID-19 Institutional Quarantine Registration For Hotels'), title = _a[0], setTitle = _a[1];
    react_1.useEffect(function () {
        console.log(i18n);
        changeTitle();
    }, [i18n]);
    var history = react_router_dom_1.useHistory();
    var changeTitle = function () {
        if (i18n.lang === 'en') {
            setTitle('COVID-19 Institutional Quarantine Registration For Hotels');
        }
        else {
            setTitle('COVID-19 Institutional Quarantine Registration For Hotels');
        }
    };
    var chooseLanguage = function (_a) {
        var value = _a.target.value;
        i18n.setLang(value);
    };
    var optionsWithDisabled = [
        { label: 'English', value: 'en' },
        { label: 'عربي', value: 'ar' },
    ];
    return (<div className="form-signin text-center">
      <div>
        <img style={{ width: '30%', marginBottom: '3em' }} src="css/images/logo.png"/>
        <img style={{ width: '17%', marginBottom: '3em', marginLeft: '1.5em' }} src="css/images/national_committee_logo.jpg"/>
      </div>
      <h2 style={{ fontWeight: 'bold', marginBottom: '3rem' }} className="cov19Title">COVID-19 Institutional
        Quarantine
        Registration for Hotels</h2>
      <h3 className="lan_text">Select your language</h3>
      <div>
        <img src="css/images/translate.svg" className="trans_img"/>
      </div>

      <antd_1.Radio.Group options={optionsWithDisabled} value={i18n.lang} onChange={chooseLanguage} optionType="button" buttonStyle="solid"/>
      <div>
        <button className="mdc-button mdc-button--raised start" onClick={function () { return history.push('/terms'); }}>
          <span className="mdc-button__label start_lan">{i18n.translate('start')}</span>
        </button>
      </div>
    </div>);
};
exports["default"] = Welcome;
