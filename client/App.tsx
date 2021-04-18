import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Terms from './pages/Terms'
import Index from './pages/Register';
import './assets/fleming.less';
import { i18nContext } from './contexts/i18n.context';
import { useContext, useState } from 'react';

const App = () => {
  const [lang, setLang] = useState('en');
  const i18n = useContext(i18nContext);

  let translate = (key: string): string => {
    if (lang === 'en') {
      return i18n.langEN[key];
    } else {
      return i18n.langAr[key];
    }
  };

  return (
    <i18nContext.Provider
      value={{ lang, setLang, translate }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/register" component={Index} />
        </Switch>
      </Router>
    </i18nContext.Provider>
  );
};

export default App;
